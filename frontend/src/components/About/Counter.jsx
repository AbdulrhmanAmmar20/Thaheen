import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import courseIcon from "../../assets/courses.svg";
import questionIcon from "../../assets/questions.svg";
import userIcon from "../../assets/team.png";

const stats = [
  {
    title: "Courses",
    value: 30,
    icon: courseIcon,
  },
  {
    title: "Questions",
    value: 1000,
    icon: questionIcon,
  },
  {
    title: "Users",
    value: 500,
    icon: userIcon,
  },
];

const Counter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section
      className="bg-[#FFEAD6] mt-0 px-6 text-center min-h-screen"
      ref={ref}
    >
      <div className="mt-50">
        <h2 className="text-4xl md:text-5xl font-bold text-[#006F6A] mb-4 ">
          Some Fun Facts
        </h2>
        <p className="text-gray-600 mb-14 text-lg">
          We are proud of what we've achieved with your support.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-20">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-[#ffffff] rounded-xl shadow-md p-6 flex items-center justify-center w-24 h-24">
              <img src={stat.icon} alt={stat.title} className="w-14 h-14" />
            </div>
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-800 mt-8">
              {inView && <CountUp start={0} end={stat.value} duration={2} />}+
            </h3>
            <p className="text-gray-600 mt-2 text-base">{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Counter;
