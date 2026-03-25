import Link from 'next/link';

export function CTAGroup() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href="/search"
        className="rounded-md bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
      >
        Explore Prototype
      </Link>
      <Link
        href="/request-analysis"
        className="rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
      >
        Request Analysis
      </Link>
    </div>
  );
}
