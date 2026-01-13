import { GithubStats } from './components/GithubStats';
import { TechStack } from './components/TechStack';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Awards } from './components/Awards';
import { HeroCard } from './components/HeroCard';
import { ContactCard } from './components/ContactCard';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">
          {/* Hero Card - spans 2 columns */}
          <div className="md:col-span-2 lg:col-span-2">
            <HeroCard />
          </div>
          
          {/* Github Stats - spans 1 column, tall */}
          <div className="lg:col-span-1 md:row-span-2">
            <GithubStats />
          </div>
          
          {/* Contact Card - spans 1 column */}
          <div className="lg:col-span-1">
            <ContactCard />
          </div>
          
          {/* Tech Stack - spans 2 columns */}
          <div className="md:col-span-2 lg:col-span-2">
            <TechStack />
          </div>
          
          {/* Awards - spans 1 column */}
          <div className="lg:col-span-1">
            <Awards />
          </div>
          
          {/* Featured Projects - spans full width */}
          <div className="md:col-span-2 lg:col-span-4">
            <FeaturedProjects />
          </div>
        </div>
      </div>
    </div>
  );
}