"use client";

import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents hydration errors in Next.js

  return (
    <section className="text-center py-20 bg-gray-950 min-h-screen flex flex-col items-center justify-center">
      {/* Animated Title with Wavy Effect */}
      <motion.h1
        className="text-5xl font-bold text-white"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {["W", "e", "l", "c", "o", "m", "e", " ", "t", "o", " ", "M", "y", " ", "P", "o", "r", "t", "f", "o", "l", "i", "o"].map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>

      {/* Typewriter Effect with Glow */}
      <p className="mt-4 text-xl">
        I am a{" "}
        <span className="text-red-600 font-semibold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent animate-glow">
          <Typewriter
            words={[
              "Full Stack Developer",
              "React.js Enthusiast",
              "Node.js Expert",
              "Freelancer",
              "Tech Learner",
            ]}
            loop={Infinity}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </p>

      {/* Description Fade-in Effect */}
      <motion.p
        className="mt-4 text-xl max-w-2xl mx-auto text-purple-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        Passionate about building modern, scalable, and user-friendly web applications. 
        I specialize in JavaScript, React.js, Node.js, and MongoDB.
      </motion.p>

      {/* Buttons with Bounce Effect */}
      <div className="mt-6 flex gap-4">
        <motion.a
          href="#projects"
          className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md"
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.9 }}
        >
          View My Work
        </motion.a>
        <motion.a
          href="#contact"
          className="border border-blue-500 text-blue-500 px-6 py-3 rounded-full text-lg font-semibold shadow-md"
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.9 }}
        >
          Hire Me
        </motion.a>
      </div>
    </section>
  );
}
