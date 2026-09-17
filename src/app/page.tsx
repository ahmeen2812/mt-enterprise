// src/app/page.tsx
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import Experience from "@/components/layout/Experience";
import ServicesSection from "@/components/services/ServicesSection";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/layout/FloatingContact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <Navbar />
      <Hero />
      <Experience />
      <ServicesSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
      {/* Sticky Dual Floating Dispatch Dock */}
      <FloatingContact />
    </main>
  );
}