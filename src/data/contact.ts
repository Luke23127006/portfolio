import {
  Mail,
  MapPin,
  type LucideIcon,
  Github,
  Phone,
  Linkedin,
} from "lucide-react";

export interface ContactData {
  icon: LucideIcon;
  label: string;
  display: string;
  value: string;
  copiable?: boolean;
  isLink?: boolean;
}

export const contactInfo: ContactData[] = [
  {
    icon: Mail,
    label: "Email",
    display: "trannguyenkhailuanqng02@gmail.com",
    value: "trannguyenkhailuanqng02@gmail.com",
    copiable: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    display: "Profile",
    value: "https://www.linkedin.com/in/lu%C3%A2n-tr%E1%BA%A7n-441b2430a/",
    isLink: true,
  },
  {
    icon: Github,
    label: "GitHub",
    display: "Luke23127006",
    value: "https://github.com/Luke23127006",
    isLink: true,
  },
  {
    icon: MapPin,
    label: "Location",
    display: "Cho Lon Ward, Ho Chi Minh City, Vietnam",
    value: "Cho Lon Ward, Ho Chi Minh City, Vietnam",
  },
  {
    icon: Phone,
    label: "Phone",
    display: "+84 834181239",
    value: "+84 834181239",
  },
];
