import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import ContactUs from "../components/contactus";

function Contact() {
  return (
    <div className="w-screen min-h-screen">
      <div>
        <Navbar />
      </div>
      <div>
        <ContactUs />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default Contact;