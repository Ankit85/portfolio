import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="h-screen ">
      {/* <Navbar /> */}
      <Hero />
      {/* {<AboutMe />} */}
      {/* <Skills /> */}
      <div className="  w-3/4  md:w-2/4  mx-auto">
        <AboutMe />
        <Skills />
      </div>
      <div
        className=" h-fit mt-[4rem]  md:mx-[8rem]
        grid grid-row md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-10 py-[2rem]"
      >
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
}
