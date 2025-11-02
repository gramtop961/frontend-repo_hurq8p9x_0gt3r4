import { Lightbulb, Rocket, TrendingUp, Wrench } from 'lucide-react';

const topics = [
  {
    title: 'Lean, validated ideas',
    description:
      'Ideas backed by trends, search data, and willingness-to-pay signals so you don\'t waste time.',
    icon: Lightbulb,
  },
  {
    title: 'Zero-to-one playbooks',
    description:
      'Step-by-step launches using no-code, AI, and micro-SaaS tooling you can execute in a weekend.',
    icon: Rocket,
  },
  {
    title: 'Monetization models',
    description:
      'Clear paths to first $1k MRR with pricing, distribution, and retention tactics that work.',
    icon: TrendingUp,
  },
  {
    title: 'Tools & templates',
    description:
      'Stacks, templates, and automations that accelerate shipping and reduce scope creep.',
    icon: Wrench,
  },
];

export default function Topics() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="font-display text-2xl font-semibold text-zinc-900 sm:text-3xl">What you\'ll get</h2>
          <p className="mt-2 max-w-2xl text-zinc-600">
            Curated, actionable content to help you spot opportunities and ship faster.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {topics.map((t) => (
          <article
            key={t.title}
            className="group rounded-xl border border-zinc-200/70 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200/70 bg-white text-zinc-800 shadow-sm">
              <t.icon className="h-5 w-5" />
            </div>
            <h3 className="text-base font-semibold text-zinc-900">{t.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-zinc-600">{t.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
