import React from "react";

export default function AnimateDemo() {
  return (
    <div className="flex m-20 flex-col min-h-screen">
      <div className="p-3  bg-pink-500 text-white  w-[300px] rounded-2xl animate">
        Bounce
      </div>

      <div className="p-3 border-2 bg-blue-500 border-blue-600 text-black 
       w-[300px] animate-pulse delay-200">
        Pulse Animation
      </div>

      <div className="hidden p-3 border-2 bg-blue-500 border-blue-600
       text-black  w-[300px] animate-spin delay-200">
        Spin Animation
      </div>
      <div className="hidden p-3 border-2 bg-blue-500 border-blue-600
       text-black  w-[300px] animate-ping delay-200">
        Pulse Animation
      </div>

      <span class="relative flex size-3">
        <span class="absolute inline-flex h-full w-full
         animate-ping rounded-full bg-sky-400 opacity-75"></span>
        <span class="relative inline-flex size-3
         rounded-full bg-sky-500"></span>
      </span>

      <button className="bg-green-400 w-[300px] p-4 transition duration-800 hover:translate-6 hover:bg-green-800">
        Transition and Translate
      </button>

      <button className="bg-green-400 w-[300px] p-4 transition duration-800 hover:scale-75 hover:bg-green-800">
        Transition and Scale
      </button>

      <div className="bg-black w-[300px] h-[300px] mt-20 flex items-center justify-center relative">
        <div className="absolute bg-white rounded-full w-[100px] h-[100px] animate-ping delay-150"></div>
        <div className="absolute bg-white rounded-full w-[70px] h-[70px] animate-ping delay-300"></div>
        <div className="absolute bg-white rounded-full w-[40px] h-[40px] animate-ping delay-700"></div>
      </div>
    </div>
  );
}
