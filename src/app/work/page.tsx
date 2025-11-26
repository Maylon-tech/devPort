"use client"

import { motion } from "framer-motion"

import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"

import { BsArrowUpRight, BsGithub } from 'react-icons/bs'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const projects = [
  {
    id: "01",
    category: "Frontend",
    title: "project 01",
    description: "project based on frontend skills with simple layout SPA design and modern pages.",
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    id: "02",
    category: "FullStack",
    title: "project 02",
    description: "project based on frontend skills with simple layout SPA design and modern MERN stack application.",
    stack: [
      { name: "NextJS" },
      { name: "tailwindCss" },
      { name: "NodeJS" },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    id: "03",
    category: "Frontend",
    title: "project 03",
    description: "project based on frontend skills with simple layout SPA.",
    stack: [
      { name: "NextJS" },
      { name: "TailwindCss" },
      { name: "TypeScript" },
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0])

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">

          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div>
              {/* OUTLINE NUM */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                { project.id}
              </div>
            </div>
          </div>

          <div className="w-full">SLIDER</div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work
