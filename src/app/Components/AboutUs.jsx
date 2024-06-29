"use client"
import Image from "next/image";
import React from "react";
import AboutInsta from "../images/InstaLogo.webp";
import AboutLinkedIn from "../images/linkedinLogo.webp";
import AboutFB from "../images/FBlogo.png";
import AboutUsLogo from "../images/AboutLogo.png";
import TypeWriter from "./TypeWriter";

const text="At Learnify, we are passionate about empowering individuals through online learning. Our mission is to provide high-quality, engaging, and accessible courses designed to help people acquire new skills, advance their careers, and transform their lives. With a team of experienced educators and industry experts, we are committed to delivering exceptional learning experiences that go beyond expectations. We foster a vibrant community of learners who support and inspire each other, making education a collaborative and enriching journey. Whether you are looking to enhance your professional skills, explore new interests, or achieve personal growth, Learnify is here to guide you every step of the way.."

const AboutUs = () => {
  return (
    <div className="p-5 flex justify-center min-h-screen border border-black m-2 rounded-lg shadow-md  bg-blue-200">
      <div className="p-5  w-full ">
        <h1 className="font-bold text-blue-1000 lg:text-4xl md:text-3xl sm:text-2xl text-xl mb-5 ">
          About Learnify
        </h1>
        
          <TypeWriter text={text}/>
        
        <div className="flex justify-center  ">
          <Image
            src={AboutInsta}
            alt="InstaGram"
            className="md:h-16 md:w-16 h-12 w-12 lg:h-20 lg:w-20 p-2 m-2"
          />
          <Image
            src={AboutLinkedIn}
            alt="LinkedIn"
            className="md:h-16 md:w-16 h-12 w-12 lg:h-20 lg:w-20 p-2 m-2"
          />
          <Image src={AboutFB} alt="FaceBook" className="md:h-16 md:w-16 h-12 w-12 lg:h-20 lg:w-20  p-2 m-2 " />
        </div>
        
      </div>
      <div className="lg:grid place-items-center hidden w-2/5 h-3/5 ">
        <Image src={AboutUsLogo} alt="Logo" className="    "/>
      </div>
    </div>
  );
};

export default AboutUs;
