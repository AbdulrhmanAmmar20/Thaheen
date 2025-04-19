import React from "react";
import teamImage from "../../assets/master.svg";
import { motion } from "framer-motion";

const WhoWeAre = () => {
  return (
    <section
      className="text-black py-16 px-6 md:px-20"
      style={{ backgroundColor: "#FFEAD6" }}
    >
      {" "}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <motion.img
          src={teamImage}
          alt="Team"
          className="rounded-xl w-full md:w-1/2 object-cover "
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />

        {/* النص */}
        <motion.div
          className="md:w-1/2 space-y-6 "
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2
            className="text-3xl md:text-4xl font-extrabold"
            style={{ color: "#FD7B06" }}
          >
            ABOUT THAHEEN
          </h2>

          <p
            className="text-gray-300 leading-relaxed text-base md:text-lg"
            style={{ color: "#777777" }}
          >
            The platform is an interactive question-generation and gamified
            learning system to enhance university students’ academic
            performance. Students can access AI-generated questions tailored to
            the content of their courses or specific lessons. They can also
            upload their own questions and grow the database/questions bank.
            Questions are rated by users for quality and relevance in order to
            prioritize the questions for future use.
          </p>

          <motion.button
            className="mt-4 bold border-b-2 border-orange uppercase font-semibold tracking-widest hover:opacity-80 transition"
            style={{ color: "#006F6A" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            View Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;
