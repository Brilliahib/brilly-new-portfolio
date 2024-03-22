import React from "react";
import { cardProject } from "./data.js";
import Image from "next/image";

export default function index() {
  return (
    <>
      <div className="lg:grid lg:grid-cols-3 lg:gap-x-12">
        {cardProject.map((item) => (
          <div key={item.id} className="card rounded-lg mb-8 lg:mb-0">
            <Image
              src={item.imageUrl}
              alt=""
              width={400}
              height={400}
              className="rounded-lg mb-4"
            />
            <h1 className="text-xl font-bold mb-4">{item.title}</h1>
            <p className="text-[#7f7f7f]">{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
