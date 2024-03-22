import React from "react";
import Image from "next/image";

export default function index() {
  return (
    <>
      <section className="work-section">
        <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 py-12">
          <div className="heading">
            <h1
              className="text-7xl leading-tight mb-12"
              data-aos="fade-up"
              data-aos-once="false"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              Helping brands thrive in <br />
              the digital world
            </h1>
            <hr
              className="border-gray-200"
              style={{
                border: "0.1px solid rgba(255, 255, 255, 0.1) !important",
              }}
            />
          </div>
          <div className="about flex grid grid-cols-2 mt-24 mb-48">
            <div className="about-text">
              <p className="text-lg leading-loose tracking-wider">
                I am a computer engineering student at Diponegoro University who
                is very interested in the software field, especially in website
                development
              </p>
            </div>
            <div className="about-image flex h-full items-start lg:mt-[-96px]">
              <Image
                src="/asset/img/brilly-photo.jpeg"
                width={400}
                height={400}
                alt=""
              />
            </div>
          </div>
          <div className="content my-24">
            <h1 className="text-6xl">I can help you with</h1>
            <div className="flex grid grid-cols-3 gap-x-12 mt-24">
              <div>
                <p className="mb-8 text-[#7f7f7f]">01</p>
                <hr
                  className="border-gray-200 mb-8"
                  style={{
                    border: "0.1px solid rgba(255, 255, 255, 0.1) !important",
                  }}
                />
                <h1 className="text-3xl mb-8">Design</h1>
                <p className="tracking-wider leading-normal">
                  With a solid track record in designing websites and apps, I
                  deliver strong and user-friendly digital designs. Solid
                  company branding is the foundation of any succesful website.
                </p>
              </div>
              <div>
                <p className="mb-8 text-[#7f7f7f]">02</p>
                <hr
                  className="border-gray-200 mb-8"
                  style={{
                    border: "0.1px solid rgba(255, 255, 255, 0.1) !important",
                  }}
                />
                <h1 className="text-3xl mb-8">Development</h1>
                <p className="tracking-wider leading-normal">
                  I build scalable websites from scratch that fit seamlessly
                  with design. My focus is on micro animations, transitions and
                  interaction.
                </p>
              </div>
              <div>
                <p className="mb-8 text-[#7f7f7f]">03</p>
                <hr
                  className="border-gray-200 mb-8"
                  style={{
                    border: "0.1px solid rgba(255, 255, 255, 0.1) !important",
                  }}
                />
                <h1 className="text-3xl mb-8">Design</h1>
                <p className="tracking-wider leading-normal">
                  With a solid track record in designing websites and apps, I
                  deliver strong and user-friendly digital designs. Solid
                  company branding is the foundation of any succesful website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
