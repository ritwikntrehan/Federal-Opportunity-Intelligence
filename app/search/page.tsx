'use client';

import { useMemo, useState } from 'react';
import { allAwards, allOpportunities } from '@/lib/data';
import { FilterSidebar } from '@/components/FilterSidebar';
import { SearchResultsList } from '@/components/SearchResultsList';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [industry, setIndustry] = useState('');
  const [geography, setGeography] = useState('');
  const [orgType, setOrgType] = useState('');

  const filterOptions = useMemo(() => {
    const industries = [...new Set(allOpportunities.flatMap((o) => o.industryTags))].sort();
    const geographies = [...new Set(allOpportunities.map((o) => o.geography))].sort();
    const orgTypes = [...new Set(allOpportunities.flatMap((o) => o.organizationTypes))].sort();
    return { industries, geographies, orgTypes };
  }, []);

  const results = useMemo(() => {
    const q = query.toLowerCase();
    return allOpportunities.filter((opportunity) => {
      const matchesQuery =
        !q ||
        opportunity.title.toLowerCase().includes(q) ||
        opportunity.agency.toLowerCase().includes(q) ||
        opportunity.shortSummary.toLowerCase().includes(q);
      const matchesIndustry = !industry || opportunity.industryTags.includes(industry);
      const matchesGeography = !geography || opportunity.geography === geography;
      const matchesOrgType = !orgType || opportunity.organizationTypes.includes(orgType);
      return matchesQuery && matchesIndustry && matchesGeography && matchesOrgType;
    });
  }, [query, industry, geography, orgType]);

  return (
    <div className="container-shell py-10">
      <h1 className="text-3xl font-semibold text-slate-900">Opportunity Search</h1>
      <p className="mt-2 text-sm text-slate-600">This prototype uses a curated local dataset to demonstrate structured funding discovery and fit analysis.</p>

      <div className="mt-6">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by title, agency, or summary"
          className="w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900"
        />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[260px_1fr]">
        <FilterSidebar
          industries={filterOptions.industries}
          geographies={filterOptions.geographies}
          orgTypes={filterOptions.orgTypes}
          selectedIndustry={industry}
          selectedGeography={geography}
          selectedOrgType={orgType}
          onIndustryChange={setIndustry}
          onGeographyChange={setGeography}
          onOrgTypeChange={setOrgType}
        />
        <section>
          <p className="mb-3 text-sm text-slate-600">{results.length} opportunities matched</p>
          <SearchResultsList opportunities={results} awards={allAwards} />
        </section>
      </div>
    </div>
  );
}
