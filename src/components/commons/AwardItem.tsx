import { type LucideIcon } from 'lucide-react';

interface AwardItemProps {
  icon: LucideIcon;
  title: string;
  organization: string;
  year: string;
}

export function AwardItem({ icon: Icon, title, organization, year }: AwardItemProps) {
  return (
    <div className="border border-border bg-secondary p-4 rounded-lg">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-muted rounded-lg">
          <Icon className="w-4 h-4 text-foreground" />
        </div>
        <div className="flex-1">
          <h4 className="font-['Inter'] font-semibold text-sm mb-1 text-foreground">
            {title}
          </h4>
          <p className="font-['JetBrains_Mono'] text-xs text-muted-foreground">
            {organization}
          </p>
          <p className="font-['JetBrains_Mono'] text-xs text-muted-foreground mt-1">
            {year}
          </p>
        </div>
      </div>
    </div>
  );
}
