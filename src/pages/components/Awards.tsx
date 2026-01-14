import { ContentCard } from '../../components/commons/ContentCard';
import { AwardItem } from '../../components/commons/AwardItem';
import { awards } from '../../data/awards';

export function Awards() {

  return (
    <ContentCard className="p-6">
      <h3 className="font-['Inter'] text-lg font-semibold mb-6 text-foreground">Awards</h3>
      
      <div className="space-y-4">
        {awards.map((award, index) => (
          <AwardItem
            key={index}
            icon={award.icon}
            title={award.title}
            organization={award.organization}
            year={award.year}
          />
        ))}
      </div>
    </ContentCard>
  );
}