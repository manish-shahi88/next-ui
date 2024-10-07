"use client";
import Image from "next/image";
import { useEffect } from 'react';
import "../components/circularText.css"

const WhyChooseUs = () => {
  useEffect(() => {
    const text = document.getElementById("circular-text");
    text.innerHTML = text.textContent.replace(/\S/g, "<span class='circularSpan'>$&</span>");
    const elements = document.querySelectorAll("#circular-text .circularSpan");
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.transformOrigin = "0px 100px";
      elements[i].style.transform = `rotate(${(i * 360) / elements.length}deg)`;
    }
  }, []);

  return (
    <section className="flex flex-col lg:flex-row w-full gap-10 md:gap-20 px-3 md:px-14 xl:px-3 mt-10 md:mt-24 tracking-wider mx-auto max-w-screen-xl">
      {/* left side */}
      <div className="flex-1">
        <div className="flex items-center gap-2 text-gray-500 mb-3">
          <div className="w-5 h-0.5 bg-primary" />
          Why choose Us
        </div>
        <h1 className="text-3xl lg:text-6xl font-serif mb-10">
          Who we are and <br /> what we do
        </h1>
        <div>
          <Image
            src="/images/about-01.jpg"
            width={1000}
            height={500}
            alt="image"
          />
        </div>
      </div>

      {/* right side */}
      <div className="relative flex-1 flex flex-col gap-3 w-full sm:w-[90%] ml-auto">
        <div>
          <Image
            src="/images/about-02.jpg"
            width={1000}
            height={500}
            alt="image"
          />
        </div>
        <p className="text-gray-500">
          We know this in our gut, but what can we do about it? How can we
          motivate ourselves? One of the most difficult aspects of achieving
          success is staying motivated over the long haul.
        </p>
        <button className="self-start md:flex bg-primary px-8 py-4 custom-hover text-white">
          Discover More
        </button>

        {/* Circular text effect */}
        <div className="absolute -top-24 left-10 md:top-3 md:left-0 flex justify-center items-center">
          <h1 id="circular-text" className="textCircle text-sm font-serif text-gray-600">
            10 YEARS EXPERIENCE OF IN SPA -
          </h1>
          <div className="absolute bg-white rounded-full h-32 w-32"></div>
          <p className="absolute text-5xl" style={{ fontWeight: "bold"}}>10</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;