import React from "react";
import { cardProject } from "./data.js";
import Image from "next/image";

export default function index() {
  return (
    <>
      <div className="w-full">
        {cardProject.map((item) => (
          <div
            key={item.id}
            className="card rounded-lg mb-8 p-8 border-2 bg-white"
          >
            <h6 className="text-3xl font-semibold mb-4">{item.title}</h6>
            <p className="text-[#7f7f7f] mb-4">{item.description}</p>
            <Image
              src={item.imageUrl}
              alt=""
              width={400}
              height={400}
              className="rounded-lg mb-8"
            />
            <div className="flex items-center gap-2 w-fit bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span>Live on production</span>
            </div>
            <a
              target="blank"
              href="https://jejaklombok.vercel.app/"
              className="flex max-w-full items-center mt-2 w-max group hover:underline"
            >
              <h6 className="text-2xl md:text-3xl font-semibold max-w-full break-words">
                jejaklombok.vercel.app
              </h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
