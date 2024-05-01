import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full  gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Google Cloud"
            subTitle="Achivements Related to Google Cloud"
            des2={"Google Cloud Digital Leader (02/2024)"}
            des="Google Cloud Fly Cup Challenge! - Drone Racing League’s (DRL) (12/2022 - 12/2022"
            des1="Three Times Ultimate Mile-Stone achiever at Google Cloud Facilitator Program [ 2021, 2022, 2023]"
          />
          <ResumeCard
            title="Research and Publications"
            // subTitle="Lorem ipsum dolor sit amet alternative."
            // result="Success"
            des="Research paper: cloud based gaming: Architecture challenges and emerging trends at DONBOSCODELHICON23"
            des1="Research paper: Electric Vehicles: Technology and Infrastructure Development at SGTBIMIT 2023"
          />

          <ResumeCard
            title="IPR & Copyrights"
            // subTitle="Lorem ipsum dolor sit amet alternative."
            // result="Success"
            des='Copyright for Project Monumatic: Dated:15/04/2024 vide application no: SW-18632/2024, Copyrights Office, Govt. of India '
           
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
