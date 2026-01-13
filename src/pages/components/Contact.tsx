import { Mail, MapPin, Calendar } from 'lucide-react';
import { ContentCard } from '../../components/commons/ContentCard';
import { ContactInfoItem } from '../../components/commons/ContactInfoItem';

export function ContactCard() {
  return (
    <ContentCard className="p-6">
      <h3 className="font-['Inter'] text-lg font-semibold mb-6 text-foreground">Contact Info</h3>
      
      <div className="space-y-4">
        <ContactInfoItem 
          icon={Mail}
          label="Email"
          value="alex.chen@email.com"
        />
        <ContactInfoItem 
          icon={MapPin}
          label="Location"
          value="San Francisco, CA"
        />
        <ContactInfoItem 
          icon={Calendar}
          label="Experience"
          value="7+ years"
        />
      </div>
    </ContentCard>
  );
}