import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaTwitter,
} from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import SocailLinks from "../components/SocailLinks";
import FooterCopyright from "../components/FooterCopyright";

const Footer = () => {
  return (
    <>
      <section className="mt-24 px-3 py-16 lg:py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-secondary">
      <div className="flex flex-col gap-4 tracking-wider text-gray-500">
        <h1 className="font-serif text-xl text-black mb-3">
          Contact Information
        </h1>
        <div className="flex gap-4">
          <FaLocationDot className="mt-1 text-primary text-xl" />
          <p>
            6580 Allison Turnpike <br /> Creminfort, AL 32808-4509
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <FaPhoneAlt className="text-primary text-xl" />
          <p>(123) 345-6789</p>
        </div>
        <div className="flex gap-4 items-center">
          <MdOutlineEmail className="text-primary text-2xl" />
          <p>support@luxuryspa.com</p>
        </div>

        <SocailLinks />
      </div>

      <div className="flex flex-col gap-2 tracking-wider text-gray-500">
        <h1 className="font-serif text-xl mb-4 text-black">Navigation</h1>
        <p>About us</p>
        <p>Service</p>
        <p>Blog</p>
        <p>Team</p>
        <p>Contact us</p>
      </div>
      <div className="flex flex-col lg:-ml-16 gap-2 tracking-wider text-gray-500">
        <h1 className="font-serif text-xl mb-4 text-black">Useful Links</h1>
        <p>Login</p>
        <p>Register</p>
        <p>Gallery</p>
        <p>Terms and Conditions</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex lg:-ml-20 flex-col gap-5  tracking-wider text-gray-500">
        <h1 className="font-serif text-xl text-black">Newsletter</h1>
        <p>Sign Up to our Newsletter to get the latest news and offers.</p>
        <input type="text" placeholder="Your email" className="pl-4 w-full h-14 border border-gray-200" />
        <button className="md:flex  self-start lg:mr-0 bg-primary px-8 py-4 custom-hover text-white">Get Notified</button>
      </div>
    </section>
    <FooterCopyright/>
    </>
  );
};

export default Footer;
