import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SignatureDishes from "@/components/SignatureDishes";
import Chef from "@/components/Chef";
import DiningExperience from "@/components/DiningExperience";
import InteractiveMenu from "@/components/InteractiveMenu";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Reservations from "@/components/Reservations";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SignatureDishes />
        <Chef />
        <DiningExperience />
        <InteractiveMenu />
        <Gallery />
        <Testimonials />
        <Reservations />
        <Location />
      </main>
      <Footer />
    </>
  );
}
