import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="flex mt-14 md:mt-24">
        {/* left */}
      <div className="flex-1 hidden xl:flex">
        <Image
          src="/images/features-bg.jpg"
          width={1000}
          height={1000}
          alt="features image"
          className="h-full w-full object-cover"
        />
      </div>
        {/* right */}
      <div className="flex-1 bg-black text-white">
        <div className="p-7 md:p-20">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2 tracking-wider">
              <div className="w-5 h-0.5 bg-primary" />
              Features
            </div>
            <h1 className="text-3xl lg:text-5xl font-serif">
              Amazing Features
            </h1>
            <p className="tracking-wider mb-10">
              The first thing to remember about success is that it is a process
              – nothing more, nothing less. There is really no magic to it and
              it’s not reserved only for a select few people.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-5">
                <div className="bg-primary p-3.5">
                  <Image
                    src="/images/hot-stones.png"
                    alt="hot-stones"
                    width={42}
                    height={42}
                  />
                </div>
                <p className="font-serif text-2xl">Hot Stones</p>
              </div>
              <p className="tracking-wide">
                Use a past defeat as a motivator. Remind yourself you have
                nowhere to go except up as you have already been at the bottom.
              </p>
              <div className="flex items-center gap-5">
                <div className="bg-primary p-3.5">
                  <Image
                    src="/images/relaxation.png"
                    alt="hot-stones"
                    width={42}
                    height={42}
                  />
                </div>
                <p className="font-serif text-2xl">relaxation</p>
              </div>
              <p className="tracking-wide">
                Use a past defeat as a motivator. Remind yourself you have
                nowhere to go except up as you have already been at the bottom.
              </p>
              <div className="flex items-center gap-5">
                <div className="bg-primary p-3.5">
                  <Image
                    src="/images/thai.png"
                    alt="hot-stones"
                    width={42}
                    height={42}
                  />
                </div>
                <p className="font-serif text-2xl">thai</p>
              </div>
              <p className="tracking-wide">
                Use a past defeat as a motivator. Remind yourself you have
                nowhere to go except up as you have already been at the bottom.
              </p>
           
           
          </div>
        </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
