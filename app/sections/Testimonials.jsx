"use client";
import { useState, useEffect } from "react";
import { testimonials } from "@/constants/constant";
import Image from "next/image";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 500);
    }, 5000); 
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="relative overflow-hidden bg-[url('/images/testimonial-bg.jpg')] bg-cover bg-center bg-no-repeat w-full h-[78vh] md:h-[100vh] mt-14 md:mt-24 text-white tracking-wider">
      <div className="flex flex-col gap-6 items-center pt-10 md:pt-24">
        <div className="flex items-center gap-2">
          <div className="w-5 h-0.5 bg-white" />
          What Others Say
          <div className="w-5 h-0.5 bg-white" />
        </div>
        <h1 className="text-3xl lg:text-5xl font-serif">Our Customer Reviews</h1>
      </div>

      {/* Testimonial section */}
      <div className="relative w-full h-full">
        {testimonials.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col gap-4 justify-center items-center absolute top-0 left-0 w-full h-full px-[3%] md:px-[16%] text-center transition-all duration-500 ease-in-out ${
              index === currentIndex
                ? animate
                  ? "opacity-0 -translate-x-full"
                  : "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full"
            }`}
          >
            <div className="-mt-28 md:-mt-52">
              <Image
                src="/images/quote.svg"
                width={80}
                height={80}
                alt="quote"
              />
            </div>
            <p className="italic text-lg md:text-2xl">{item.description}</p>
            <div className="flex items-center gap-3">
              <p className="font-serif">{item.name}</p>
              <p className="w-0.5 h-5 bg-white" />
              <p className="text-primary">{item.role}</p>
            </div>
            <div className="rounded-full overflow-hidden">
              <Image
                src={item.image}
                width={100}
                height={100}
                alt={item.name}
                className="rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
