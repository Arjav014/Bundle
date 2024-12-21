import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";

const Books = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="pt-32 items-center justify-center text-center">
          <h1 className="text-2xl font-medium md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            similique reprehenderit animi nisi vel corrupti sed eveniet, natus,
            adipisci aut, neque harum nobis esse! Itaque quo suscipit aut
            doloremque aperiam. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Dolor minima blanditiis, rem aliquid impedit
            doloremque veritatis voluptatibus voluptate consequatur.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Books;
