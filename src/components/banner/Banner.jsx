import React from "react";

const Banner = () => {
  return (
    <div className="relative ">
      <video
        autoPlay
        loop
        muted
        className="absolute z-10 w-full  border object-cover overflow-hidden h-[420px]"
      >
        <source className="object-cover"
          src="https://amarlodge.com/hero.mp4"
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Banner;
