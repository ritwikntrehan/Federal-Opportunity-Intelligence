import { CTAGroup } from './CTAGroup';

export function Hero() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-shell">
        <p className="mb-3 text-sm font-medium uppercase tracking-wide text-slate-500">Pilot-stage opportunity intelligence</p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Discover public funding opportunities and evaluate fit with structured, evidence-oriented analysis.
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-slate-700">
          Federal Opportunity Intelligence demonstrates how an intelligence layer can sit on top of fragmented public funding data to support discovery, fit analysis, precedent review, and pursuit decisions.
        </p>
        <p className="mt-4 max-w-3xl text-sm text-slate-600">
          Advanced opportunity memo production is currently available through pilot and manual-request workflows, not as a fully automated self-serve feature.
        </p>
        <div className="mt-8">
          <CTAGroup />
        </div>
      </div>
    </section>
  );
}
