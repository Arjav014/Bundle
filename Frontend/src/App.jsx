import React from "react";
import Home from "./Routes/Home";
import Course from "./Routes/Course";
import { Route, Routes } from "react-router-dom";
import Signup from "./Routes/Signup";

const App = () => {
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
    </>
  );
};

export default App;
