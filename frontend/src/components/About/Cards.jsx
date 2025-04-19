import React from "react";

const courses = [
  {
    code: "ICS 321",
    title: "Database Systems",
    desc: "Learn how to design, manage, and query databases efficiently.",
  },
  {
    code: "ICS 104",
    title: "Programming II",
    desc: "Continue building your Java programming skills with OOP concepts.",
  },
  {
    code: "ICS 202",
    title: "Data Structures",
    desc: "Master algorithms and data structures like trees, graphs, and more.",
  },
  {
    code: "ICS 343",
    title: "Operating Systems",
    desc: "Understand how OS works internally including memory and CPU management.",
  },
  {
    code: "ICS 253",
    title: "Digital Logic Design",
    desc: "Explore the fundamentals of logic gates, circuits, and hardware design.",
  },
  {
    code: "ICS 392",
    title: "Human-Computer Interaction",
    desc: "Study the design and usability of interactive systems.",
  },
];

const CourseCardsSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <h2 className="text-3xl font-bold text-[#006F6A] mb-10 text-center">
        Our Courses
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
          >
            <div className="text-[#FD7B06] font-bold text-xl mb-2">
              {course.code}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {course.title}
            </h3>
            <p className="text-gray-500 mb-4">{course.desc}</p>
            <button className="text-sm font-semibold text-[#006F6A] hover:underline flex items-center gap-1">
              Learn More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseCardsSection;
