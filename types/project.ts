import { StaticImageData } from 'next/image';
interface Project {
    icon: StaticImageData;
    width: number;
    height: number;
    level: "Beginner" | "Intermediate" | "Advanced";
    bg: string;
    title: string;
  }

  export default Project