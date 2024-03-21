import React from "react";
import CardProject from "../../CardProject/index";

export default function Index() {
  return (
    <>
      <section className="project lg:h-dvh bg-[#f5f5f0]">
        <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 py-12">
          <div className="heading mb-16">
            <h1 className="text-5xl font-black mb-4">My Pojects</h1>
            <p className="text-xl text-[#7f7f7f]">
              I have several projects that I have made from my learning results
            </p>
          </div>
          <div className="content">
            <CardProject />
          </div>
        </div>
      </section>
    </>
  );
}
