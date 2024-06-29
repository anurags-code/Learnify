import React from "react";
import LoginForm from "../Components/LoginForm";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const page = () => {
  return (
    <div>
      <Header highlight="login" />
      <LoginForm />
      <Footer/>
    </div>
  );
};

export default page;
