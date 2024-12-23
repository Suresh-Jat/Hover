import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Hover Performance Optimization{" "}
        <span className="bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text">
          for Apps
        </span>
      </h1>
      <p className="mt-10 text-lg text-center max-w-4xl text-neutral-500">
        Supercharge your applications. Leverage cutting-edge performance tools
        and insights to deliver lightning-fast, reliable apps. Optimize today
        for a better tomorrow!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-blue-800 to-red-500 py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 rounded-md border">
          Documentation
        </a>
      </div>

      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-blue-500 shadow-red-500 mx-2 my-4"
          src={video1}
        ></video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-blue-500 shadow-red-500 mx-2 my-4"
          src={video2}
        ></video>
      </div>
    </div>
  );
};

export default HeroSection;
