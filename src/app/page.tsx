// "use client"; // Must be first

// import { useEffect } from "react";
// import { useUser } from "@auth0/nextjs-auth0/client";
// import { useRouter } from "next/navigation"; // ✅ Import useRouter
// import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
// import Testimonial from "@/components/Testimonial";
// import TechStack from "@/components/TechStack";
// import Projects from "@/components/Projects";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";

// export default function Portfolio() {
//   const { user, isLoading } = useUser();
//   const router = useRouter(); // ✅ Initialize router

//   useEffect(() => {
//     if (!isLoading && !user) {
//       router.push("/login"); // ✅ Redirect to login page if user is not authenticated
//     }
//   }, [user, isLoading, router]);

//   if (isLoading) {
//     return <div>Loading...</div>; // Loading indicator
//   }

//   if (!user) {
//     return null; // ✅ Prevents "You are not authorized" from showing
//   }

//   return (
//     <div className="bg-gray-950">
//       <Navbar />
//       <section id="home"><Hero /></section>
//       <section id="testimonials"><Testimonial /></section>
//       <section id="tech-stack"><TechStack /></section>
//       <section id="projects"><Projects /></section>
//       <section id="contact"><Contact /></section>
//       <Footer />
//     </div>
//   );
// }


"use client"; // ✅ Ensure it's a Client Component

import { useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation"; // ✅ Correct import
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Portfolio() {
  const { user, isLoading } = useUser();
  const router = useRouter(); // ✅ Initialize router

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/login"); // ✅ Use replace() to avoid back navigation
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return <div>Loading...</div>; // Loading indicator
  }

  if (!user) {
    return null; // ✅ Prevents "You are not authorized" from showing
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
