"use client";
import { FaPlus } from "react-icons/fa6";
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdOutlineVideoLibrary } from "react-icons/md";

export default function LowerNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-[#0e0d0d] border-t border-gray-700 z-50 m-0">
      <ul className="flex justify-around items-center py-2 m-0">

        <li className="  flex flex-col items-center text-white  cursor-not-allowed h-[40px] w-[20%]">
          <MdHomeFilled className="text-2xl " />
          Home
        </li>

        <li className=" flex flex-col items-center text-white  cursor-not-allowed h-[40px] w-[20%]">
          <SiYoutubeshorts className="text-2xl " />
          Shorts
        </li>

         <li className=" flex flex-col  items-center text-white  cursor-not-allowed h-[40px] w-[20%]">
          <FaPlus className="text-2xl mt-[5px] " /> 
        </li>

        <li className=" flex flex-col   items-center text-white  cursor-not-allowed h-[40px] w-[20%]">
          <MdOutlineSubscriptions className="text-2xl " />
          Subscriptions
        </li>

        <li className=" flex flex-col items-center text-white  cursor-not-allowed h-[40px] w-[20%] ml-[5px]">
          <MdOutlineVideoLibrary className="text-2xl " />
          You
        </li>
      </ul>
    </nav>
  );
}
