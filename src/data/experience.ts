/**
 * Experience, skills, achievements, and education data
 * extracted from the existing portfolio's AttributeData.
 */

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  description?: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
}

export const experience: ExperienceEntry[] = [
  {
    role: "Software Development Engineer",
    company: "Realtimate Labs Pvt. Ltd.",
    period: "October 2023 — Present",
  },
  {
    role: "Software Development Engineer Intern",
    company: "AppFlowy Inc.",
    period: "January 2023 — October 2023",
  },
  {
    role: "Web Development Intern",
    company: "EasyManage Services",
    period: "February 2022 — June 2022",
  },
  {
    role: "YouTube Creator",
    company: "Mayur Mahajan",
    period: "2020 — Present",
  },
];

export const skills: string[] = [
  "Web Development",
  "Cross-Platform Development (Flutter)",
  "Android Development (Java)",
  "UI/UX Design (Figma, Adobe XD)",
  "Data Structures & Algorithms",
  "React, Next.js, Express, Node.js",
  "MongoDB, SQL, Firebase",
  "Git, TypeScript, Python",
];

export const achievements: string[] = [
  "Smart India Hackathon Winner — PS:GM747, 2022",
  "Won MLH Birthday Bash Hackathon — July 2022",
  "Research Paper — Will GitHub Copilot take away the jobs of Developers?, 2021",
  "Runners Up — MSBTE State Level Technical Quiz Competition, 2020",
];

export const education: EducationEntry[] = [
  {
    degree: "Bachelor of Computer Engineering",
    institution: "Savitribai Phule Pune University",
    period: "2019 — 2023",
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Government Polytechnic Pune",
    period: "2017 — 2019",
  },
];
