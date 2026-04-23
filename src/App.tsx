import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import WorkExperience from "./components/sections/WorkExperience";
import { Projects } from "./components/sections/projects/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="bg-bg text-text-primary min-h-screen max-w-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-accent focus:text-bg focus:px-4 focus:py-2 focus:rounded focus:font-semibold"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main">
        <Hero />
        <About />
        <WorkExperience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
