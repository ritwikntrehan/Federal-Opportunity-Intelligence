import { ArchitectureDiagram } from '@/components/ArchitectureDiagram';

const sections = [
  {
    title: 'Data sources',
    text: 'The prototype starts from public opportunity records, historical award announcements, and agency documentation to establish a transparent base layer.'
  },
  {
    title: 'Normalization',
    text: 'Opportunity records are mapped into a common schema so organizations can compare deadlines, eligibility patterns, and category signals across agencies.'
  },
  {
    title: 'Opportunity matching',
    text: 'Matching logic links opportunities to organizational context such as sector, geography, and organization type relevance.'
  },
  {
    title: 'Precedent analysis',
    text: 'Related prior awards provide context on recipient profiles, award sizes, and patterns that can inform pursuit strategy.'
  },
  {
    title: 'Partner signal logic',
    text: 'Likely partner institutions are surfaced based on prior delivery patterns and domain-specific implementation requirements.'
  },
  {
    title: 'Opportunity memo workflow',
    text: 'For pilot users, deeper opportunity memo production is handled through request-based analysis rather than a fully live automated workflow.'
  }
];

export default function HowItWorksPage() {
  return (
    <div className="container-shell py-10">
      <h1 className="text-3xl font-semibold text-slate-900">How It Works</h1>
      <p className="mt-3 max-w-4xl text-slate-700">
        This site demonstrates the structure of an intelligence layer over public funding data. The goal is to show architecture and workflow design, not to claim a fully automated production platform.
      </p>

      <div className="mt-8">
        <ArchitectureDiagram />
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {sections.map((section) => (
          <article key={section.title} className="rounded-lg border border-slate-200 bg-white p-5">
            <h2 className="text-base font-semibold text-slate-900">{section.title}</h2>
            <p className="mt-2 text-sm text-slate-700">{section.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
