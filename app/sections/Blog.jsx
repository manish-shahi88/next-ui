import { blog } from "@/constants/constant";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";



const Blog = () => {
  return (
    <section className="mt-14 md:mt-24 mb-10">
      <div className="flex flex-col gap-6 items-center lg:px-48 text-center px-6 md:px-20">
        <div className="flex items-center gap-2 tracking-wider">
          <div className="w-5 h-0.5 bg-primary" />
          Blog
          <div className="w-5 h-0.5 bg-primary" />
        </div>
        <h1 className="text-3xl lg:text-5xl font-serif">Latest News & Blogs</h1>
        <p className="md:text-lg font-medium text-gray-500 tracking-wide">
          Success really has nothing to do with luck, coincidence or fate. It
          really comes down to understanding the steps in the process and then
          executing on those steps.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 md:mt-14 mx-3">
        {blog.map((item) => (
          <div key={item.id} className="flex flex-col gap-4">
            <div className="overflow-hidden">
              <Image
                src={item.image}
                width={1000}
                height={1000}
                alt="image"
                className="transform transition-transform duration-500 hover:scale-[1.1]"
              />
            </div>
            <p className="flex items-center gap-2 font-serif text-xl tracking-wider">
              {item.description}
            </p>
            <div className="flex items-center gap-2 text-primary text-lg">
              <p>Read More</p>
              <FaArrowRight />
            </div>
            <div className="w-full h-[1px] bg-gray-100"></div>
            <div className="flex items-center gap-4 tracking-wider">
                <div className="flex items-center gap-2">
                    <GoClock className="text-primary"/>
                    <p className="text-gray-500">February 4, 2021</p>
                </div>
                <div className="flex items-center gap-2">
                    <IoPersonOutline className="text-primary"/>
                    <p className="text-gray-500">By admin</p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
