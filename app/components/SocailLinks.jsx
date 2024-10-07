import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa6'

const SocailLinks = () => {
  return (
    <div className="flex gap-3">
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
          </div>
  )
}

export default SocailLinks