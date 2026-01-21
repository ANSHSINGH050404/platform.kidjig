"use client";

export default function ProviderLogos() {
  return (
    <section className="py-12 border-y border-border bg-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-10">
          Trusted by engineers from
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="text-2xl font-bold tracking-tighter">OpenAI</span>
          <span className="text-2xl font-bold tracking-tighter">Anthropic</span>
          <span className="text-2xl font-bold tracking-tighter">
            Google Cloud
          </span>
          <span className="text-2xl font-bold tracking-tighter">Meta</span>
          <span className="text-2xl font-bold tracking-tighter">Microsoft</span>
          <span className="text-2xl font-bold tracking-tighter">NVIDIA</span>
        </div>
      </div>
    </section>
  );
}
