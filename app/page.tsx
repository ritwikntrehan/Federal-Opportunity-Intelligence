import Link from 'next/link';
import { Hero } from '@/components/Hero';

const valueItems = [
  {
    title: 'Discovery',
    text: 'Structured funding discovery across agencies and categories using consistent opportunity records.'
  },
  {
    title: 'Fit analysis',
    text: 'Rapid assessments of relevance, constraints, and likely pursuit burden for each opportunity.'
  },
  {
    title: 'Precedent analysis',
    text: 'Signals from prior awards to calibrate strategy and identify credible application patterns.'
  },
  {
    title: 'Memo workflow',
    text: 'Request-based pilot workflow for deeper opportunity memos and pursuit planning.'
  }
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="container-shell py-12">
        <h2 className="text-2xl font-semibold text-slate-900">Why this matters</h2>
        <p className="mt-3 max-w-4xl text-slate-700">
          Organizations can often find funding notices, but quickly judging fit, precedent, and whether pursuit effort is worthwhile is still difficult. This prototype demonstrates a decision-support approach designed to reduce that ambiguity.
        </p>
      </section>
      <section className="container-shell py-8">
        <h2 className="text-2xl font-semibold text-slate-900">What the prototype demonstrates</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {valueItems.map((item) => (
            <article key={item.title} className="rounded-lg border border-slate-200 bg-white p-5">
              <h3 className="font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="container-shell py-12">
        <h2 className="text-2xl font-semibold text-slate-900">Three-step workflow</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {['Discover opportunities', 'Evaluate fit and precedent', 'Pursue with focused analysis'].map((step, idx) => (
            <div key={step} className="rounded-lg border border-slate-200 bg-white p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Step {idx + 1}</p>
              <p className="mt-2 font-medium text-slate-900">{step}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="container-shell py-12">
        <h2 className="text-2xl font-semibold text-slate-900">Prototype screens</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {[
            { title: 'Opportunity search', text: 'Filter opportunities by sector, geography, and organizational relevance.' },
            { title: 'Opportunity detail', text: 'Review fit rationale, constraints, and precedent-linked context.' },
            { title: 'Request analysis', text: 'Submit intake details for pilot-stage memo and pursuit support.' }
          ].map((screen) => (
            <div key={screen.title} className="rounded-lg border border-slate-200 bg-white p-5">
              <h3 className="font-medium text-slate-900">{screen.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{screen.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-7 flex gap-4">
          <Link href="/search" className="rounded-md bg-slate-900 px-5 py-2.5 text-sm font-medium text-white">
            Explore Prototype
          </Link>
          <Link href="/request-analysis" className="rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-900">
            Request Analysis
          </Link>
        </div>
      </section>
    </>
  );
}
