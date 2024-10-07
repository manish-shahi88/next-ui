import { team } from "@/constants/constant";
import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <section className="mt-14 md:mt-24">
      <div className="flex flex-col gap-3 md:gap-6 items-center lg:px-48 text-center px-4 md:px-20">
        <div className="flex items-center gap-2 tracking-wider">
          <div className="w-5 h-0.5 bg-primary" />
          Team
          <div className="w-5 h-0.5 bg-primary" />
        </div>
        <h1 className="text-3xl lg:text-5xl font-serif">Our Happy Team</h1>
        <p className="text-lg text-gray-500 tracking-wide">
          So, how can we stay on course with all the distractions in our lives?
          Willpower is a good start, but it’s very difficult to stay on track
          simply through willpower.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-7 md:mt-14 mx-3">
        {team.map((item) => (
            <div key={item.id} className="flex flex-col gap-4">
            <div className="overflow-hidden">
              <Image
                src={item.image}
                width={1000}
                height={1000}
                alt="image"
                className="transform transition-transform duration-300 hover:scale-[1.2]"
              />
            </div>
            <div className="flex items-center gap-2 tracking-wider text-gray-500">
              <div className="w-10 h-0.5 bg-primary" />
              {item.role}
            </div>
            <p className="font-serif text-lg">{item.name}</p>
          </div>
        ))}
        
        
      </div>
    </section>
  );
};

export default Team;
