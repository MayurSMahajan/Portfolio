/**
 * Project data extracted from the existing portfolio.
 * Each project includes title, description, tech stack, and links.
 */

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "Transformx",
    description:
      "A habit tracking app based on the book Atomic Habits. Designed the UI/UX and implemented cross-platform using Flutter and Firebase.",
    techStack: ["Flutter", "Firebase", "Dart", "UI/UX"],
    githubUrl: "https://github.com/MayurSMahajan/transformX",
    image: "/images/transformx-snapshot.png",
  },
  {
    title: "Daemon",
    description:
      "A cross-platform app created for Smart India Hackathon 2022. Allows users to watch videos or listen to AI-generated speeches. Backend powered by Firebase.",
    techStack: ["Flutter", "Firebase", "AI", "Cross-Platform"],
    githubUrl: "https://github.com/MayurSMahajan/FrontendSIH",
    image: "/images/sih.png",
  },
  {
    title: "Smart Lecture App",
    description:
      "Mobile app for teachers to create and share notes and assignments. Students can view, download notes, and upload assignment answers.",
    techStack: ["Java", "Android Studio", "Firebase"],
    githubUrl: "https://smartlecture.web.app/",
    liveUrl: "https://smartlecture.web.app/",
    image: "/images/smartlectureapppreview.png",
  },
  {
    title: "Value Wealth Creators",
    description:
      "A course registration website where customers can subscribe to courses and pay fees. Full-stack application with MERN stack.",
    techStack: ["React", "Express", "Node.js", "MongoDB"],
    githubUrl: "http://valuewealthcreator.herokuapp.com/",
    image: "/images/valuewealthpreview.png",
  },
  {
    title: "Notes Keeper",
    description:
      "A clean notes keeper app built to practice React. Supports creating and deleting notes with a minimal interface.",
    techStack: ["React", "JavaScript", "CSS"],
    githubUrl: "https://github.com/MayurSMahajan/KeeperApp",
    image: "/images/noteskeeper.png",
  },
  {
    title: "Personal Site v1",
    description:
      "My first personal website built with vanilla web technologies. A clean, static site showcasing my early work.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://mayursmahajan.github.io/",
    liveUrl: "https://mayursmahajan.github.io/",
    image: "/images/myoldsite.png",
  },
];
