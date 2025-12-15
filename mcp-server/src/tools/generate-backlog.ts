/**
 * Tool: generate_backlog
 * Synthesizes Azure DevOps-ready backlog items and wiki content from captured sessions
 */

import { promises as fs } from 'fs';
import path from 'path';
import {
  CONTEXT_DATA_DIR,
  ROOT_DIR,
  loadAllSessions,
  parseRelativeDate
} from '../lib/storage.js';
import type {
  BacklogFeature,
  BacklogGenerationInput,
  BacklogPlan,
  BacklogTask,
  BacklogUserStory,
  ContextSession
} from '../lib/types.js';

function buildTasks(session: ContextSession): BacklogTask[] {
  const commits = session.artifacts.commits || [];

  const designTask: BacklogTask = {
    title: 'Document design and architecture',
    description: 'Capture design rationale, dependencies, and risks for the wiki page.',
    doneDefinition: [
      'Wiki page updated with design notes',
      'Dependencies and rollout risks documented',
      'Links to relevant diagrams or docs included'
    ],
    relatedCommits: commits
  };

  const implementationTask: BacklogTask = {
    title: 'Link code changes to work item',
    description: 'Tag commits and PRs to ensure Azure DevOps traceability for this story.',
    doneDefinition: [
      'Commits reference the generated user story ID',
      'PR description references the backlog item',
      'CI status visible in Azure DevOps'
    ],
    relatedCommits: commits
  };

  const validationTask: BacklogTask = {
    title: 'Verify acceptance criteria',
    description: 'Add tests or validation steps to confirm the change meets the documented intent.',
    doneDefinition: [
      'Happy-path tests updated or added',
      'Edge cases documented',
      'Demo notes captured for reviewers'
    ],
    relatedCommits: commits
  };

  return [designTask, implementationTask, validationTask];
}

function buildUserStory(session: ContextSession): BacklogUserStory {
  const acceptanceCriteria = [
    `Traceability established for commits: ${(session.artifacts.commits || []).join(', ') || 'none recorded'}`,
    'Story is linked to PRs or deployment artifacts',
    'Design notes and edge cases are discoverable from the wiki'
  ];

  const wikiSection = [
    `### ${session.session.title}`,
    '',
    `**Type:** ${session.session.type} | **Status:** ${session.session.status}`,
    '',
    `**Summary**: ${session.summary}`,
    '',
    session.tags.length > 0 ? `**Tags**: ${session.tags.join(', ')}` : '**Tags**: none recorded',
    '',
    session.artifacts.commits?.length
      ? `**Commits**: ${session.artifacts.commits.join(', ')}`
      : '**Commits**: none recorded',
    '',
    session.artifacts.pr ? `**PR**: ${session.artifacts.pr}` : '**PR**: none provided',
    '',
    session.artifacts.chats?.length
      ? `**Chat References**: ${session.artifacts.chats.join(', ')}`
      : '**Chat References**: none recorded',
    '',
    session.artifacts.docs?.length
      ? `**Docs**: ${session.artifacts.docs.join(', ')}`
      : '**Docs**: none recorded'
  ].join('\n');

  return {
    title: `User story from session: ${session.session.title}`,
    description: session.summary,
    acceptanceCriteria,
    tasks: buildTasks(session),
    wikiSection
  };
}

function buildFeature(session: ContextSession): BacklogFeature {
  const userStory = buildUserStory(session);

  return {
    title: session.session.title,
    description: session.summary,
    tags: session.tags,
    sessionId: session.id,
    commits: session.artifacts.commits || [],
    userStories: [userStory]
  };
}

function buildWikiDocument(plan: BacklogPlan): string {
  const header = [
    `# ${plan.project} – Azure DevOps Backlog Export`,
    '',
    `Generated at ${plan.generatedAt}`,
    '',
    plan.azureOrganization
      ? `**Azure Organization:** ${plan.azureOrganization}`
      : '**Azure Organization:** not provided',
    plan.azureProject
      ? `**Azure Project:** ${plan.azureProject}`
      : '**Azure Project:** not provided',
    plan.repositoryUrl
      ? `**Repository:** ${plan.repositoryUrl}`
      : '**Repository:** not provided',
    ''
  ];

  const sections = plan.features.map((feature) => {
    const storyContent = feature.userStories.map((story) => story.wikiSection).join('\n\n');
    return [
      `## Feature: ${feature.title}`,
      '',
      feature.description,
      '',
      storyContent
    ].join('\n');
  });

  return header.concat(sections).join('\n');
}

async function persistPlan(plan: BacklogPlan, wikiContent: string): Promise<BacklogPlan> {
  const backlogDir = path.join(CONTEXT_DATA_DIR, 'projects', plan.project, 'backlog');

  await fs.mkdir(backlogDir, { recursive: true });

  const filenameBase = `${plan.generatedAt.replace(/[:]/g, '')}-azure-devops-backlog`;
  const backlogPath = path.join(backlogDir, `${filenameBase}.json`);
  const wikiPath = path.join(backlogDir, `${filenameBase}.md`);

  const updatedPlan: BacklogPlan = {
    ...plan,
    backlogPath: path.relative(ROOT_DIR, backlogPath),
    wikiPath: path.relative(ROOT_DIR, wikiPath)
  };

  await fs.writeFile(backlogPath, JSON.stringify(updatedPlan, null, 2));
  await fs.writeFile(wikiPath, wikiContent);

  return updatedPlan;
}

export async function generateBacklog(input: BacklogGenerationInput): Promise<string> {
  const sinceDate = input.since ? parseRelativeDate(input.since) : undefined;
  const limit = input.limit || 20;

  const sessions = await loadAllSessions(input.project);

  const filteredSessions = sessions
    .filter((session) => {
      if (!sinceDate) return true;
      return new Date(session.timestamp).getTime() >= sinceDate.getTime();
    })
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    .slice(0, limit);

  if (filteredSessions.length === 0) {
    return JSON.stringify({
      success: false,
      message: 'No sessions available to build a backlog. Capture context first.',
      project: input.project
    }, null, 2);
  }

  const features: BacklogFeature[] = filteredSessions.map(buildFeature);

  const plan: BacklogPlan = {
    project: input.project,
    azureOrganization: input.azure_organization,
    azureProject: input.azure_project || input.project,
    repositoryUrl: input.repository_url,
    generatedAt: new Date().toISOString(),
    features,
    backlogPath: '',
    wikiPath: ''
  };

  const wikiContent = buildWikiDocument(plan);
  const savedPlan = await persistPlan(plan, wikiContent);

  const response = {
    success: true,
    message: 'Backlog artifacts generated for Azure DevOps import.',
    project: input.project,
    backlog_file: savedPlan.backlogPath,
    wiki_file: savedPlan.wikiPath,
    features: savedPlan.features.map((feature) => ({
      title: feature.title,
      session: feature.sessionId,
      commits: feature.commits,
      user_stories: feature.userStories.length
    })),
    guidance: {
      backlog_import: 'Use the JSON to seed Features and User Stories in Azure DevOps. Link commits to the generated IDs.',
      wiki: 'Publish the markdown file to the project wiki for reviewer context.',
      traceability: 'Ensure PR descriptions reference the backlog item IDs before merging.'
    }
  };

  return JSON.stringify(response, null, 2);
}

