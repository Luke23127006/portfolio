import { ArrowUpRight } from 'lucide-react';
import { ContentCard } from '../../components/commons/ContentCard';
import { StatusBadge } from '../../components/commons/StatusBadge';
import { Button } from '../../components/ui/Button';

export function HeroCard() {
  return (
    <ContentCard className="p-8">
      <div className="flex flex-col justify-between h-full">
        <div>
          <StatusBadge text="Open to Internship - HCMC, VN" className="mb-4" />
          <h1 className="font-['Inter'] text-4xl md:text-5xl font-bold mb-3 tracking-tight text-foreground">
            Tran Nguyen Khai Luan
          </h1>
          <h2 className="font-['Inter'] text-xl md:text-2xl text-muted-foreground mb-6">
            Software Developer
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-xl">
            I aim to become a professional software developer after graduation by joining real projects, building reliable applications, and keeping up with new technologies to improve my skills and gain industry experience. I also want to learn from colleagues and grow through teamwork.
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