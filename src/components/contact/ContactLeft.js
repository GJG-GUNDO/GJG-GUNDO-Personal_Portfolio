import React from 'react'
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Shubham Aggarwal</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Developer
        </p>
        
        {/* <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+968 97859628</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">noor.jsdivs@gmail.com</span>
        </p> */}
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
            <a href={"https://www.linkedin.com/in/shubham-aggarwal1215/"} target="_blank"><span className="bannerIcon">
              <FaLinkedinIn />
            </span></a>
            <a href={"https://twitter.com/GJG_GUNDO"} target="_blank"> <span className="bannerIcon">
              <FaTwitter />
            </span></a>
            <a href={"https://github.com/GJG-GUNDO"} target="_blank"><span className="bannerIcon">
              <FaGithub />
            </span></a>
          </div>
      </div>
    </div>
  );
}

export default ContactLeft