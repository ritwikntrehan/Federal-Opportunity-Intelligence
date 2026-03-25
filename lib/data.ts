import opportunities from '@/data/opportunities.json';
import awards from '@/data/awards.json';
import partners from '@/data/partners.json';
import personas from '@/data/personas.json';
import { Award, Opportunity, Partner, Persona } from './types';

export const allOpportunities = opportunities as Opportunity[];
export const allAwards = awards as Award[];
export const allPartners = partners as Partner[];
export const allPersonas = personas as Persona[];

export const getOpportunityById = (id: string) =>
  allOpportunities.find((opportunity) => opportunity.id === id);

export const getAwardsByIds = (ids: string[]) =>
  allAwards.filter((award) => ids.includes(award.id));

export const getPartnersByIds = (ids: string[]) =>
  allPartners.filter((partner) => ids.includes(partner.id));
