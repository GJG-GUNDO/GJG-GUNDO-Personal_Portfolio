import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';
const Projects = () => {

  return (

    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {/* <Popup/> */}

        <ProjectsCard
          title="NFT MarketPlace"
          des=" Developed an NFT marketplace with Ethereum transfer functionality, providing creators and collectors a secure platform to trade digital assets seamlessly."
          src={projectOne}
          github={"https://github.com/GJG-GUNDO/NFT-Marketplace"}
          website={"https://nft-marktplace.vercel.app/"}
          tech1={"React JS"}
          tech2={"Next JS"}
          tech3={"Meta Mask"}
          tech4={"Solidity"}
          tech5={"Web 3"}
          tech6={"Redux"}
          tech7={"Hardhat"}
          tech8={"Vercel"}
          tech9={"MATIC"}
          tech10={"Polygon"}

          des1={"The project is based on a marketplace where the transactions are placed via a NFTs ."}
          des2={"The transactions are typically conducted using cryptocurrencies and each NFT has a digital record of its ownership and transaction history."}
          des3={"Enhanced productivity by leading a team of 2 members."}
        // des4   =  {""}
        // des5   =  {""}

        />

        <ProjectsCard
          title="Monumatic - A QR Based Ticketing System"
          des="Developed and launched a web application facilitating pre-booking of tickets for heritage sites and monuments, improving
          visitor experience and addressing issues such as long queues and sold-out tickets."
          src={projectTwo}
          github={"https://github.com/GJG-GUNDO/Monumatic-Dump"}
          website={"https://monumatic.3rimaging.com/"}
          tech1={"HTML"}
          tech2={"CSS"}
          tech3={"JS"}
          tech4={"PHP"}
          tech5={"MYSQL"}
          tech6={"Insta-Scan"}
          tech7={"Pay-Pal"}
          tech8={"Microsoft Clarity"}
          tech9={"API"}
          tech10={"SMTP"}

          des1={"Developed and launched a web application facilitating pre-booking of tickets for heritage sites and monuments, improving visitor experience and addressing issues such as long queues and sold-out tickets"}
          des2={"Implemented a QR-based paperless entry-exit system and pre-booking parking facilities, enhancing convenience for tourists and          optimizing site management"}
          des3={"Provided comprehensive information on monuments, including historical facts, visiting hours, and special events, while ensuring          real-time ticket availability updates"}
        des4   =  {"Copyrighted, Dated:15/04/2024 vide application no: SW-18632/2024, Copyrights Office, Govt. of India"}
        // des5   =  {""}

        />

<ProjectsCard
          title="CourseHut Azure"
          des="A Static Web App Hosted on Azure Portal "
          src={projectTwo}
          github={"https://github.com/GJG-GUNDO/CourseHut-FRT-PROJECT"}
          website={"https://yellow-mushroom-09c7aa310.5.azurestaticapps.net/"}
          tech1={"HTML"}
          tech2={"CSS"}
          tech3={"JS"}
          tech4={"Git"}
          tech5={"Azure"}
          tech6={"Static Apps"}
          tech7={"FRT"}
          tech8={""}
          tech9={""}
          tech10={""}

          des1={"Developed a prototype website aimed at revolutionizing online learning by providing state-of-the-art courses taught by          world-class instructors, addressing the challenge of finding trustworthy resources amidst a plethora of options."}
          des2={"Deployed the application on GitHub and Microsoft Azure’s Static Web Apps for optimal accessibility, scalability, and          performance."}

        />




      </div>
    </section>
  );
}

export default Projects