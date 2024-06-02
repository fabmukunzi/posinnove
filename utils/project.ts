import Project from '@/types/project';
import ur from '../public/posinnove.png';
import { StaticImageData } from 'next/image';

export const projectArray: Project[] = [
  {
    icon: ur,
    width: ur.width,
    height: ur.height,
    level: "Beginner",
    bg: "bg-[#A6D4FF]",
    title: 'Interactive Learning',
  },
  {
    icon: ur,
    width: ur.width,
    height: ur.height,
    level: "Intermediate",
    bg: "bg-[#FAFF00]",
    title: 'Project Levels',
  },
  {
    icon: ur,
    width: ur.width,
    height: ur.height,
    level: "Advanced",
    bg: "bg-[#74FC82]",
    title: 'Career Opportunities',
  },
  {
    icon: ur,
    width: ur.width,
    height: ur.height,
    level: "Beginner",
    bg: "bg-[#A6D4FF]",
    title: 'Interactive Learning',
  },
];
