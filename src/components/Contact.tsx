"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import { FaUser, FaPhone, FaEnvelope, FaComment } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_hdnbwzb",
        "template_mjxg4tn",
        { name, phone, email, message },
        "USJtQCr7P1OefsB0j"
      );

      setSuccess(true);
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
      setTimeout(() => setSuccess(false), 5000);
    } catch (error: unknown) {
      console.error("EmailJS Error:", error);
    
      if (error instanceof Error) {
        alert(`Failed to send message. Error: ${error.message}`);
      } else {
        alert("Failed to send message due to an unknown error.");
      }
    }finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gray-950 text-white flex flex-col items-center">
      <motion.h2
        className="text-4xl font-bold text-center text-purple-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      <AnimatePresence>
        {success && (
          <motion.p
            className="text-green-400 text-center mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            ✅ Message sent successfully!
          </motion.p>
        )}
      </AnimatePresence>

      <motion.form
        className="mt-8 max-w-md w-full bg-gray-900 p-6 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Name Input */}
        <div className="flex items-center bg-gray-800 p-3 rounded border border-gray-700 mt-4">
          <FaUser className="text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-transparent text-white focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Phone Input */}
        <div className="flex items-center bg-gray-800 p-3 rounded border border-gray-700 mt-4">
          <FaPhone className="text-gray-400 mr-3" />
          <input
            type="tel"
            placeholder="Your Phone Number"
            className="w-full bg-transparent text-white focus:outline-none"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        {/* Email Input */}
        <div className="flex items-center bg-gray-800 p-3 rounded border border-gray-700 mt-4">
          <FaEnvelope className="text-gray-400 mr-3" />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-transparent text-white focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Message Input */}
        <div className="flex items-start bg-gray-800 p-3 rounded border border-gray-700 mt-4">
          <FaComment className="text-gray-400 mr-3 mt-1" />
          <textarea
            placeholder="Your Message"
            className="w-full bg-transparent text-white focus:outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className={`mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded transition transform ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
          }`}
          disabled={loading}
          whileTap={{ scale: 0.95 }}
        >
          {loading ? (
            <motion.div
              className="flex justify-center items-center"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              🔄 Sending...
            </motion.div>
          ) : (
            "Send"
          )}
        </motion.button>
      </motion.form>
    </section>
  );
}
