"use client";
import "../stylesheets/YTtogglebar.css";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { BiSolidMicrophone } from "react-icons/bi";
import { MdOutlineVideoCall } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";

export default function Toggle() {
  return (
    <div className="Togglebar HP1">
      <div
        style={{
          height: "70px",
          borderRadius: "20px",
          display: "flex",
          position: "relative",
        }}
      >
        <Image
          src="/YYTdownload.png"
          alt="YoutubeLogo"
          // className="ComImg"
          width={50}
          height={70}
          style={{ height: "40px", marginTop: "10px" }}
        />
        <p
          style={{
            color: "white",
            marginTop: "20px",
            height: "50px",
            fontWeight: "600",
            marginLeft: "5px",
          }}
        >
          PromTube
        </p>
      </div>

      <div>
        <input
          type="text"
          placeholder="Search"
          className="Search  cusm:hidden md:inline md:w-[300px] lg:w-[340px] xl:w-[550px] xl:ml-[100px] md:ml-[20px] lg:ml-[80px] "
        />
      </div>

      <div>
        <button className=" cusm:hidden md:inline BT1 w-[40px] h-[35px] mt-[12px]">
          <CiSearch
            className=" cusm:hidden md:inline text-[25px]  "
          />
        </button>
      </div>

      <div>
        <button className="BT2 cusm:hidden md:inline">
          <BiSolidMicrophone
            style={{ fontSize: "40px", padding: "8px" }}
            className="cusm:hidden md:inline bg-black rounded-full"
          />
        </button>
      </div>

      <div>
        <button className="BT3 cusm:ml-[110px] cusm:text-[15px] md:ml-[50px] umlg:ml-[80px] lg:ml-[80px] xl:ml-[100px] flex items-center justify-center">
          <MdOutlineVideoCall />
        </button>
      </div>

      <div>
        <button className="BT4 cusm:text-[12px] ml-[15px] lg:ml-[20px] flex items-center justify-center">
          <IoIosNotificationsOutline />
        </button>
      </div>

      {/* Using Next.js Image with direct path to public/ folder */}
      <div>
        <Image
          src="/computing.jpg"
          alt="YoutubeLogo"
          width={40}
          height={40}
          priority={true}
          className="cusm:hidden md:inline ComImg ml-[15px] lg:ml-[20px]"
        />
      </div>

      <div>
        <button className="BT4 flex cusm:ml-[10px] items-center justify-center p-2 md:hidden">
          <CiSearch className="text-[26px]" />
        </button>
      </div>
    </div>
  );
}
