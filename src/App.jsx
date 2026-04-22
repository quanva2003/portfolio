import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#1f242d] text-[#ffffffe2] min-h-screen max-w-screen">
      <Header />
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
