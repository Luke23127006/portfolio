import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from '../ImageWithFallback';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  live: string;
}

export function ProjectCard({ title, description, tech, image, github, live }: ProjectCardProps) {
  return (
    <div className="border border-border bg-secondary rounded-lg overflow-hidden hover:border-muted transition-colors group">
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden bg-background">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Project Info */}
      <div className="p-5">
        <h4 className="font-['Inter'] font-semibold text-base mb-2 text-foreground">
          {title}
        </h4>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((techItem) => (
            <span 
              key={techItem}
              className="font-['JetBrains_Mono'] text-xs px-2 py-1 bg-muted border border-border rounded text-muted-foreground"
            >
              {techItem}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-border">
          <a 
            href={github}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-4 h-4" />
            <span className="font-['JetBrains_Mono'] text-xs">Code</span>
          </a>
          <a 
            href={live}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span className="font-['JetBrains_Mono'] text-xs">Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
}
