export type Opportunity = {
  id: string;
  title: string;
  agency: string;
  deadline: string;
  geography: string;
  industryTags: string[];
  organizationTypes: string[];
  category: string;
  shortSummary: string;
  fitSummary: string;
  whyFit: string[];
  whyNotFit: string[];
  similarAwardIds: string[];
  likelyPartnerIds: string[];
  memoOutline: string[];
  statusLabel: string;
};

export type Award = {
  id: string;
  title: string;
  agency: string;
  recipient: string;
  amount: string;
  geography: string;
  organizationType: string;
  summary: string;
  relevanceNote: string;
};

export type Partner = {
  id: string;
  name: string;
  type: string;
  geography: string;
  rationale: string;
};

export type Persona = {
  id: string;
  label: string;
  orgType: string;
  sector: string;
  geography: string;
  priorities: string[];
};
