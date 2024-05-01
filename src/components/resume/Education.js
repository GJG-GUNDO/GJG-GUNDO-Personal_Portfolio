import React from "react";
import { motion } from "framer-motion";
import  ResumeCardOne from "./ResumeCardOne";
import  ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-fullh-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCardOne
            title="Master of Computer Application"
            subTitle="Guru Gobind Singh Indraprastha University (2023 - Present, Expected 2025)"
            result="8.2/10"
            
          />
          <ResumeCardOne
            title="Bachelor in Computer Application
            "
            subTitle="Guru Gobind Singh Indraprastha University (2020 - 2023)
            "
            result="9.47/10"
          />
          <ResumeCardOne
            title="Higher Secondary Certificate (Class12th)
            "
            subTitle="Central Board of Secondary Education (2020)
            "
            result="88%"
           
          />
           <ResumeCardOne
            title="Secondary School Certificate (Class 10th)"
            subTitle="Central Board of Secondary Education (2018)

            "
            result="82%"
           
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="IT Support"
            subTitle="Taj Palace, New Delhi "
            result="2 August 2022 - 31 August 2022 "
            des="=>Received hands-on training in hardware and networking, developing proficiency in troubleshooting and maintenance tasks,
            gaining practical experience in hardware and networking.
           "
            des1="=>Acquired knowledge about various applications used for Property Management Systems (PMS), enhancing understanding of
            hospitality industry technology."
            des2="=>Contributed to IT support operations, assisting with troubleshooting issues and ensuring smooth functioning of technology
            infrastructure."
          />
          <ResumeCard
            title="Software Developement Trainee"
            subTitle="Birla Fertility and IVF CK Birla Heathcare Pvt. Ltd."
            result="1 June 2022 - 1 August 2022"
            des="=>Developed a Java-based Asset Management System with MySQL backend for IT team support, optimizing processes and
            improving efficiency"
            des1="=>Customized and deployed HESK, an open-source helpdesk system, on Linux servers for internal IT Helpdesk management."
            des2="=>Enhanced user experience by modifying HESK frontend and implementing advanced functionalities to streamline ticket management"
            des3 ="=>Provided comprehensive documentation, training, and ongoing support to ensure seamless integration and optimal system performance"
          />
         
         
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
