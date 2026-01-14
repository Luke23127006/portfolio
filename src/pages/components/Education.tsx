import { ContentCard } from "../../components/commons/ContentCard";
import { EducationItem } from "../../components/commons/EducationItem";
import { education } from "../../data/education";

export function Education() {
  return (
    <ContentCard className="p-6">
      <h3 className="font-['Inter'] text-lg font-semibold mb-6 text-foreground">
        Education
      </h3>

      <div className="space-y-4">
        {education.map((edu, index) => (
          <EducationItem
            key={index}
            institution={edu.institution}
            major={edu.major}
            period={edu.period}
            logo={edu.logo}
            achievements={edu.achievements}
          />
        ))}
      </div>
    </ContentCard>
  );
}
