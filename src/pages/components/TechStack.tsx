import { ContentCard } from '../../components/commons/ContentCard';
import { TechItem } from '../../components/commons/TechItem';

export function TechStack() {
  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Next.js', category: 'Framework' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'GraphQL', category: 'API' },
    { name: 'TailwindCSS', category: 'Styling' },
    { name: 'Redux', category: 'State Mgmt' },
    { name: 'Jest', category: 'Testing' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Git', category: 'Version Control' },
  ];

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