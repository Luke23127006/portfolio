import { type EducationData } from "../../data/education";
import { ImageWithFallback } from "../ImageWithFallback";

export function EducationItem({
  institution,
  major,
  period,
  logo,
  achievements,
}: EducationData) {
  return (
    <div className="flex gap-4 p-4 rounded-lg border border-border bg-secondary/50 hover:bg-secondary transition-colors">
      <div className="flex-shrink-0">
        <ImageWithFallback
          src={logo}
          alt={institution}
          className="w-14 h-14 rounded-lg object-contain bg-background p-2"
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h4 className="font-['Inter'] font-semibold text-base text-foreground">
            {institution}
          </h4>
          <span className="font-['JetBrains_Mono'] text-xs text-muted-foreground whitespace-nowrap">
            {period}
          </span>
        </div>

        <p className="font-['Inter'] text-sm text-muted-foreground mb-3">
          Major: {major}
        </p>

        <div className="flex flex-wrap gap-2">
          {achievements.map((achievement, index) => (
            <span
              key={index}
              className="font-['JetBrains_Mono'] text-xs px-2 py-1 bg-muted border border-border rounded text-muted-foreground"
            >
              {achievement}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
