import { Mail, MapPin, Calendar } from 'lucide-react';

export function ContactCard() {
  return (
    <div className="h-full border border-border bg-card p-6 rounded-[var(--radius)] hover:border-muted transition-colors">
      <h3 className="font-['Inter'] text-lg font-semibold mb-6 text-foreground">Contact Info</h3>
      
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Mail className="w-4 h-4 text-muted-foreground mt-1" />
          <div>
            <p className="font-['JetBrains_Mono'] text-xs text-muted-foreground uppercase tracking-wider mb-1">
              Email
            </p>
            <p className="text-sm text-foreground">alex.chen@email.com</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <MapPin className="w-4 h-4 text-muted-foreground mt-1" />
          <div>
            <p className="font-['JetBrains_Mono'] text-xs text-muted-foreground uppercase tracking-wider mb-1">
              Location
            </p>
            <p className="text-sm text-foreground">San Francisco, CA</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <Calendar className="w-4 h-4 text-muted-foreground mt-1" />
          <div>
            <p className="font-['JetBrains_Mono'] text-xs text-muted-foreground uppercase tracking-wider mb-1">
              Experience
            </p>
            <p className="text-sm text-foreground">7+ years</p>
          </div>
        </div>
      </div>
    </div>
  );
}