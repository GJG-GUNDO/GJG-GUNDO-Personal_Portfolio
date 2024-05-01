import React from 'react'
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3, FaJs, FaPhp, FaJava, FaNodeJs } from "react-icons/fa";
import { SiAdobeillustrator } from "react-icons/si";
import { TbBrandNetbeans } from "react-icons/tb";
import { PiFileSql } from "react-icons/pi";
import { SiMongodb } from "react-icons/si";
import { SiMariadb } from "react-icons/si";
import { SiPhpmyadmin } from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { FaAppStoreIos } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { SiGooglecloud } from "react-icons/si";
import { SiMicrosoftazure } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { IoIosGitBranch } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaCpanel } from "react-icons/fa";
import { RxVercelLogo } from "react-icons/rx";











const Skills = () => (

  <div>
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.5 } }}
    className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
  >

    <div className="w-full lgl:w-1/2">
      <div className="py-12 font-titleFont flex flex-col gap-4">
        <h2 className="text-3xl md:text-4xl font-bold">Programming Languages</h2>
      </div>
      <div className='className="flex gap-4'>
        <span className="bannerIconSkills">
          <FaHtml5 /> <p>HTML</p>
        </span>
        <span className="bannerIconSkills">
          <FaCss3 /><p> CSS</p>
        </span>
        <span className="bannerIconSkills">
          <FaJs /> <p>JavaScript</p>
        </span>
        <span className="bannerIconSkills">
          <FaPhp /> <p>PHP</p>
        </span>
        <span className="bannerIconSkills">
          <FaJava /> <p>Java</p>
        </span>

      </div>

      <div className="py-12 font-titleFont flex flex-col gap-4">
        <h2 className="text-3xl md:text-4xl font-bold">Others</h2>
      </div>
      <div className='className="flex gap-4'>
        <span className="bannerIconSkills">
          <SiAdobephotoshop />
          <p>Adobe PhotoShop</p>
        </span>
        <span className="bannerIconSkills">
          <SiAdobeillustrator />
          <p> Adobe Illustrator</p>
        </span>
       
      </div>
      

    </div>


    {/* Start right sec */}
    <div className="w-full lgl:w-1/2">
      <div className="py-12 font-titleFont flex flex-col gap-4">
        <h2 className="text-3xl md:text-4xl font-bold">Backend / Database</h2>
      </div>
      <div className='className="flex gap-4'>
        <span className="bannerIconSkills">
          <FaNodeJs /> <p>Node JS</p>
        </span>
        <span className="bannerIconSkills">
          <PiFileSql /><p> SQL</p>
        </span>
        <span className="bannerIconSkills">
          <SiMongodb /> <p>MongoDB</p>
        </span>
        <span className="bannerIconSkills">
          <SiMariadb /> <p>MariaDB</p>
        </span>
        <span className="bannerIconSkills">
          <SiPhpmyadmin /><p>PhpMyAdmin</p>
        </span>


      </div>


      {/* sec 2 */}
      
      <div className="py-12 font-titleFont flex flex-col gap-4">
        <h2 className="text-3xl md:text-4xl font-bold">Platforms</h2>
      </div>
      <div className='className="flex gap-4'>
        <span className="bannerIconSkills">
          <FaWindows />
          <p>Windows</p>
        </span>
        <span className="bannerIconSkills">
          <FaLinux />
          <p> Linux</p>
        </span>
        <span className="bannerIconSkills">
          <FaApple />
          <p>MacOs</p>
        </span>
        <span className="bannerIconSkills">
          <FaAppStoreIos />
          <p>IOS</p>
        </span>

      </div>
      </div>
  </motion.div>

  
<motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.5 } }}
    className="w-full lgl:flex-row gap-10 lgl:gap-20"
  >

    <div className="w-full">
        <div className="py-12 font-titleFont flex flex-col gap-4">
        <h2 className="text-3xl md:text-4xl font-bold">Developer tools</h2>
      </div>
      <div className='className="flex gap-4'>
        <span className="bannerIconSkills">
          <SiAdobephotoshop />
          <p>Adobe PhotoShop</p>
        </span>
        <span className="bannerIconSkills">
          <SiAdobeillustrator />
          <p> Adobe Illustrator</p>
        </span>
        <span className="bannerIconSkills">
          <TbBrandVscode />
          <p>Vs Code</p>
        </span>
        <span className="bannerIconSkills">
          <TbBrandNetbeans />
          <p>Apache Netbeans</p>
        </span>
        <span className="bannerIconSkills">
          <IoIosGitBranch />
          <p>Git</p>
          </span>
        <span className="bannerIconSkills">
        <FaCpanel />
          <p>Cpanel</p>
        </span>
        <span className="bannerIconSkills">
          <SiGooglecloud />
          <p>Google Cloud Platform</p>
        </span>
        <span className="bannerIconSkills">
          <SiMicrosoftazure />
          <p>Micorsoft Azure</p>
        </span>
        <span className="bannerIconSkills">
          <FaWordpress />
          <p>Wordpress</p>
        </span>
        <span className="bannerIconSkills">
          <FaWordpress />
          <p>Github</p>
        </span>
        <span className="bannerIconSkills">
        <FaGithub />
          <p>Github</p>
        </span>
        <span className="bannerIconSkills">
        <RxVercelLogo />
          <p>Vercell</p>
        </span>
       
      </div>
      

    </div>

  </motion.div>
  </div>

)

export default Skills