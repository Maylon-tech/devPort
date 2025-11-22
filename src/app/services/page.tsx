"use client"

import Link from "next/link"
import { BsArrowDownRight } from 'react-icons/bs'
import { motion } from 'framer-motion'

const services = [
  {
    num: '01',
    title: "Web Development",
    description: "lorem ipsum bla bla",
    href: ""
  },
  {
    num: '02',
    title: "UI/UX Design",
    description: "lorem ipsum bla bla",
    href: ""
  },
  {
    num: '03',
    title: "Logo Design",
    description: "lorem ipsum bla bla",
    href: ""
  },
  {
    num: '04',
    title: "SEO",
    description: "lorem ipsum bla bla",
    href: ""
  },
]

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
        >
          {
            services.map((service, index) => {
              return (
                <div key={index}>
                  {/* TOP */}
                  <div>
                    <div>{service.num}</div>
                    <Link href={service.href}>
                      <BsArrowDownRight/ >
                    </Link>
                  </div>
                  {/* TITLE */}
                  <h2>{service.title}</h2>
                  {/* DESCR */}
                  <p>{service.description}</p>
                </div>
              )
            })
          }
        </motion.div>
      </div>
    </section>
  )
}

export default Services
