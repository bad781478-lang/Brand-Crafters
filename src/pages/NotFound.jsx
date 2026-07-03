import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="min-h-screen bg-black px-6 pt-40 pb-24 text-white">
      <div className="mx-auto flex max-w-4xl flex-col items-start gap-8">
        <p className="font-body text-xs font-bold uppercase tracking-[0.24em] text-white/40">
          404
        </p>
        <h1 className="font-headline text-5xl font-black uppercase leading-none tracking-tight md:text-7xl">
          Page not found
        </h1>
        <p className="max-w-xl font-body text-lg leading-relaxed text-white/65">
          This page is not available, but the studio is still here. Head back home or use the navigation to keep exploring Brand Crafters.
        </p>
        <Link
          to="/"
          className="inline-flex rounded-full bg-white px-7 py-4 font-headline text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white/85"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}
