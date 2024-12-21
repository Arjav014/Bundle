import React from "react";

const Cards = ({ item }) => {
  return (
    <div className="my-4">
      <div className="card bg-base-100 w-96 md:w-[23rem] shadow-md md:hover:scale-105 md:duration-500 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img src={item.image} alt="Book" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div>
                {item.category.map((data)=>(
                    <div className="badge badge-secondary mr-1">{data}</div>
                ))}
            </div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline px-4 py-3">${item.price}</div>
            <div className="badge badge-outline cursor-pointer px-4 py-3 hover:bg-pink-500 hover:text-white duration-200">Buy now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
