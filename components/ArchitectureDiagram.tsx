const columns = [
  {
    title: 'Public data sources',
    items: ['Federal opportunity notices', 'Historical awards', 'Agency guidance documents']
  },
  {
    title: 'Normalization layer',
    items: ['Entity extraction', 'Schema mapping', 'Deadline and eligibility harmonization']
  },
  {
    title: 'Intelligence layer',
    items: ['Opportunity matching', 'Precedent analysis', 'Partner signal scoring']
  },
  {
    title: 'Decision support',
    items: ['Fit rationale', 'Pursuit risk flags', 'Pilot memo request workflow']
  }
];

export function ArchitectureDiagram() {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-300 bg-white p-4">
      <div className="grid gap-4 md:grid-cols-4">
        {columns.map((column, index) => (
          <div key={column.title} className="relative rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-sm font-semibold text-slate-900">{column.title}</h3>
            <ul className="mt-3 space-y-2 text-xs text-slate-700">
              {column.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {index < columns.length - 1 && (
              <div className="absolute -right-2 top-1/2 hidden h-px w-4 bg-slate-400 md:block" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
