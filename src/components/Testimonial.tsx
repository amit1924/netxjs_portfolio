"use client";

import { motion } from "framer-motion";

export default function Testimonial() {
  const testimonials = [
    {
      name: "John Doe",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      comment: "Amazing work! Highly recommended.",
    },
    {
      name: "Jane Smith",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      comment: "The best experience I've ever had. Super professional!",
    },
    {
      name: "Michael Johnson",
      img: "https://randomuser.me/api/portraits/men/50.jpg",
      comment: "Absolutely fantastic service, will definitely come back!",
    },
    {
      name: "Emily Davis",
      img: "https://randomuser.me/api/portraits/women/60.jpg",
      comment: "Incredible attention to detail, exceeded expectations!",
    },
  ];

  return (
    <section className="py-20 bg-gray-950 min-h-screen flex flex-col items-center justify-center">
      {/* Title with Slide-in Animation */}
      <motion.h2
        className="text-4xl font-bold text-purple-400 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        What People Say
      </motion.h2>

      {/* Testimonials Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {testimonials.map((person, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-gray-900 text-purple-300 p-6 rounded-lg shadow-lg text-center"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -5, scale: 1.05 }}
          >
            {/* Profile Image */}
            <motion.img
              src={person.img}
              alt={person.name}
              className="w-16 h-16 rounded-full mb-4 border-2 border-purple-400"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />
            {/* Testimonial Text */}
            <p className="text-lg font-medium">{person.comment}</p>
            <span className="mt-2 text-sm font-semibold text-purple-500">
              - {person.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
