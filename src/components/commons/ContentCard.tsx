import { type ReactNode } from 'react';

interface ContentCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function ContentCard({ children, className = '', hover = true }: ContentCardProps) {
  return (
    <div 
      className={`
        h-full border border-border bg-card rounded-[var(--radius)]
        transition-all duration-300
        ${hover ? 'hover:border-primary hover:shadow-[0_0_20px_rgba(var(--color-accent-glow))]' : ''}
        ${className}
      `.trim()}
    >
      {children}
    </div>
  );
}
