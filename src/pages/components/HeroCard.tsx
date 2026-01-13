import { ArrowUpRight } from 'lucide-react';

export function HeroCard() {
  return (
    <div className="h-full border border-border bg-card p-8 rounded-[var(--radius)] hover:border-muted transition-colors">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="inline-block px-3 py-1 border border-border rounded-full mb-4">
            <span className="font-['JetBrains_Mono'] text-xs text-muted-foreground">Available for hire</span>
          </div>
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
          <a 
            href="#" 
            className="inline-flex items-center bg-primary gap-2 px-6 py-3 bg-red text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-['Inter'] font-medium"
          >
            View Resume
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:border-muted transition-colors font-['Inter'] font-medium"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}