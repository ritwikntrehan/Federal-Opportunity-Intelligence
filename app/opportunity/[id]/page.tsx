import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DetailSectionBlock } from '@/components/DetailSectionBlock';
import { allOpportunities, getAwardsByIds, getOpportunityById, getPartnersByIds } from '@/lib/data';

export function generateStaticParams() {
  return allOpportunities.map((opportunity) => ({ id: opportunity.id }));
}

export default function OpportunityDetailPage({ params }: { params: { id: string } }) {
  const opportunity = getOpportunityById(params.id);
  if (!opportunity) {
    notFound();
  }

  const similarAwards = getAwardsByIds(opportunity.similarAwardIds);
  const likelyPartners = getPartnersByIds(opportunity.likelyPartnerIds);

  return (
    <div className="container-shell py-10">
      <p className="text-sm text-slate-500">Opportunity detail</p>
      <h1 className="mt-2 text-3xl font-semibold text-slate-900">{opportunity.title}</h1>
      <div className="mt-4 grid gap-4 text-sm text-slate-700 sm:grid-cols-4">
        <div>
          <p className="font-medium text-slate-500">Agency</p>
          <p>{opportunity.agency}</p>
        </div>
        <div>
          <p className="font-medium text-slate-500">Deadline</p>
          <p>{opportunity.deadline}</p>
        </div>
        <div>
          <p className="font-medium text-slate-500">Category</p>
          <p>{opportunity.category}</p>
        </div>
        <div>
          <p className="font-medium text-slate-500">Geography</p>
          <p>{opportunity.geography}</p>
        </div>
      </div>

      <p className="mt-6 max-w-4xl text-slate-700">{opportunity.shortSummary}</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <DetailSectionBlock title="Why it may fit" items={opportunity.whyFit} />
        <DetailSectionBlock title="Why it may not fit" items={opportunity.whyNotFit} />
      </div>

      <section className="mt-8 rounded-lg border border-slate-200 bg-white p-5">
        <h2 className="text-base font-semibold text-slate-900">Similar prior awards</h2>
        <ul className="mt-4 space-y-3 text-sm text-slate-700">
          {similarAwards.map((award) => (
            <li key={award.id}>
              <p className="font-medium text-slate-900">{award.title}</p>
              <p>{award.recipient} · {award.amount} · {award.geography}</p>
              <p className="text-slate-600">{award.relevanceNote}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8 rounded-lg border border-slate-200 bg-white p-5">
        <h2 className="text-base font-semibold text-slate-900">Likely partners / institutions</h2>
        <ul className="mt-4 space-y-3 text-sm text-slate-700">
          {likelyPartners.map((partner) => (
            <li key={partner.id}>
              <p className="font-medium text-slate-900">{partner.name}</p>
              <p>{partner.type} · {partner.geography}</p>
              <p className="text-slate-600">{partner.rationale}</p>
            </li>
          ))}
        </ul>
      </section>

      <DetailSectionBlock title="What a full opportunity memo would include" items={opportunity.memoOutline} />

      <section className="mt-8 rounded-lg border border-slate-300 bg-slate-100 p-6">
        <h2 className="text-lg font-semibold text-slate-900">Request-based advanced analysis</h2>
        <p className="mt-2 max-w-3xl text-sm text-slate-700">
          Detailed opportunity memos are available through pilot and manual request workflows. This public prototype does not run fully automated memo generation.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/request-analysis" className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white">
            Request Full Analysis
          </Link>
          <Link href="/request-analysis" className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-900">
            Join Pilot
          </Link>
        </div>
      </section>
    </div>
  );
}
