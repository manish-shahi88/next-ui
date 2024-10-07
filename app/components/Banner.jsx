import { IoMdArrowRoundForward, IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

const Banner = ({ slides, setCurrentIndex, currentIndex }) => {
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };
  return (
    <div className="relative flex flex-col justify-center gap-8 items-center mt-16 lg:mt-24 px-6 md:px-12 lg:px-20 text-white">
      <p className="tracking-wider text-md text-primary">SPA & BEAUTY CENTER</p>
      <h1 className="font-serif text-3xl lg:text-6xl text-center">{slides[currentIndex].title}</h1>
      <p className="text-lg tracking-wider hidden md:block">
        {slides[currentIndex].description}
      </p>

      <div className="hidden absolute inset-y-0 left-5 lg:flex items-center justify-center">
        <button
          className="bg-primary p-6 text-white bg-opacity-60 hover:bg-opacity-100 transition duration-300"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <IoIosArrowBack />
        </button>
      </div>

      <div className="hidden absolute inset-y-0 right-5 lg:flex items-center justify-center">
        <button
          className="bg-primary p-6 text-white bg-opacity-60 hover:bg-opacity-100 transition duration-300"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <IoIosArrowForward />
        </button>
      </div>

      <button className="flex items-center gap-2 bg-primary px-8 py-3 custom-hover">
        <span>Make Appointment</span>
        <span>
          <IoMdArrowRoundForward />
        </span>
      </button>
    </div>
  );
};

export default Banner;
