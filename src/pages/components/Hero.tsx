import { ArrowUpRight } from 'lucide-react';
import { ContentCard } from '../../components/commons/ContentCard';
import { StatusBadge } from '../../components/commons/StatusBadge';
import { Button } from '../../components/ui/Button';

export function HeroCard() {
  return (
    <ContentCard className="p-8">
      <div className="flex flex-col justify-between h-full">
        <div>
          <StatusBadge text="Available for hire" className="mb-4" />
          <h1 className="font-['Inter'] text-4xl md:text-5xl font-bold mb-3 tracking-tight text-foreground">
            Alex Chen
          </h1>
          <h2 className="font-['Inter'] text-xl md:text-2xl text-muted-foreground mb-6">
            Senior React Engineer
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-xl">
            Crafting performant, scalable web applications with modern React ecosystems. 
            Specializing in TypeScript, state management, and component architecture.
          </p>
        </div>
        
        <div className="flex gap-4 mt-8">
          <Button href="#" variant="primary">
            View Resume
            <ArrowUpRight className="w-4 h-4" />
          </Button>
          <Button href="#" variant="secondary">
            Contact Me
          </Button>
        </div>
      </div>
    </ContentCard>
  );
}