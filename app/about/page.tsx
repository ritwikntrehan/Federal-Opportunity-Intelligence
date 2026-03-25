const capabilities = [
  'Public data ingestion and schema normalization',
  'Document analysis and evidence extraction',
  'Retrieval and ranking for opportunity relevance',
  'Structured decision support for pursuit planning',
  'Product architecture for pilot-to-production evolution'
];

export default function AboutPage() {
  return (
    <div className="container-shell py-10">
      <h1 className="text-3xl font-semibold text-slate-900">About</h1>
      <p className="mt-3 max-w-4xl text-slate-700">
        Federal Opportunity Intelligence exists as a public demonstration of funding-intelligence product design. It is intended to show how structured analysis workflows can improve funding pursuit decisions while honestly reflecting pilot-stage maturity.
      </p>
      <section className="mt-8 rounded-lg border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">Capability focus</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-700">
          {capabilities.map((capability) => (
            <li key={capability} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
              <span>{capability}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
