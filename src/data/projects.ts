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
    title: "AnyCarousel",
    description:
      "A carousel component for React that allows you to create carousels with custom animations and transitions.",
    techStack: ["NextJS", "React", "TS", "CSS"],
    githubUrl: "https://github.com/MayurSMahajan/AnyCarousel",
    liveUrl: "https://any-carousel.vercel.app/",
    image: "/images/anycarousel.png",
  },
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
  }
];
