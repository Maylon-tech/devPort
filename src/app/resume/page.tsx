"use client"

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from 'react-icons/fa'

import {
  SiTailwindcss,
  SiNextdotjs
} from 'react-icons/si'

// Data
const about = {
  title: "About Me",
  description: "Lorem ipsu dolor sem dor com bolor do bolo de ontem.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Nemoto Coleaman",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+81) 090 8876 4356",
    },
    {
      fieldName: "Experience",
      fieldValue: "3 years",
    },
    {
      fieldName: "Skype",
      fieldValue: "Nemo.02",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Br HalfBlood JP",
    },
    {
      fieldName: "Email",
      fieldValue: "Nemo@hotmai.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Brasil, English, Japanes",
    },
  ]
}

// Experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "Lorem ipsu dolor sem dor com bolor do bolo de ontem.",
  items: [
    {
      company: "Tech Solutions Inc.",
      position: "FullStack Developer",
      duration: "2023 - 2024",
    },
    {
      company: "Web Design Studio.",
      position: "Front-End Developer Intern",
      duration: "2024 - 2024",
    },
    {
      company: "E-Commerce Startup.",
      position: "Freelance Web Developer",
      duration: "2024 - 2025",
    },
    {
      company: "Digital Agency.",
      position: "UI/UX Designer",
      duration: "2025 - Present",
    },
    {
      company: "Software Developer Firm.",
      position: "Junior Developer",
      duration: "Present",
    },
  ]
}

// Education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "Lorem ipsu dolor sem dor com bolor do bolo de ontem.",
  items: [
    {
      institution: "Online Course Platform.",
      degree: "FullStack Developer Bootcamp",
      duration: "2020 - 2022",
    },
    {
      institution: "Codeacademy.",
      degree: "Front-End Track",
      duration: "2021 - 2022",
    },
    {
      institution: "Online Course.",
      degree: "Programming Course",
      duration: "2022 - 2023",
    },
    {
      institution: "Tech Istitute.",
      degree: "Cerified Web Developer",
      duration: "2024",
    },
    {
      institution: "Design School.",
      degree: "Diploma In Graphic Design",
      duration: "2025",
    },
    {
      institution: "Community College.",
      degree: "Associete Degree in Computer Science",
      duration: "2025",
    },
  ]
}

// Skills data
const skills = {
  title: "My skills",
  description: "Lorem ipsu dolor sem dor com bolor do bolo de ontem.",
  skilllList: [
    {
      icon: <FaHtml5 />,
      name: "FHMTL 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next JS",
    },
    {
      icon: <FaReact />,
      name: "React JS",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaNodeJs />,
      name: "Node JS",
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className='min-h-[70vh] w-full'>
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
