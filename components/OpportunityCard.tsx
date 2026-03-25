import Link from 'next/link';
import { Opportunity } from '@/lib/types';

type OpportunityCardProps = {
  opportunity: Opportunity;
  precedentHint: string;
};

export function OpportunityCard({ opportunity, precedentHint }: OpportunityCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{opportunity.title}</h3>
          <p className="mt-1 text-sm text-slate-600">{opportunity.agency}</p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">{opportunity.statusLabel}</span>
      </div>
      <dl className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-3">
        <div>
          <dt className="font-medium text-slate-500">Deadline</dt>
          <dd>{opportunity.deadline}</dd>
        </div>
        <div>
          <dt className="font-medium text-slate-500">Geography</dt>
          <dd>{opportunity.geography}</dd>
        </div>
        <div>
          <dt className="font-medium text-slate-500">Org type relevance</dt>
          <dd>{opportunity.organizationTypes.join(', ')}</dd>
        </div>
      </dl>
      <p className="mt-4 text-sm text-slate-700">{opportunity.fitSummary}</p>
      <p className="mt-3 text-sm text-slate-600">
        <span className="font-medium text-slate-700">Prior-award signal:</span> {precedentHint}
      </p>
      <div className="mt-5">
        <Link href={`/opportunity/${opportunity.id}`} className="text-sm font-medium text-slate-900 underline underline-offset-4">
          View opportunity detail
        </Link>
      </div>
    </article>
  );
}
