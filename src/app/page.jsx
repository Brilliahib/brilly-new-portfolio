"use client";
import ProjectSection from "../components/Section/project";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "../components/Preloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <div className="h-dvh mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 py-12 flex justify-center items-center">
        <section className="hero">
          <h1 className="text-6xl font-bold text-center leading-normal mb-8">
            Hello! I&apos;m <br />
            Muhammad Ahib Ibrilli
          </h1>
          <p className="text-xl text-[#7f7f7f] text-center mb-8">
            I am a computer engineering student at Diponegoro University who is
            very interested in the software field, especially in website
            development
          </p>
          <div className="flex gap-x-4 justify-center">
            <button className="py-3 px-6 bg-black text-white rounded-lg">
              Take with me
            </button>
            <button className="py-3 px-6 bg-white border border-black text-black rounded-lg">
              See my work
            </button>
          </div>
        </section>
      </div>

      <ProjectSection />
    </>
  );
}
