import React from "react";
import ImageContent from "../ImageContent";

const Section3 = () => {
  return (
    <div className="my-40 flex flex-col gap-10">
      <p></p>
      <ImageContent
        imageContClass="sm:flex sm:flex-row-reverse flex flex-col"
        imageContHead="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, quasi!"
        imageContParag="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, quasi! Lorem ipsum dolor sit amet."
        imageContList1="Lorem, ipsum dolor."
        imageContList2="Lorem, ipsum dolor."
        imageContList3="Lorem, ipsum dolor."
      />
      <ImageContent
        imageContClass="sm:flex sm:flex-row flex flex-col gap-24"
        imageContHead="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, quasi!"
        imageContParag="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, quasi! Lorem ipsum dolor sit ametLorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, quasi! Lorem ipsum dolor sit amet."
      />
    </div>
  );
};

export default Section3;
