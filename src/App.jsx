import React, { useState, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

import BootSequence from './components/BootSequence';

import Navbar from './components/Navbar';
import AIMessage from "./components/AIMessage";

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import ContactPanel from './components/ContactPanel';

import Radar from './components/Radar';
import ArcReactor from './components/ArcReactor';
import Holograms from './components/Holograms';
import Jarvis from './components/Jarvis';
import MouseTrail from './components/MouseTrail';
import { motion, AnimatePresence } from "framer-motion";
function App() {

  // BOOT SCREEN

  const [booting, setBooting] = useState(true);

  // CURRENT SECTION

  const [currentSection, setCurrentSection] = useState("home");

  // AI MESSAGE

  const [aiMessage, setAiMessage] = useState("WELCOME BACK SIR");

  // LENIS

  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time) {

      lenis.raf(time);

      requestAnimationFrame(raf);

    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();

  }, []);

  // SECTION SWITCHER

  const openSection = (section, message) => {

    setCurrentSection(section);

    setAiMessage(message);

  };

  return (

    <>

      {/* BOOT SEQUENCE */}

      {booting && (

        <BootSequence
          onComplete={() => setBooting(false)}
        />

      )}

      {/* MAIN WEBSITE */}

      {!booting && (

        <div className="w-full min-h-screen bg-black text-white overflow-hidden relative">

          {/* MOUSE TRAIL */}

          <MouseTrail />

          {/* NAVBAR */}

          <Navbar openSection={openSection} />

          {/* AI MESSAGE */}

          <AIMessage message={aiMessage} />

          {/* JARVIS */}

          <Jarvis message={aiMessage} />

          {/* RADAR */}

          <Radar />

          {/* ARC REACTOR */}

          <ArcReactor />

          {/* HOLOGRAMS */}

          <Holograms />

          {/* HOME */}

          <AnimatePresence mode="wait">

  {currentSection === "home" && (

    <motion.div
      key="home"
      initial={{
        opacity: 0,
        y: 50,
        filter: "blur(20px)"
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)"
      }}
      exit={{
        opacity: 0,
        y: -50,
        filter: "blur(20px)"
      }}
      transition={{
        duration: 0.8
      }}
    >

      <Home />

    </motion.div>

  )}

</AnimatePresence>

          {/* ABOUT */}

          {currentSection === "about" && (
            <About />
          )}

          {/* PROJECTS */}

          {currentSection === "projects" && (
            <Projects />
          )}

          {/* CONTACT */}

          {currentSection === "contact" && (
            <ContactPanel />
          )}

        </div>

      )}

    </>

  );

}

export default App;