import { useState } from 'react';

export default function SubscribeForm({ variant = 'primary' }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      setError('Please enter a valid email.');
      return;
    }

    setLoading(true);
    try {
      // Simulate a successful subscribe action
      await new Promise((res) => setTimeout(res, 900));
      setSuccess(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="w-full rounded-xl border border-emerald-200/60 bg-emerald-50/60 p-4 text-emerald-800 shadow-sm">
        <p className="font-medium">You're in! 🎉</p>
        <p className="text-sm opacity-80">Check your inbox to confirm your subscription.</p>
      </div>
    );
  }

  const baseInput =
    'h-11 w-full rounded-lg border border-zinc-200/70 bg-white px-3 text-sm outline-none ring-0 transition focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200/80 placeholder:text-zinc-400';

  const buttonClass =
    variant === 'primary'
      ? 'bg-black text-white hover:bg-zinc-900 focus:ring-black/20'
      : 'bg-white text-black border border-zinc-200 hover:bg-zinc-50 focus:ring-zinc-300/60';

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-3" aria-label="Subscribe to newsletter">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className={baseInput}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            className={baseInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="sm:col-span-1">
          <button
            type="submit"
            disabled={loading}
            className={`h-11 w-full rounded-lg px-4 text-sm font-medium transition focus:outline-none focus:ring-2 ${buttonClass} disabled:opacity-60`}
          >
            {loading ? 'Subscribing…' : 'Subscribe'}
          </button>
        </div>
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <p className="text-xs text-zinc-500">No spam. Unsubscribe anytime.</p>
    </form>
  );
}
