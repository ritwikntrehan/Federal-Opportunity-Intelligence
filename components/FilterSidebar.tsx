'use client';

type FilterSidebarProps = {
  industries: string[];
  geographies: string[];
  orgTypes: string[];
  selectedIndustry: string;
  selectedGeography: string;
  selectedOrgType: string;
  onIndustryChange: (value: string) => void;
  onGeographyChange: (value: string) => void;
  onOrgTypeChange: (value: string) => void;
};

const SelectField = ({
  label,
  value,
  options,
  onChange
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) => (
  <label className="block text-sm">
    <span className="mb-1 block font-medium text-slate-700">{label}</span>
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-800"
    >
      <option value="">All</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </label>
);

export function FilterSidebar(props: FilterSidebarProps) {
  return (
    <aside className="space-y-4 rounded-lg border border-slate-200 bg-white p-4">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-600">Filters</h2>
      <SelectField label="Industry" value={props.selectedIndustry} options={props.industries} onChange={props.onIndustryChange} />
      <SelectField label="Geography" value={props.selectedGeography} options={props.geographies} onChange={props.onGeographyChange} />
      <SelectField label="Organization Type" value={props.selectedOrgType} options={props.orgTypes} onChange={props.onOrgTypeChange} />
    </aside>
  );
}
