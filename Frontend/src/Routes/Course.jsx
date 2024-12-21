import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Books from "../components/Books";

const Course = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Books />
      </div>
      <Footer />
    </div>
  );
};

export default Course;
