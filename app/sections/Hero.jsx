"use client"
import { useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

const Hero = () => {
  const slides = [
    {
      title: "Best Relax And Spa Zone.",
      description: "You are going on a cruise, but when the ship sets sail, you discover it has no rudder.",
      background: "/images/bg-1.jpg",
    },
    {
      title: "Get The Skin Of Your Drems.",
      description: "Positive pleasure-oriented goals are much more powerful motivators than negative fear-based ones.",
      background: "/images/bg-2.jpg",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <section className="w-full h-[50vh] md:h-[75vh] lg:h-[100vh]  2xl:h-[40vh] bg-cover transition duration-300" style={{backgroundImage: `url(${slides[currentIndex].background})` }}
>
        <Navbar/>
        <Banner slides={slides} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
    </section>
  )
}

export default Hero