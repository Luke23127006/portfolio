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
    <div className="border border-border bg-card p-6 rounded-[var(--radius)] hover:border-muted transition-colors">
      <div className="mb-6">
        <h3 className="font-['Inter'] text-lg font-semibold mb-1 text-foreground">Tech Stack</h3>
        <p className="font-['JetBrains_Mono'] text-xs text-muted-foreground">Primary tools & technologies</p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {technologies.map((tech) => (
          <div 
            key={tech.name}
            className="border border-border bg-secondary p-4 rounded-lg hover:border-muted transition-colors group"
          >
            <div className="flex flex-col h-full">
              <span className="font-['Inter'] font-semibold text-sm mb-2 text-foreground group-hover:text-primary transition-colors">
                {tech.name}
              </span>
              <span className="font-['JetBrains_Mono'] text-xs text-muted-foreground mt-auto">
                {tech.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}