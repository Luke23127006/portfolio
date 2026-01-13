interface StatusBadgeProps {
  text: string;
  className?: string;
}

export function StatusBadge({ text, className = '' }: StatusBadgeProps) {
  return (
    <div className={`inline-block px-3 py-1 border border-border rounded-full ${className}`}>
      <span className="font-['JetBrains_Mono'] text-xs text-muted-foreground">{text}</span>
    </div>
  );
}
