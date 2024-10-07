"use client";
import { useEffect } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
// import Logo from "/images/logo.svg"
import { useState } from "react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import SocailLinks from "./SocailLinks";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    // <header className="text-white px-2">
    <header
      className={`w-full z-50 transition-all duration-300 ease-in-out ${
        isSticky ? "fixed top-0 bg-white shadow-lg " : "relative bg-transparent"
      }`}
    >
      {/* <nav className="flex justify-between items-center gap-12 px-3"> */}
      <nav
        className={`flex justify-between items-center gap-12 px-3 ${
          isSticky ? "text-black" : "text-white"
        }`}
      >
        <div className="w-[100px] md:w-[152px] py-4">
          <Image src={`${isSticky ? "/images/logo-dark.svg" : "/images/logo.svg"}`} width={152} height={32} alt="logo" />
        </div>
        <ul className="hidden lg:flex items-center flex-1 justify-end gap-8 text-md lg:text-lg tracking-wider">
          <li className="text-primary">
            <a>Home</a><span>+</span>
          </li>
          <li className="flex gap-2 hover:text-primary cursor-pointer duration-300">
            <a>About</a><span>Us</span>
          </li>
          <li className="flex gap-2 hover:text-primary cursor-pointer duration-300">
            <a>Pages</a><span>+</span>
          </li>
          <li className="flex gap-2 hover:text-primary cursor-pointer duration-300">
            <a>Blog</a><span>+</span>
          </li>
          <li className="flex gap-2 hover:text-primary cursor-pointer duration-300">
            <a>Shop</a><span>+</span>
          </li>
          <li className="flex gap-2 hover:text-primary cursor-pointer duration-300">
            <a>Contact</a><span>Us</span>
          </li>  
        </ul>
        <button className="hidden text-5xl text-white lg:flex" onClick={toggleMenu}>
          <BiMenuAltLeft />
        </button>
        <button className="hidden sm:flex ml-auto -mr-8 lg:mr-0 bg-primary px-8 py-[10px] md:py-4 custom-hover text-white">Book Now</button>
        
        <button className="text-4xl md:text-5xl text-white bg-primary p-1 lg:hidden" onClick={toggleMenu}>
          <HiOutlineMenuAlt2 />
        </button>
      </nav>

      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white text-black shadow-lg transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-3xl text-gray-400">
            <IoMdClose />
          </button>
        </div>
        <ul className="flex flex-col items-start px-10 gap-10 text-md font-serif tracking-wider">
          <div className="w-[100px] md:w-[152px]">
            <Image
              src="/images/logo-dark.svg"
              width={152}
              height={32}
              alt="logo-dark"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl">About us</h1>
            <p className="font-sans">
              Execution is the single biggest factor in achievement so the
              faster and better your execution.
            </p>
          </div>
          <div className="flex flex-col gap-3 font-sans">
            <h1 className="text-3xl font-serif">Contact Info</h1>
            <p>
              6580 Allison Turnpike Creminfort, <br />
              AL 32808-4509
            </p>
            <p>
              Sunday to Tuesday <br />
              (09:00 To 22:00)
            </p>
            <p>
              Friday to Saturday <br />
              (11:00 To 19:00)
            </p>
          </div>
          {/* <div className="flex gap-3">
            <div className="bg-primary w-10 h-10 flex justify-center items-center text-white">
              <a className="cursor-pointer">
                <FaFacebookF />
              </a>
            </div>
            <div className="bg-primary w-10 h-10 flex justify-center items-center text-white">
              <a className="cursor-pointer">
                <FaTwitter />
              </a>
            </div>
            <div className="bg-primary w-10 h-10 flex justify-center items-center text-white">
              <a className="cursor-pointer">
                <FaLinkedinIn />
              </a>
            </div>
            <div className="bg-primary w-10 h-10 flex justify-center items-center text-white">
              <a className="cursor-pointer">
                <FaInstagram />
              </a>
            </div>
          </div> */}
          <SocailLinks/>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
