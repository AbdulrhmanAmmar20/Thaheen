import React from "react";
import { motion } from "framer-motion";
import illustration from "../../assets/group.svg"; // غيّر المسار حسب مكان الصورة

const HeroSection = () => {
  return (
    <section className="bg-[#FFEAD6] text-white min-h-screen flex items-center justify-center px-6 md:px-20">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">

        {/* النصوص مع أنميشن */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#FD7B06]">
            The best place to <br /> pracrice
          </h1>
          <p className="text-[#006F6A] mt-4">
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered.
          </p>

          <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-[#FD7B06] hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full"
            >
              Discover More
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="text-[#006F6A] font-medium hover:underline"
            >
              Explore Services →
            </motion.button>
          </div>
        </motion.div>

        {/* الصورة مع أنميشن */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <img
            src={illustration}
            alt="Hero"
            className="w-full max-w-sm mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;