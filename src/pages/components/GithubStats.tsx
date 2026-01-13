import { GitBranch, Star, GitPullRequest, Users } from 'lucide-react';

export function GithubStats() {
  const stats = [
    { label: 'Repositories', value: '127', icon: GitBranch },
    { label: 'Stars Received', value: '2.3K', icon: Star },
    { label: 'Pull Requests', value: '856', icon: GitPullRequest },
    { label: 'Followers', value: '492', icon: Users },
  ];

  return (
    <div className="h-full border border-border bg-card p-6 rounded-[var(--radius)] hover:border-muted transition-colors flex flex-col">
      <div className="mb-6">
        <h3 className="font-['Inter'] text-lg font-semibold mb-1 text-foreground">Github Stats</h3>
        <p className="font-['JetBrains_Mono'] text-xs text-muted-foreground">@alexchen</p>
      </div>
      
      <div className="flex-1 flex flex-col gap-5">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div 
              key={stat.label} 
              className="border border-border bg-secondary p-4 rounded-lg"
            >
              <div className="flex items-center gap-3 mb-2">
                <Icon className="w-4 h-4 text-muted-foreground" />
                <span className="font-['JetBrains_Mono'] text-xs text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
              <div className="font-['Inter'] text-3xl font-bold text-foreground">
                {stat.value}
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-between">
          <span className="font-['JetBrains_Mono'] text-xs text-muted-foreground">Contribution streak</span>
          <span className="font-['Inter'] font-semibold text-foreground">234 days</span>
        </div>
      </div>
    </div>
  );
}