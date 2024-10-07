import Image from "next/image";

const Category = () => {
  return (
    <section className="flex flex-col xl:flex-row gap-4 mt-14 md:mt-24 md:px-12 lg:px-16 ">
      <div className="flex-none w-full xl:w-1/3 p-2">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-gray-500">
            <div className="w-5 h-0.5 bg-primary" />
            Category
          </div>
          <h1 className="text-3xl lg:text-5xl font-serif leading-tight">
            Selected category from our spa
          </h1>
          <p className="text-gray-500 mb-10">
            If success is a process with a number of defined steps, then it is
            just like any other process.
          </p>
          <button className="self-start md:flex bg-primary px-8 py-4 custom-hover text-white">
            More Category
          </button>
        </div>
      </div>


      <div className="flex-auto w-full xl:w-2/3 px-2">
        <div className="flex gap-4">
          <div>
            <Image
              src="/images/category-01.jpg"
              width={500}
              height={500}
              alt="image"
            />
          </div>
          <div>
            <Image
              src="/images/category-02.jpg"
              width={500}
              height={500}
              alt="image"
            />
          </div>
          <div className="hidden md:block">
            <Image
              src="/images/category-03.jpg"
              width={500}
              height={500}
              alt="image"
            />
          </div>
          <div className="hidden md:block">
            <Image
              src="/images/category-04.jpg"
              width={500}
              height={500}
              alt="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
