import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import ServicesHero from "../components/serviceshero"; 
import AboutServices from "../components/aboutservices";


function Services() {
  return  (

    <div className="w-screen min-h-screen">
        <div>
            <Navbar/>
        </div>
        <div>
            <ServicesHero/>
        </div>
        <div>
            <AboutServices/>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
  );
}

export default Services;


