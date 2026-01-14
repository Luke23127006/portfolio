import { Award, Trophy, type LucideIcon } from 'lucide-react';

export interface AwardData {
  title: string;
  organization: string;
  year: string;
  icon: LucideIcon;
}

export const awards: AwardData[] = [
  {
    title: 'Best Web App',
    organization: 'TechCrunch',
    year: '2025',
    icon: Trophy,
  },
  {
    title: 'Innovation Award',
    organization: 'React Conf',
    year: '2024',
    icon: Award,
  },
  {
    title: 'Top Contributor',
    organization: 'Open Source',
    year: '2023',
    icon: Award,
  },
];
