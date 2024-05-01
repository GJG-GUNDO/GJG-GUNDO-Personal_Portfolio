import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { certify } from "../CV/certifcate_frt.pdf"
import Pdf from '../CV/certifcate_frt.pdf';
import LinuxEssentials from '../CV/LinuxEssentials.pdf'
import IntroToCyberSec from '../CV/IntroToCyberSec.pdf'

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Google Cloud Digital Leader"
            subTitle="Certification ID
            7673dda46bcb464dbdff2bd2ab0573c0"
            des="February 23, 2024 - February 23, 2027"
            result="View Certificate"
            link="https://www.credly.com/badges/2409caa8-ee27-4f28-bb60-44af35f118c5/public_url"
          />
          <ResumeCard
            title="From Data to Insights with Google Cloud Specilization (Google Cloud)"
            subTitle="Certification ID
            T7MJ9VCJKXCE"
            des="December 28, 2022"
            result="View Certificate"
            link="https://www.coursera.org/user/588ca1d9587c3d2c883c57f9a4325e5c"
          />

          <ResumeCard
            title="Introduction to Cybersecurity By CISCO"
            des="19 Jan 2021"
            result="View Certificate"
            link={IntroToCyberSec}
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Future Ready Talent Virtual Internship Program"
            subTitle="Certification ID
            4b4411e3-969c-4f79-b514-a3804d64a16f"
            des="February 23, 2024 - February 23, 2027"
            result="View Certificate"
            link={Pdf}
          />

          <ResumeCard
            title="NDG Linux Unhatched course in the Cisco Networking Academy"
            des="29 Dec 2023"
            result="View Certificate"
            link={LinuxEssentials}
          />
        </div>
      </div>




    </motion.div>
  );
};

export default Experience;
