import { Award, Trophy } from 'lucide-react';

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
    <div className="h-full border border-border bg-card p-6 rounded-[var(--radius)] hover:border-muted transition-colors">
      <h3 className="font-['Inter'] text-lg font-semibold mb-6 text-foreground">Awards</h3>
      
      <div className="space-y-4">
        {awards.map((award, index) => {
          const Icon = award.icon;
          return (
            <div 
              key={index}
              className="border border-border bg-secondary p-4 rounded-lg"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-muted rounded-lg">
                  <Icon className="w-4 h-4 text-foreground" />
                </div>
                <div className="flex-1">
                  <h4 className="font-['Inter'] font-semibold text-sm mb-1 text-foreground">
                    {award.title}
                  </h4>
                  <p className="font-['JetBrains_Mono'] text-xs text-muted-foreground">
                    {award.organization}
                  </p>
                  <p className="font-['JetBrains_Mono'] text-xs text-muted-foreground mt-1">
                    {award.year}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}