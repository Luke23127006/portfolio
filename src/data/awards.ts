import { Award, Trophy, type LucideIcon } from "lucide-react";

export interface AwardData {
  title: string;
  organization: string;
  year: string;
  icon: LucideIcon;
}

export const awards: AwardData[] = [
  {
    title: "Third Prize",
    organization: "ICPC University-Level Qualification Round.",
    year: "October - 2023",
    icon: Award,
  },
  {
    title: "Third Prize",
    organization: "National Olympiad in Informatics",
    year: "March - 2023",
    icon: Award,
  },
  {
    title: "Bronze Medal",
    organization: "Northern Coastal and Delta Olympiad in Informatics.",
    year: "August - 2022",
    icon: Award,
  },
  {
    title: "Third Prize",
    organization: "National Olympiad in Informatics",
    year: "March - 2022",
    icon: Award,
  },
  {
    title: "First Prize",
    organization: "Central & Central Highlands Olympiad in Informatics.",
    year: "March - 2022",
    icon: Trophy,
  },
];
