import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PCF Developer Edition | Preserve Team Intelligence While Building at AI Speed",
  description: "Developer Edition MVP for teams using AI coding assistants. Capture collective intelligence as it emerges. MCP server, Git hooks, CLI. Git-native, zero lock-in, tool-agnostic.",
  keywords: ["AI coding", "developer tools", "context management", "team collaboration", "MCP", "Claude Code", "Cursor", "Windsurf", "git hooks", "collective intelligence"],
  openGraph: {
    title: "PCF Developer Edition | Preserve Team Intelligence While Building at AI Speed",
    description: "Your team discusses, debates, decides. Then Claude builds. But only the code survives. PCF captures collective intelligence before you lose it.",
    url: "https://context.wundr.space/dev-edition",
    siteName: "Portable Context Framework",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PCF Developer Edition",
    description: "Preserve team intelligence while building at AI speed. Git-native context for AI coding teams.",
  },
};

export default function DevEditionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
