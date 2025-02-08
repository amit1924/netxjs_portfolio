"use client";
import { useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Portfolio() {
  const { user, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/login");
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950">
        {/* Funny GIF */}
        <Image
          src="https://media.tenor.com/bfOEyTxwK40AAAAM/work-computer.gif" 
          alt="Funny Loading Animation"
          className="w-64 h-64"
          width={64}
          height={64}
        />
        <p className="text-xl text-purple-950  mt-4 animate-pulse">Hold on, server is loading...🤣</p>
        
        {/* Alternatively, Embed a YouTube Video */}
        {/* 
        <iframe
          width="360"
          height="200"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          title="Funny Loading Video"
          allow="autoplay"
          className="mt-4 rounded-lg"
        ></iframe>
        */}
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="bg-gray-950">
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="testimonials"><Testimonial /></section>
      <section id="tech-stack"><TechStack /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}
