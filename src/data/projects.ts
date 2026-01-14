export interface ProjectData {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  video?: string;
  live?: string;
}

export const projects: ProjectData[] = [
  {
    title: "Auctionary - Online Auction Platform",
    description:
      "A C2C online auction platform that allows users to sell and bid on items.",
    tech: ["React", "Node.js", "Express", "Supabase", "TailwindCSS"],
    image: "images/auctionary.png",
    github: "https://github.com/BuhDuy256/auctionary",
    video: "https://youtu.be/SMsJvuNwh2s?si=VGqaxl76AoI8-dgr",
    live: "https://auctionary.io.vn/",
  },
  {
    title: "Gas Concentrantion Tracker Website",
    description:
      "A web application for tracking gas concentration data from IoT devices.",
    tech: ["Flask", "MongoDB", "JavaScript", "HTML", "CSS"],
    image: "images/gas_website.png",
    github: "https://github.com/Luke23127006/IOT-Website",
    video: "https://youtu.be/-MKY95FkBlY",
  },
  {
    title: "Sokoban AI Solver",
    description:
      "An AI solver for the classic Sokoban puzzle game, implemented in Python using Pygame.",
    tech: ["Python", "Pygame", "Searching Algorithms"],
    image: "images/sokoban.png",
    github: "https://github.com/BuhDuy256/Lab-1-Searching-Introduce-to-AI",
    video: "https://youtu.be/KdpvXLUvfK4",
  },
  {
    title: "Mario 2D Platformer",
    description:
      "A 2D platformer game inspired by classic Mario games, added some new feature and endless level.",
    tech: ["C++", "SFML"],
    image: "images/mario.png",
    github: "https://github.com/Luke23127006/Mario-Reflourished",
    video:
      "https://www.youtube.com/watch?v=vwQF1m644FA&ab_channel=Lu%C3%A2nTr%E1%BA%A7n",
  },
  {
    title: "Student Management System",
    description:
      "A desktop application for managing student records, built with C++ and Qt.",
    tech: ["C++", "Qt"],
    image: "images/sms.png",
    github:
      "https://github.com/BuhDuy256/Student-Management-GROUP6-KTLT-23CLC03",
    video:
      "https://www.youtube.com/watch?v=edG-BIKWWFE&list=PLGk61sB9HUUSK8MDev0g60Y5g5FQN4Igp&index=1&ab_channel=Tr%E1%BA%A7nC%E1%BA%A9mHuy",
  },
];
