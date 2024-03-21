import React from "react";
import CardProject from "../../components/CardProject/index";

export default function index() {
  return (
    <>
      <section className="work-section">
        <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 py-12">
          <div className="heading">
            <h1 className="text-7xl leading-tight mb-12">
              Creating several works <br />
              with a hobby
            </h1>
            <hr
              className="border-gray-200"
              style={{
                border: "0.1px solid rgba(255, 255, 255, 0.1) !important",
              }}
            />
          </div>
          <div className="content mt-24">
            <CardProject />
          </div>
        </div>
      </section>
    </>
  );
}
