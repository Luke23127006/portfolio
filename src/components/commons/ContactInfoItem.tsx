import { type ContactData } from '../../data/contact';
import { useState } from 'react';

export function ContactInfoItem({ icon: Icon, label, display, value, copiable, isLink }: ContactData) {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    if (copiable) {
      try {
        await navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    } else if (isLink) {
      window.open(value, '_blank', 'noopener,noreferrer');
    }
  };

  const isInteractive = copiable || isLink;

  return (
    <div 
      className={`flex items-start gap-3 py-1 ${isInteractive ? 'cursor-pointer hover:bg-accent/5 -mx-2 px-2 rounded-[12px] transition-colors' : ''}`}
      onClick={isInteractive ? handleClick : undefined}
    >
      <Icon className="w-4 h-4 text-muted-foreground mt-1" />
      <div>
        <p className="font-['JetBrains_Mono'] text-xs text-muted-foreground uppercase tracking-wider mb-1">
          {label}
        </p>
        <p className="text-sm text-foreground">
          {copied ? 'Copied!' : display}
          {isLink && <span className="text-muted-foreground ml-1">↗</span>}
        </p>
      </div>
    </div>
  );
}
