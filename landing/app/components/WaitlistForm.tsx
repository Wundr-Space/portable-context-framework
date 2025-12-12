'use client';

import { useState, FormEvent } from 'react';
import { Github, Check } from 'lucide-react';

export function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    github: '',
    details: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // For now, just log to console
      // Phase 3: integrate with Convertkit/Mailchimp
      console.log('Waitlist signup:', {
        ...formData,
        timestamp: new Date().toISOString()
      });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      setStatus('success');

      // Reset form
      setFormData({
        name: '',
        email: '',
        interest: '',
        github: '',
        details: ''
      });

    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-12 bg-green-50 rounded-xl border border-green-200">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-neutral-900 mb-2">
          You're on the list!
        </h3>
        <p className="text-neutral-600 mb-6">
          We'll email you when early access opens.
          <br />
          In the meantime, star us on GitHub to follow progress.
        </p>
        <a
          href="https://github.com/Wundr-Space/portable-context-framework"
          className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-5 h-5" />
          View on GitHub
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
          placeholder="Your name"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
          placeholder="you@example.com"
        />
      </div>

      {/* Primary Interest */}
      <div>
        <label htmlFor="interest" className="block text-sm font-medium text-neutral-700 mb-2">
          What would you use this for? *
        </label>
        <select
          id="interest"
          required
          value={formData.interest}
          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
        >
          <option value="">Please select...</option>
          <option value="ai-coding">AI-assisted coding (Claude, Codex, Cursor)</option>
          <option value="team-coding">Team coding collaboration</option>
          <option value="documentation">Documentation workflows</option>
          <option value="design-systems">Design systems</option>
          <option value="operations">Operations/DevOps</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* GitHub Username */}
      <div>
        <label htmlFor="github" className="block text-sm font-medium text-neutral-700 mb-2">
          GitHub Username (optional)
        </label>
        <input
          type="text"
          id="github"
          value={formData.github}
          onChange={(e) => setFormData({ ...formData, github: e.target.value })}
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
          placeholder="@username"
        />
      </div>

      {/* Additional Context */}
      <div>
        <label htmlFor="details" className="block text-sm font-medium text-neutral-700 mb-2">
          Tell us more about your interest (optional)
        </label>
        <textarea
          id="details"
          rows={4}
          value={formData.details}
          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-y"
          placeholder="What problems are you hoping to solve? What tools do you currently use?"
        />
      </div>

      {/* Error Message */}
      {status === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {errorMessage}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
      >
        {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
      </button>

      {/* Privacy Note */}
      <p className="text-sm text-neutral-600 text-center">
        Data handled by Wundr Space Ltd (Company No. 15698755).
        <br />
        <a href="https://wundr.space/privacy.html" className="underline hover:text-neutral-900" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>
      </p>
    </form>
  );
}
