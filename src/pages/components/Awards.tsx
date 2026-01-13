import { Award, Trophy } from 'lucide-react';
import { ContentCard } from '../../components/commons/ContentCard';
import { AwardItem } from '../../components/commons/AwardItem';

export function Awards() {
  const awards = [
    {
      title: 'Best Web App',
      organization: 'TechCrunch',
      year: '2025',
      icon: Trophy,
    },
    {
      title: 'Innovation Award',
      organization: 'React Conf',
      year: '2024',
      icon: Award,
    },
    {
      title: 'Top Contributor',
      organization: 'Open Source',
      year: '2023',
      icon: Award,
    },
  ];

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