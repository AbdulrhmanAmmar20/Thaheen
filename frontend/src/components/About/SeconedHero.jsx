import React from "react";
import { motion } from "framer-motion";

const SeconedHero = () => {
  return (
    <section className="bg-[#FFEAD6] min-h-screen w-full min-h-[70vh] flex flex-col justify-center items-center text-center px-6 ">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl mt-10 md:text-5xl font-extrabold leading-tight text-[#006F6A]"
      >
        Enjoy your <span className="text-[#FD7B06]">Learning!</span> 
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-10 text-gray-500 text-lg max-w-xl"
      >
        Invest intelligently and discover a better way to manage your entire
        wealth easily.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-8 bg-[#006F6A] hover:bg-[#055f5b] text-white font-semibold px-8 py-3 rounded-full text-lg shadow-lg"
      >
        Create an account →
      </motion.button>
    </section>
  );
};

export default SeconedHero;
