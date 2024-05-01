import React, { useState } from 'react'
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import Popup from "../popup/Modal";

const ProjectsCard = ({ title, des, src, github, website,tech1, 
  tech2 ,
  tech3 ,
  tech4 ,
  tech5 ,
  tech6 ,
  tech7 ,
  tech8 ,
  tech9 ,
  tech10,
  des1 ,
  des2 ,
  des3 ,
  des4 ,
  des5   }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
     

   

    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60  object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <a href={github} target='_blank'> <BsGithub /></a>
              </span>
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <a href={website} target='_blank'> <FaGlobe /></a>
              </span>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
        </div>
        
       
      </div>
      
      <button
          className="openModalBtn"
          onClick={() => {
            setModalOpen(true);
          }}
        >{<Popup 
        title={title}
        src ={src}
        tech1   = {tech1}
        tech2 = {tech2}
        tech3 = {tech3}
        tech4 = {tech4}
        tech5 = {tech5}
        tech6 = {tech6}
        tech7 = {tech7}
        tech8 = {tech8}
        tech9 = {tech9}
        tech10 = {tech10}
        des1 = {des1}
        des2 = {des2}
        des3 = {des3}
        des4 = {des4}
        des5 = {des5}
        link = {website}
        
        
        />}
        </button>
    </div>
   
    </div>
  );
}

export default ProjectsCard