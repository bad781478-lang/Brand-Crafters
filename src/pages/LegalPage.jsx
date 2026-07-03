import { DEFAULT_WHATSAPP_URL } from '../utils/whatsapp';

export default function LegalPage({ title }) {
  return (
    <section className="min-h-screen bg-black px-6 pt-40 pb-24 text-white">
      <div className="mx-auto flex max-w-4xl flex-col items-start gap-7">
        <p className="font-body text-xs font-bold uppercase tracking-[0.24em] text-white/40">
          Legal
        </p>
        <h1 className="font-headline text-5xl font-black uppercase leading-none tracking-tight md:text-7xl">
          {title}
        </h1>
        <p className="max-w-2xl font-body text-lg leading-relaxed text-white/65">
          This page is being finalized. For policy questions or project-specific terms, contact Brand Crafters directly.
        </p>
        <a
          href={DEFAULT_WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-full bg-white px-7 py-4 font-headline text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white/85"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
