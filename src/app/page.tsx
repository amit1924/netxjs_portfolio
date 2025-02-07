import { requireAuth } from "@/utils/auth";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default requireAuth(function Portfolio() {
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
});
