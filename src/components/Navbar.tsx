"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
// import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLogout = () => {
    window.location.href = "/api/auth/logout";
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 w-full bg-gray-950 text-gradient-to-r from-yellow-800 via-orange-500 to-green-700 shadow-md z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo with Neon Dark Background */}
        <motion.div 
  className="relative p-2 bg-gray-900 rounded-lg shadow-lg 
             before:absolute before:inset-0 before:-z-10 
             before:blur-xl before:opacity-80 
             before:bg-gradient-to-r before:from-orange-500 
             before:via-pink-500 before:to-red-500"
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
>
<Image 
  src="https://i.giphy.com/media/l3vR16pONsV8cKkWk/giphy.gif" 
  alt="Funny GIF" 
  width={40} 
  height={50} 
  unoptimized 
  className="rounded-3xl drop-shadow-[0_0_20px_rgba(255,105,180,0.8)]"
/>
</motion.div>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              {link.name}
            </motion.a>
          ))}

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-green-900 text-white rounded-2xl hover:bg-red-900 transition"
          >
            Logout
          </button>
        </nav>

        {/* Mobile Hamburger Menu */}
        <motion.button 
          className="md:hidden"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          <Menu size={28} />
        </motion.button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-gray-900 bg-opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
          >
            <motion.aside
              className="fixed top-0 left-0 w-64 h-full bg-gray-950 shadow-lg flex flex-col p-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <motion.button 
                className="self-end mb-4 text-white" 
                onClick={toggleMenu}
                whileHover={{ scale: 1.2 }}
              >
                <X size={28} />
              </motion.button>

              <nav className="flex flex-col space-y-4 relative">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="text-lg text-gradient-to-r from-yellow-800 via-orange-500 to-green-700 hover:text-blue-400 transition-colors"
                    onClick={toggleMenu}
                    whileHover={{ scale: 1.1 }}
                  >
                    {link.name}
                  </motion.a>
                ))}

                {/* Mobile Logout Button */}
                <button
                  onClick={handleLogout}
                  className=" px-4 py-2 absolute top-[15rem]   bg-green-900 text-white rounded-2xl hover:bg-red-900 transition"
                >
                  Logout
                </button>
              </nav>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
