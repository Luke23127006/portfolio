import { ContentCard } from '../../components/commons/ContentCard';
import { ContactInfoItem } from '../../components/commons/ContactInfoItem';
import { contactInfo } from '../../data/contact';

export function ContactCard() {
  return (
    <ContentCard className="p-6">
      <h3 className="font-['Inter'] text-lg font-semibold mb-6 text-foreground">Contact Info</h3>
      
      <div className="space-y-4">
        {contactInfo.map((info, index) => (
          <ContactInfoItem
            key={index}
            icon={info.icon}
            label={info.label}
            value={info.value}
            display={info.display}
            copiable={info.copiable}
            isLink={info.isLink}
          />
        ))}
      </div>
    </ContentCard>
  );
}