import Spline from '@splinetool/react-spline';
import SubscribeForm from './SubscribeForm';

export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="relative h-[72vh] w-full overflow-hidden rounded-none sm:h-[78vh]">
        {/* Spline Background */}
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Soft gradient overlays (non-interactive) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-white" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200/70 bg-white/90 px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            Weekly business ideas • Actionable insights
          </span>
          <h1 className="font-display max-w-3xl text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
            Fresh business ideas you can launch this weekend
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            Join indie founders and creators receiving one concise email each week: practical ideas, lean playbooks, and the tools to ship.
          </p>

          <div className="mt-6 w-full max-w-2xl">
            <SubscribeForm />
          </div>

          <p className="mt-3 text-xs text-zinc-500">
            Trusted by makers from Y Combinator, Product Hunt, and beyond
          </p>
        </div>
      </div>
    </section>
  );
}
