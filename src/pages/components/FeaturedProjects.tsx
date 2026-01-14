import { ContentCard } from '../../components/commons/ContentCard';
import { ProjectCard } from '../../components/commons/ProjectCard';
import { projects } from '../../data/projects';

export function FeaturedProjects() {

  return (
    <ContentCard className="p-6">
      <div className="mb-6">
        <h3 className="font-['Inter'] text-lg font-semibold mb-1 text-foreground">Featured Projects</h3>
        <p className="font-['JetBrains_Mono'] text-xs text-muted-foreground">Recent work & contributions</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tech={project.tech}
            image={project.image}
            github={project.github}
            live={project?.live || ''}
            video={project?.video || ''}
          />
        ))}
      </div>
    </ContentCard>
  );
}