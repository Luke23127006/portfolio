import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from '../../components/ImageWithFallback';

export function FeaturedProjects() {
  const projects = [
    {
      title: 'Analytics Dashboard',
      description: 'Real-time data visualization platform built with React, D3.js, and WebSocket integration',
      tech: ['React', 'TypeScript', 'D3.js', 'WebSocket'],
      image: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGFuYWx5dGljc3xlbnwxfHx8fDE3Njc4NDk5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Mobile Banking App',
      description: 'Cross-platform financial management application with biometric authentication',
      tech: ['React Native', 'Redux', 'Node.js', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzY3ODU5MzkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Enterprise CMS',
      description: 'Headless content management system with multi-tenant support and GraphQL API',
      tech: ['Next.js', 'GraphQL', 'Prisma', 'AWS'],
      image: 'https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3Njc4NjYxODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ];

  return (
    <div className="border border-border bg-card p-6 rounded-[var(--radius)] hover:border-muted transition-colors">
      <div className="mb-6">
        <h3 className="font-['Inter'] text-lg font-semibold mb-1 text-foreground">Featured Projects</h3>
        <p className="font-['JetBrains_Mono'] text-xs text-muted-foreground">Recent work & contributions</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="border border-border bg-secondary rounded-lg overflow-hidden hover:border-muted transition-colors group"
          >
            {/* Project Image */}
            <div className="relative aspect-video overflow-hidden bg-background">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Project Info */}
            <div className="p-5">
              <h4 className="font-['Inter'] font-semibold text-base mb-2 text-foreground">
                {project.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="font-['JetBrains_Mono'] text-xs px-2 py-1 bg-muted border border-border rounded text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Links */}
              <div className="flex gap-3 pt-4 border-t border-border">
                <a 
                  href={project.github}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span className="font-['JetBrains_Mono'] text-xs">Code</span>
                </a>
                <a 
                  href={project.live}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="font-['JetBrains_Mono'] text-xs">Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}