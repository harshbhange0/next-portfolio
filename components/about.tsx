"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        as a full-stack developer with one year of experience, I seek an
        internship where I can utilize and enhance my skills in HTML, CSS,
        JavaScript, TypeScript, MongoDB, Prisma, PostgreSQL, Docker, Next.js,
        and the MERN stack. I aim to contribute to impactful projects,
        collaborate with experienced professionals, and foster my growth through
        mentorship. I value opportunities that allow me to innovate, learn new
        technologies, and develop solutions within a supportive team
        environment. Additionally, I am interested in utilizing design tools
        like Canva and Figma to enhance user experiences. Overall, I am eager to
        contribute to meaningful projects, expand my knowledge, and further
        develop my skills as a full-stack developer in an internship setting.
      </p>
    </motion.section>
  );
}
