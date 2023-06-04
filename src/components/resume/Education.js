import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm tracking-[4px] text-designColor">2004-2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BE in Electronics and Comm. Engg."
            subTitle="Birla Institute of Technology MESRA (2016 - 2020)"
            result="RNC"
            des="Trained and motivated by the university in order to prepare to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Intermediate-MPC"
            subTitle="Sri Chaitanya Jr. College (2014 - 2016)"
            result="VSKP"
            des="Higher education completed in MPC with a good result and successfully finished and qualified few of the enterance exams."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="St.Anns School (2004 - 2014)"
            result="VSKP"
            des="Secondary education or post-primary education completed with a good academic results."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm tracking-[4px] text-designColor uppercase">
            2020-present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Frontend Developer"
            subTitle="Infosys (2022 - present)"
            result="HYD"
            des="Working on various frontend technologies and frameworks and gaining knowledge on some backend technologies also"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
