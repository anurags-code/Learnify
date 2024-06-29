"use client"
import React from "react";
import Image from "next/image";
import Dsalogo from "../images/dsaLogo.png";
import Csslogo from "../images/css-logo.png";
import MeanLo from "../images/MeanLogo.png";
import GDLo from "../images/gdLogo.png";
import AILo from "../images/aiLogo.avif";
import MLLo from "../images/mlLogo.avif";
import { useRouter } from "next/navigation";

const courseData = [
  {
    image: Dsalogo,
    name:"Dsa",
    alt: "DSA course",
    description:
      "Master Data Structures and Algorithms: Boost your coding skills, ace interviews, and land your dream job! (using C++)",
  },
  {
    image: Csslogo,
    name:"Css",
    alt: "Css Course",
    description:
      "Learn CSS: Design stunning, responsive websites with hands-on projects and expert guidance. Elevate your web skills!",
  },
  {
    image: MeanLo,
    name:"Mean",
    alt: "MEAN Course",
    description:
      "Master the MEAN Stack: Build dynamic web applications with MongoDB, Express.js, Angular, and Node.js. Enroll now!",
  },
  {
    image: GDLo,
    name:"Gd",
    alt: "GraphicsDesign Course",
    description:
      "Master Graphic Design: Create stunning visuals with professional tools and techniques. Enhance your creative skills today!",
  },
  {
    image: AILo,
    name:"Ai",
    alt: "AI Course",
    description:
      "Unlock AI Potential: Master machine learning and deep learning to innovate and lead in the tech industry!",
  },
  {
    image: MLLo,
    name:"Ml",
    alt: "ML Course",
    description:
      "Learn Machine Learning: Develop predictive models and data-driven solutions with hands-on projects and expert guidance.",
  },

];


const Courses = () => {
  const router=useRouter();

  const gotoCourse=(index)=>{
    router.push(`/Course/${courseData[index].name}`)
  }
  return (
    <div>
      <h1 className="font-bold text-3xl p-3 pl-5">Courses in Learnify</h1>
      <div className="flex flex-wrap justify-center gap-8 p-5">
        {courseData.map((course, index) => (
          <div key={index} className="bg-slate-600 border rounded-lg overflow-hidden shadow-md w-80 cursor-pointer hoverable-div" onClick={()=>gotoCourse(index)}>
            <Image src={course.image} alt={course.alt} width={320} height={240} className="pt-3" />
            <div className="p-4 ">
              <p className="text-lg font-bold mb-2">{course.alt}</p>
              <p className="text-sm">{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;