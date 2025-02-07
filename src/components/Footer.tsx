"use client";

import { motion } from "framer-motion";
import { Facebook, Github, Mail, Phone, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-lg font-semibold">&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        
        {/* Social Media Links */}
        <div className="mt-4 flex justify-center gap-6">
          <motion.a 
            href="https://www.facebook.com/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <Facebook className="w-8 h-8 text-blue-500 hover:text-blue-400 transition" />
          </motion.a>

          <motion.a 
            href="https://github.com/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <Github className="w-8 h-8 text-white hover:text-gray-400 transition" />
          </motion.a>

          <motion.a 
            href="mailto:your-email@example.com"
            whileHover={{ scale: 1.2 }}
          >
            <Mail className="w-8 h-8 text-red-400 hover:text-red-300 transition" />
          </motion.a>

          <motion.a 
            href="tel:+1234567890"
            whileHover={{ scale: 1.2 }}
          >
            <Phone className="w-8 h-8 text-green-500 hover:text-green-400 transition" />
          </motion.a>

          <motion.a 
            href="https://www.instagram.com/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <Instagram className="w-8 h-8 text-pink-500 hover:text-pink-400 transition" />
          </motion.a>
        </div>
      </motion.div>
    </footer>
  );
}
