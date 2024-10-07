import { menuItems } from "@/constants/constant";
import Image from "next/image";

const Menu = () => {
  return (
    <section className="mt-14 md:mt-24 md:mb-10">
      <div className="flex flex-col gap-6 items-center lg:px-48 text-center px-3 md:px-20">
        <div className="flex items-center gap-2 tracking-wider">
          <div className="w-5 h-0.5 bg-primary" />
          Menu
          <div className="w-5 h-0.5 bg-primary" />
        </div>
        <h1 className="text-3xl lg:text-5xl font-serif">
          Natural Beauty Spa Center
        </h1>
        <p className="text-lg text-gray-500 tracking-wide">
          I truly believe Augustine’s words are true and if you look at history
          you know it is true. There are many people in the world with amazing
          talents who realize.
        </p>
      </div>

      {/* menu */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-7xl mx-auto">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b border-dotted border-gray-400 border-opacity-50 mx-4 py-12"
          >
            <div className="flex flex-1 items-center gap-1">
              <div>
                <Image
                  src={item.image}
                  width={70}
                  height={70}
                  alt="menu image"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-serif text-md md:text-2xl">{item.title}</h1>
                <p className="text-gray-500 text-lg md:text-lg">{item.description}</p>
              </div>
            </div>
            <div className="flex gap-7">
            <div>----------------</div>
            <div className="flex flex-col gap-2">
              <div className="bg-black px-5 py-2 font-medium text-lg text-white">
                {item.price}
              </div>
              <p className="text-gray-500 text-xl text-right">
                {item.discountedPrice}
              </p>
            </div>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
