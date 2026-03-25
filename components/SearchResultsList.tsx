import { Award, Opportunity } from '@/lib/types';
import { OpportunityCard } from './OpportunityCard';

type SearchResultsListProps = {
  opportunities: Opportunity[];
  awards: Award[];
};

export function SearchResultsList({ opportunities, awards }: SearchResultsListProps) {
  return (
    <div className="space-y-4">
      {opportunities.map((opportunity) => {
        const firstAward = awards.find((award) => opportunity.similarAwardIds.includes(award.id));
        const hint = firstAward
          ? `${firstAward.title} (${firstAward.recipient}, ${firstAward.amount})`
          : 'Related precedent available in pilot review.';
        return <OpportunityCard key={opportunity.id} opportunity={opportunity} precedentHint={hint} />;
      })}
    </div>
  );
}
