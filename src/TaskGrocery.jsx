import { useState } from "react";
import allGroceryData from "./grocery.json";
const TaskGrocery = () => {
  return (
    <div>
      <div className="flex justify-between bg-zinc-400 p-5">
        <h1 className="bg-green-300 p-2 text-xl">
          This color shows price between 10 to 15
        </h1>
        <h1 className="bg-blue-300 p-2 text-xl">
          This color shows price between 15 to 20
        </h1>
        <h1 className="bg-red-300 p-2 text-xl">
          This color shows price more than 20
        </h1>
      </div>
      <div className=" flex flex-wrap w-full justify-center">
        {allGroceryData.map((v, i) => {
          let bgColor = "";
          if (v.price > 10 && v.price <= 15) {
            bgColor = "bg-green-300";
          } else if (v.price > 15 && v.price <= 20) {
            bgColor = "bg-blue-300";
          } else {
            bgColor = "bg-red-300";
          }
          return (
            <div
              key={v.title}
              className={`${bgColor} p-5 border m-5 w-80 shadow-lg hover:scale-105 hover:shadow-2xl hover:cursor-pointer rounded-lg`}
            >
              <h1 className="text-3xl">{v.title}</h1>
              <h1>{v.description}</h1>
              <h1 className="text-2xl font-semibold">Price : {v.price}$</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TaskGrocery;
