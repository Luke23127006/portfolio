interface TechItemProps {
  name: string;
  category: string;
}

export function TechItem({ name, category }: TechItemProps) {
  return (
    <div className="border border-border bg-secondary p-4 rounded-lg hover:border-muted transition-colors group">
      <div className="flex flex-col h-full">
        <span className="font-['Inter'] font-semibold text-sm mb-2 text-foreground group-hover:text-primary transition-colors">
          {name}
        </span>
        <span className="font-['JetBrains_Mono'] text-xs text-muted-foreground mt-auto">
          {category}
        </span>
      </div>
    </div>
  );
}
