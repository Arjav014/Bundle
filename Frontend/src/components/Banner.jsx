import React from "react";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="flex flex-col md:flex-row-reverse my-12 md:pt-20 md:items-center md:justify-evenly">
          <img
            src="public/images/Hero.png"
            className="max-w-sm"
          />
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold">
              Welcome and Learn something <br />
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70 text-gray-500"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow text-gray-500"
                placeholder="Enter email to login"
              />
            </label>
            <button className="btn btn-secondary mt-6">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
