export interface EducationData {
  institution: string;
  major: string;
  period: string;
  logo: string;
  achievements: string[];
}

export const education: EducationData[] = [
  {
    institution: "University of Science - Vietnam National University",
    major: "Information Technology",
    period: "2023 – Present",
    logo: "images/logo_hcmus.jpg",
    achievements: ["ICPC", "Freshman Scholarship"],
  },
  {
    institution: "Le Khiet High School for the Gifted Students",
    major: "Informatics",
    period: "2020 - 2023",
    logo: "images/logo_lk.png",
    achievements: ["C++", "National Olympiad in Informatics", "ICPC"],
  },
];
