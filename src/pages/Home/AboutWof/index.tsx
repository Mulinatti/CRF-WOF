import { ChevronRight } from "lucide-react";
import React from "react";

const AboutWof = () => {
  return (
    <div className="flex mt-8 flex-col items-center justify-center">
      <div>
        <a href="https://www.playwof.com" className="flex items-center transition-all justify-center text-center max-h-12 underline hover:text-red-300 rounded-full px-5 p-3 font-bold">
          Saiba mais
          <ChevronRight strokeWidth={3} />
        </a>
      </div>
      <div className="flex flex-col lg:flex-row mt-5 *:mx-3 *:my-3">
        <a href="https://www.playwof.com" className="flex w-[260px] transition-all items-center justify-start text-center max-h-12 shadow-lg bg-[#5865f2] hover:bg-[#5865f2]/80 rounded-full px-5 p-3 font-bold">
          
          <img className="w-6" src="./logos/discord-icon.svg" alt="" />
          <p className="w-full text-center">Comunidade do Discord</p>
        </a>
        <a href="https://www.playwof.com" className="flex transition-all w-[260px] items-center justify-start text-center max-h-12 shadow-lg bg-[#171a21] hover:bg-[#1b2838] rounded-full px-5 p-3 font-bold">
          <img className="w-8 invert" src="./logos/steam-icon.svg" alt="" />
          <p className="w-full text-center">Página da Steam</p>
        </a>
      </div>
    </div>
  );
};

export default AboutWof;
