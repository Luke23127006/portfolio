import { type LucideIcon } from 'lucide-react';

interface ContactInfoItemProps {
  icon: LucideIcon;
  label: string;
  value: string;
}

export function ContactInfoItem({ icon: Icon, label, value }: ContactInfoItemProps) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="w-4 h-4 text-muted-foreground mt-1" />
      <div>
        <p className="font-['JetBrains_Mono'] text-xs text-muted-foreground uppercase tracking-wider mb-1">
          {label}
        </p>
        <p className="text-sm text-foreground">{value}</p>
      </div>
    </div>
  );
}
