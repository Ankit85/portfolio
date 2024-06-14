import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="h-screen">
      {/* <Navbar /> */}
      <Hero />
      <div className=" w-full ">
        <AboutMe />
        <Skills />
        <div className="grid grid-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-[4rem] w-full mx-auto  p-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
}
