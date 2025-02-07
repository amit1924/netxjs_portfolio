"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      name: "React Project",
      description: "Music Website Project",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      link: "https://music-website-jade-three.vercel.app/", // Corrected property name to lowercase "link"
    },
    {
      name: "AI Image Generator Project",
      description: "A fast and modern web app built with Next.js.",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      link: "https://image-generator-frontend-plum.vercel.app/",
    },
    {
      name: "E-commerce App",
      description: "A fully functional e-commerce platform.",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      link:"https://digital-ecommerce-frontend.vercel.app/"
    },
    {
      name: "AI Assistant",
      description: "An AI-powered chatbot and virtual assistant.",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      link:"https://ai-app-swart-zeta.vercel.app/"
    },
  ];

  return (
    <section className="py-20 bg-gray-950 min-h-screen flex flex-col items-center">
      {/* Title Animation */}
      <motion.h2
        className="text-3xl font-bold text-purple-400 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      {/* Grid with Animated Project Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
          },
        }}
      >
        {projects.map((project, index) => {
          const ProjectCard = (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center text-purple-300 transition-all duration-300"
              variants={{
                hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(128,0,128,0.6)",
              }}
            >
              <motion.img
                src={project.img}
                alt={project.name}
                className="w-16 h-16 mb-4"
                whileHover={{ rotate: 10 }}
              />
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p className="text-center mt-2">{project.description}</p>
            </motion.div>
          );

          // If the project has a link, wrap it in <Link>
          return project.link ? (
            <Link href={project.link} key={index} target="_blank" rel="noopener noreferrer">
              {ProjectCard}
            </Link>
          ) : (
            ProjectCard
          );
        })}
      </motion.div>
    </section>
  );
}
