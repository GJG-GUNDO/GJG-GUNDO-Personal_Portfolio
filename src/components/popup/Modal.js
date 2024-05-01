import "./Modal.css";
import React from 'react';
import Popup from 'reactjs-popup';
const Projects = () => {
  
}
export default ({src,title,tech1,
  tech2,
  tech3,
  tech4,
  tech5,
  tech6,
  tech7,
  tech8,
  tech9,
  tech10,
des1,
des2,
des3,
des4,
des5,
link}) => (
  
  
  <Popup
    trigger={<button className="w-full btn-apd h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
   > View More Details </button>}
    modal
    nested
  >
    {
    
    close => (
      <div className="overflow">
        
        <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> {title} </div>
        <div className="w-full h-full rounded-lg  btn-apd">
        <img
          className="w-100 h-80 centers"
          src={src}
          alt="src"
        />
      </div>
      <div className="restrict-width" >
          <button className="tech-stack h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
          >{tech1}</button>
          <button className="tech-stack h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
          >{tech2}</button>
          <button className="tech-stack h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
          >{tech3}</button>
          <button className="tech-stack h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
          >{tech4}</button>
          <button className="tech-stack h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
          >{tech5}</button>
          <button className="tech-stack h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
          >{tech6}</button>
          <button className="tech-stack h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
          >{tech7}</button>
          <button className="tech-stack h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
          >{tech8}</button>
          <button className="tech-stack h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
          >{tech9}</button>
          <button className="tech-stack h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
          >{tech10}</button>
          
          </div>
        <div className="content">
          {' '}
          <br/><br/>
          {des1}
          <br/><br/>
          {des2}
          <br/><br/>
          {des3}
          <br/><br/>
          {des4}
          <br/><br/>
          {des5}
        </div>
        <a href={link} target="_blank"><button className="tech-stack h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
          >View Live Project</button></a>
      </div>
      
      </div>
    )}
    
  </Popup>);
  

