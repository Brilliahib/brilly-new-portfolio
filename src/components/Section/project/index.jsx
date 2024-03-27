import React from "react";
import CardProject from "../../CardProject/index";

export default function Index() {
  return (
    <>
      <section className="project bg-[#f5f5f0]">
        <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 py-12">
          <div className="heading mb-16">
            <div className="flex gap-x-8 h-full items-center">
              <div className="heading-img">
                <img
                  width={72}
                  height={72}
                  src="https://noviantodev.vercel.app/_next/static/media/stars.79e53d1d.svg"
                  alt=""
                />
              </div>
              <div className="heading-text">
                <h1 className="text-5xl font-black mb-4">My Pojects</h1>
                <p className="text-xl text-[#7f7f7f]">
                  I have several projects that I have made from my learning
                  results
                </p>
              </div>
            </div>
          </div>
          <div className="content">
            <CardProject />
          </div>
        </div>
      </section>
    </>
  );
}
