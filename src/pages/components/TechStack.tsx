import { ContentCard } from '../../components/commons/ContentCard';
import { TechItem } from '../../components/commons/TechItem';
import { technologies } from '../../data/techStack';

export function TechStack() {

  return (
    <ContentCard className="p-6">
      <div className="mb-6">
        <h3 className="font-['Inter'] text-lg font-semibold mb-1 text-foreground">Tech Stack</h3>
        <p className="font-['JetBrains_Mono'] text-xs text-muted-foreground">Primary tools & technologies</p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {technologies.map((tech) => (
          <TechItem
            key={tech.name}
            name={tech.name}
            category={tech.category}
          />
        ))}
      </div>
    </ContentCard>
  );
}