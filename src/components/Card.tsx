import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="bg-red-600 w-[23rem] h-[30rem] relative mx-auto">
      <div className="h-full w-full bg-green-200 absolute bg-blend-color-burn">
        {/* image */}
        <Image
          width={"360"}
          height={"455"}
          className="bg-repeat"
          src={
            "https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="project img"
        />
      </div>
      <p className="relative">Title</p>
      <p className="relative">Subtitle</p>
    </div>
  );
};

export default Card;
