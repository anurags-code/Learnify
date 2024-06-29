import Image from "next/image";
import React from "react";
import HomeImage from "../images/Picture1.png";

const FirstHome = () => {
  return (
    <div className=" flex flex-col justify-center p-5 pl-10 ">
      <h1 className=" font-bold md:text-3xl sm:text-2xl text-xl text-blue-700 ">Learnify Subscription</h1>
      <div className=" flex justify-between flex-col-reverse sm:flex-row ">
        <div className="sm:w-3/5 flex flex-col pt-5">
          <p className="md:text-2xl sm:text-xl text-lg">
            Unlimited access to more than 1000 world class courses, handson
            projects, and job ready certificate programs all included in your
            subscription
          </p>
          <p className="md:text-2xl sm:text-xl text-lg font-bold">&#8377; 3999/year, Cancel anytime</p>
          <p className="bg-blue-700 w-fit sm:p-2.5 p-1.5 cursor-pointer sm:rounded-xl rounded-lg hover:bg-blue-800 text-white font-medium focus:ring-4 focus:ring-blue-300 mt-5 ">Start Your Learning Journey</p>
        </div>
        <div className=" ">
          <Image src={HomeImage} alt="BasicBrush Studios Logo" className="h-41 sm:w-4/5 pt-2 "/>
        </div>
      </div>
      <p className="sm:text-lg md:text-xl  text-sm font-semibold sm:pt-10 pt-5  flex justify-center">Learn more than 100 courses from top universities, Companies, with the Subscriptipn plan of Learnify  
      </p>
      
    </div>
  );
};

export default FirstHome;
