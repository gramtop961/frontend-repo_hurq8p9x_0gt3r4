export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16">
      <div className="rounded-2xl border border-zinc-200/70 bg-white p-8 shadow-sm">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <Quote
            text="Actionable, no fluff. I shipped my MVP in a weekend using one of the frameworks."
            author="Lena, Indie Hacker"
          />
          <Quote
            text="Love the specificity—ideas come with distribution angles and pricing guidance."
            author="Tom, Solo Founder"
          />
          <Quote
            text="The only newsletter I read end-to-end every Sunday. It helps me focus on what matters."
            author="Priya, Product Designer"
          />
        </div>
      </div>
    </section>
  );
}

function Quote({ text, author }) {
  return (
    <figure className="flex flex-col justify-between gap-3">
      <blockquote className="text-sm leading-relaxed text-zinc-700">“{text}”</blockquote>
      <figcaption className="text-xs font-medium text-zinc-500">{author}</figcaption>
    </figure>
  );
}
