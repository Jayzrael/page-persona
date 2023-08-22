import React from "react";
import Card from "../Card";

const Section2 = () => {
  return (
    <div className="bg-slate-300 flex flex-col justify-center items-center my-20 w-full sm:max-w-[1250px]">
      <h2 className="py-10 text-2xl font-serif">Our Core Values</h2>
      <div className="flex flex-col sm:flex-row  gap-10  justify-center items-center mb-20">
        <Card
          src="/assets/icons/ailogo.png"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, sunt?"
        />
        <Card
          src="/assets/icons/ailogo.png"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, sunt?"
        />
        <Card
          src="/assets/icons/ailogo.png"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, sunt?"
        />
      </div>
    </div>
  );
};

export default Section2;
