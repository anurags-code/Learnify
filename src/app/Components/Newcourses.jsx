"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import Dsalogo from "../images/dsaLogo.png";
import Csslogo from "../images/css-logo.png";
import MeanLo from "../images/MeanLogo.png";
import GDLo from "../images/gdLogo.png";
import AILo from "../images/aiLogo.avif";
import MLLo from "../images/mlLogo.avif";
import { FaStar } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";

const courseData = [
  {
    image: Dsalogo,
    name: "Dsa",
    alt: "DSA course",
    heading: "Complete DSA course using C++",
    description:
      "Master Data Structures and Algorithms: Gain in-depth knowledge of essential DSA concepts through interactive lessons and hands-on projects. Enhance your problem-solving abilities, optimize your code, and prepare for technical interviews. Ideal for aspiring software developers and engineers. Enroll now to advance your coding skills and achieve your career goals!",
    createdBy: "Dr. xyz",
    points: [
      "Foundation of DSA",
      "Object Oriented Programming",
      "Advance DSA",
      "Projects using Concepts of DSA",
      "Placement preparation",
    ],
  },
  {
    image: Csslogo,
    name: "Css",
    alt: "Css Course",
    heading: "Complete CSS course BootCamp",
    description:
      "Learn CSS: Master the art of designing stunning, responsive websites with comprehensive lessons and hands-on projects. Understand core concepts, advanced techniques, and best practices. Perfect for aspiring web developers and designers. Enhance your skills, create visually appealing web pages, and elevate your career. Enroll now to transform your web design abilities!",
    createdBy: "Dr. xyz",
    points: [
      "Basics of HTML",
      "Basics of CSS",
      "Advance CSS",
      "TailWind CSS",
      "Projects",
    ],
  },
  {
    image: MeanLo,
    name: "Mean",
    alt: "MEAN Course",
    heading: "Complete MEAN Stack BootCamp",
    description:
      "Master the MEAN Stack: Build dynamic, full-stack web applications using MongoDB, Express.js, Angular, and Node.js. Gain practical experience through hands-on projects and expert instruction. Perfect for aspiring web developers seeking to enhance their skills and career prospects. Enroll now and become proficient in the MEAN stack!",
    createdBy: "Dr. xyz",
    points: [
      "Basics of HTML",
      "Basics of CSS",
      "Basics of JavaScript",
      "Complete ReactJS",
      "Complete MongoDB",
      "Complete ExpressJS",
      "Complete AngularJS",
      "Complete NODE JS",
      "Full Stack Web Development Projects",
    ],
  },
  {
    image: GDLo,
    name: "Gd",
    alt: "GraphicsDesign Course",
    heading: "Complete Graphic Designing Bootcamp",
    description:
      "Master Graphic Design: Learn to create stunning visuals using industry-standard tools and techniques. Gain hands-on experience through practical projects and expert guidance. Perfect for aspiring designers looking to enhance their creativity and career opportunities. Enroll now and transform your graphic design skills!",
    createdBy: "Dr. xyz",
    points: [
      "Gain the fundamental skills needed to be a graphic designer",
      "Communicate through image-making and typography",
      "Complete a capstone project to add to your professional portfolio",
      "Learn everything you need to know to work in interface design, motion graphics, and editorial design",
    ],
  },
  {
    image: AILo,
    name: "Ai",
    alt: "AI Course",
    heading: "Complete Artificial Intelligence Using Python",
    description:
      "Master Artificial Intelligence: Dive into machine learning, neural networks, and AI technologies with hands-on projects and expert guidance. Perfect for aspiring AI professionals and tech enthusiasts. Enhance your skills, innovate solutions, and advance your career in the rapidly growing AI field. Enroll now to unlock your AI potential!",
    createdBy: "Dr. xyz",
    points: [
      "Describe what AI and generative AI (GenAI) is",
      "Demonstrate how AI applications and use cases can transform our lives and our work.",
      "Describe the issues, limitations, and ethical concerns surrounding AI.",
      "Recognize the potential and impact of AI to transform businesses and careers.",
    ],
  },
  {
    image: MLLo,
    name: "Ml",
    alt: "ML Course",
    heading: "Complete Machine Learning Using Python",
    description:
      "Master Machine Learning: Learn to build predictive models and data-driven solutions with hands-on projects and expert instruction. Ideal for aspiring data scientists and AI enthusiasts. Enhance your skills, solve real-world problems, and advance your career. Enroll now and become a machine learning expert!",
    createdBy: "Dr. xyz",
    points: [
      "Basics of Python",
      "Describe the various types of Machine Learning algorithms and when to use them ",
      "Complete Machine Learning",
    ],
  },
];
const certificate = [
  "Certification",
  "Resume Ready Skills",
  "Life Time Access",
];

const Newcourses = () => {
  const [course, Setcourse] = useState(null);
  useEffect(() => {
    const pathname = window.location.pathname;
    const segments = pathname.split("/");
    const courseName = segments[segments.length - 1];

    // Find the course object based on the courseName
    const selectedCourse = courseData.find(
      (course) => course.name.toLowerCase() === courseName.toLowerCase()
    );
    console.log(selectedCourse);
    Setcourse(selectedCourse);
  });

  return (
    <div>
      {course && (
        <div>
          <div className="flex justify-between  bg-slate-600  m-5 sm:flex-col md:flex-row-reverse lg:flex-row-reverse flex-col ">
            <Image
              src={course.image}
              alt={course.alt}
              className="flex justify-center w-4/5 m-5 sm:w-200 sm:w-200 md:w-2/5 md:h-2/5 lg:h-1/5 lg:w-1/5"
            />
            <div className="p-6 lg:w-1/2">
              <h1 className="text-3xl font-semibold text-gray-800">
                {course.heading}
              </h1>
              <p className="mt-2 ">{course.description}</p>
              <div className="flex md:gap-16  md:flex-row flex-col ">
                <div>
                  <div className="flex items-center mt-4 cursor-pointer">
                    <span className="bg-yellow-500 text-white px-2 py-1 rounded-md">
                      BestSeller
                    </span>
                    <div className="flex items-center ml-4 text-yellow-500">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                  <h1 className="mt-3 text-xl">
                    Created By:{course.createdBy}
                  </h1>
                </div>
                <div className="md:mt-7 mt-2 p-4 bg-blue-700 text-white flex justify-center cursor-pointer rounded-lg hover:bg-blue-800 h-14  ">Enroll Now</div>
              </div>
            </div>
          </div>

          <div className=" flex justify-center lg:gap-28 md:gap-20 sm:gap-10 gap-5 lg:flex-row md:flex-row sm:flex-col flex-col">
            <div className="border-2 border-black  p-4 mb-10 mx-5">
              <h1 className="text-2xl font-bold mb-1">WHAT YOU WILL LEARN</h1>
              <ul className="flex flex-col justify-start ">
                {course.points.map((point, index) => (
                  <li key={index} className="text-xl cursor-pointer">
                    <div className="flex justify-start ">
                      <TiTick className="text-blue-700" />
                      {point}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-2 border-black p-4 mb-10 mx-5">
              <h1 className="text-2xl font-bold mb-1">WHAT YOU WILL GET</h1>
              <ul className="flex flex-col justify-start ">
                {certificate.map((point, index) => (
                  <li key={index} className="text-xl cursor-pointer">
                    <div className="flex justify-start ">
                      <TiTick className="text-blue-700" />
                      {point}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Newcourses;
