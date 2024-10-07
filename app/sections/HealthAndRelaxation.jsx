"use client";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const HealthAndRelaxation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="bg-[url('/images/video-bg.jpg')] bg-cover bg-center bg-no-repeat w-full h-[100vh]  md:mt-24 flex flex-col items-center justify-center gap-8 text-white">
        <div className="pulse-container">
          <button
            className="p-10 rounded-full bg-primary pulse-animation"
            onClick={openModal}
          >
            <FaPlay />
          </button>
        </div>
        <h1 className="text-3xl lg:text-5xl font-serif">
          Health And Relaxation
        </h1>
        <p className="text-lg tracking-wide max-w-[90%] md:max-w-[812px] text-center">
          Introspection is the trick. Understand what you want, why you want it
          and what it will do for you. This is a critical factor, and as such,
          is probably the most difficult step.
        </p>
      </section>

      {/* Modal Section */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative h-[500px] w-full max-w-4xl bg-white rounded-lg">
            {/* Close Button */}
            <button
              className="absolute -top-10 right-0 text-white text-3xl font-normal"
              onClick={closeModal}
            >
              &times;
            </button>

            {/* YouTube Video */}
            <div className="w-full h-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/watch?v=Qtggx2rswKY"
                title="YouTube video"
                frameBorder="0"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HealthAndRelaxation;
