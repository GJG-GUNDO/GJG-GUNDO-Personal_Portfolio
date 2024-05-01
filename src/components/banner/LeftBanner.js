import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaDownload, FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import Pdf from '../CV/ShubhamsResume.pdf';


const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Coder.", "Full Stack Developer.", "Student."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Shubham Aggarwal</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I'm a driven and adaptable individual, constantly seeking out fresh challenges. Fueled by a love for learning, I am committed to delivering top-notch outcomes. With an optimistic outlook and a mindset geared towards growth, I'm poised to make a significant impact and accomplish remarkable feats.
        </p>

      </div>
     
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <a href={Pdf} target="_blank"><button
          // onClick={handleSend}
          className="w-50 h-[3.5rem] bg-[#141518] rounded-lg text-btn text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent "
        >
          Download CV <FaDownload />
        </button>
        </a>

        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
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
    </div>
  );
}

export default LeftBanner