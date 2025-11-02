import { Mail, Twitter, Github } from 'lucide-react';

export default function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200/70 bg-white/80 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-medium text-zinc-900">Weekend Builders</p>
          <p className="text-sm text-zinc-500">Weekly ideas and playbooks for indie founders.</p>
        </div>
        <nav className="flex items-center gap-4">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-200/70 bg-white px-3 py-2 text-sm text-zinc-700 shadow-sm transition hover:bg-zinc-50"
          >
            <Twitter className="h-4 w-4" />
            <span>Twitter</span>
          </a>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-200/70 bg-white px-3 py-2 text-sm text-zinc-700 shadow-sm transition hover:bg-zinc-50"
          >
            <Mail className="h-4 w-4" />
            <span>Contact</span>
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-200/70 bg-white px-3 py-2 text-sm text-zinc-700 shadow-sm transition hover:bg-zinc-50"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
        </nav>
      </div>
    </footer>
  );
}
