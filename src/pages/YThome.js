"use client";
import Navigation from "../components/YTnavbar";
import Image from "next/image";
import "../stylesheets/YThome.css";
import Toggle from "../components/YTtogglebar";
import { useState } from "react";
import LowNav from "@/components/LowNav";

const homeVideos = [
  {
    category: "Thriller",
    video: "https://www.youtube.com/watch?v=4y0QYBJcqcU",
    videoImage: "/thrillVid1.jpg",
    channelImage: "/thrillProf1.jpg",
    channelHeader:
      "Martial Universe 2 Nine Talisman Tower | Chinese Fantasy Action film, Full Movie HD",
    channelTitle: "Q1Q2 Movie Channel Official 圈影圈外官方电影频道",
    timeParagraph: "4.3M views • 1 year ago",
  },
  {
    category: "Thriller",
    video: "https://www.youtube.com/watch?v=sBBQIV-jy6M",
    videoImage: "/thrillVid2.jpg",
    channelImage: "/thrillProf2.jpg",
    channelHeader:
      "The Poetic Warrior | Chinese Historical War Action film, Full Movie HD",
    channelTitle: "Moxi Action Movies English",
    timeParagraph: "2.2M views • 1 year ago",
  },
  {
    category: "Thriller",
    video: "https://www.youtube.com/watch?v=7PGqjEQ7g8Y",
    videoImage: "/thrillVid3.jpg",
    channelImage: "/thrillProf3.jpg",
    channelHeader:
      "THE CHRONICLE OF KINGS - English Movie | Jackie Chan, Donnie Yen |Hit Action Adventure English Movie",
    channelTitle: "Hollywood Action",
    timeParagraph: "2.6M views • 4 months ago",
  },

  {
    category: "Gaming",
    video: "https://www.youtube.com/watch?v=RJUxtXvmtTI",
    videoImage: "/gameVid1.jpg",
    channelImage: "/gameProf1.jpg",
    channelHeader: "I'M BACKKKK!! New Season + Rank Reset",
    channelTitle: "Aerith LIVE",
    timeParagraph: "8.3K views • Streamed 1 day ago",
  },
  {
    category: "Gaming",
    video: "https://www.youtube.com/watch?v=wgj-7ga7u1A",
    videoImage: "/gameVid2.jpg",
    channelImage: "/gameProf2.jpg",
    channelHeader:
      "MORTAL KOMBAT 1 Story All Cutscenes Full Movie 2023 [4K 60FPS] MK1",
    channelTitle: "MKIceAndFire",
    timeParagraph: "8.6M views • 11 months ago",
  },
  {
    category: "Gaming",
    video: "https://www.youtube.com/watch?v=CT0UQlRwM1A",
    videoImage: "/gameVid3.jpg",
    channelImage: "/gameProf3.jpg",
    channelHeader: "BLACK OPS 6 EARLY ACCESS DOMINATION - STREAM VOD",
    channelTitle: "TimTheTatman VODs",
    timeParagraph: "4.8K views • 10 hours ago",
  },

  {
    category: "Music",
    video: "https://www.youtube.com/watch?v=OjHAOvR8kps",
    videoImage: "/musicVid1.jpg",
    channelImage: "/musicProf1.jpg",
    channelHeader: "Doja Cat - I Don't Do Drugs (Visualizer) ft. Ariana Grande",
    channelTitle: "Doja Cat",
    timeParagraph: "27M views • 3 years ago",
  },
  {
    category: "Music",
    video: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
    videoImage: "/musicVid2.jpg",
    channelImage: "/musicProf2.jpg",
    channelHeader: "Luis Fonsi - Despacito ft. Daddy Yankee",
    channelTitle: "Luis Fonsi",
    timeParagraph: "8.5B views • 7 years ago",
  },
  {
    category: "Music",
    video: "https://www.youtube.com/watch?v=tcYodQoapMg",
    videoImage: "/musicVid3.jpg",
    channelImage: "/musicProf3.jpg",
    channelHeader: "Ariana Grande - positions (official video)",
    channelTitle: "Ariana Grande",
    timeParagraph: "596M views • 3 years ago",
  },

  {
    category: "Gadgets",
    video: "https://www.youtube.com/watch?v=Ax9a_X2uE6g",
    videoImage: "/gadVid1.jpg",
    channelImage: "/gadProf1.jpg",
    channelHeader: "Unboxing Samsung's HUGE New 8K Flagship TV",
    channelTitle: "Unbox Therapy",
    timeParagraph: "842K views • 5 days ago",
  },
  {
    category: "Gadgets",
    video: "https://www.youtube.com/watch?v=UpzCuKkveTI",
    videoImage: "/gadVid2.jpg",
    channelImage: "/gadProf2.jpg",
    channelHeader: "15 AMAZING INVENTIONS THAT WILL CHANGE YOUR LIFE",
    channelTitle: "FuturisticTech",
    timeParagraph: "1.5M views • 6 months ago",
  },
  {
    category: "Gadgets",
    video: "https://www.youtube.com/watch?v=9UaYj13gPvk",
    videoImage: "/gadVid3.jpg",
    channelImage: "/gadProf3.jpg",
    channelHeader: "ROG Phone 8 Pro Edition Unboxing and Camera Test - ASMR",
    channelTitle: "Dr Debox",
    timeParagraph: "365K views • 5 months ago",
  },

  {
    category: "SciFi",
    video: "https://www.youtube.com/watch?v=zWTbLZCR84k",
    videoImage: "/scifiVid1.jpg",
    channelImage: "/scifiProf1.jpg",
    channelHeader: "Faora-Ul vs Kal-El | Man of Steel",
    channelTitle: "Flashback FM",
    timeParagraph: "53M views • 8 years ago",
  },
  {
    category: "SciFi",
    video: "https://www.youtube.com/watch?v=yur9iOre95Y",
    videoImage: "/scifiVid2.jpg",
    channelImage: "/scifiProf2.jpg",
    channelHeader: "Epic Battle Sequences in Fantasy/Sci-Fi Films",
    channelTitle: "Universal Pictures",
    timeParagraph: "503K views • 2 months ago",
  },
  {
    category: "SciFi",
    video: "https://www.youtube.com/watch?v=HIPwK-0b8xU",
    videoImage: "/scifiVid3.jpg",
    channelImage: "/scifiProf3.jpg",
    channelHeader: "Godzilla - International Trailer - Official Warner Bros.",
    channelTitle: "Warner Bros. UK & Ireland",
    timeParagraph: "1.6M views • 10 years ago",
  },

  {
    category: "Luxurycars",
    video: "https://www.youtube.com/watch?v=n8tW3UVw6WM",
    videoImage: "/luxVid1.jpg",
    channelImage: "/luxProf1.jpg",
    channelHeader: "Bugatti Chiron SS v 1,800hp Lambo Huracan: DRAG RACE",
    channelTitle: "carwow",
    timeParagraph: "5.8M views • 9 months ago",
  },
  {
    category: "Luxurycars",
    video: "https://www.youtube.com/watch?v=sQVz0yeyqfM",
    videoImage: "/luxVid2.jpg",
    channelImage: "/luxProf2.jpg",
    channelHeader:
      "2024 Range Rover Sport Price Review | Cost of Ownership | Autobiography | Features | Practicality",
    channelTitle: "MrHowMuch",
    timeParagraph: "181K views 1 month ago",
  },
  {
    category: "Luxurycars",
    video: "https://www.youtube.com/watch?v=o2fRJFfzhXc",
    videoImage: "/luxVid3.jpg",
    channelImage: "/luxProf3.jpg",
    channelHeader: "2024 Ford F-150 Shelby Raptor - Ultra Luxury Wild Truck!",
    channelTitle: "MEDCARS",
    timeParagraph: "390K views 2 months ago",
  },

  {
    category: "Testdrive",
    video: "https://www.youtube.com/watch?v=33pPVde3WQw",
    videoImage: "/testdVid1.jpg",
    channelImage: "/testdProf1.jpg",
    channelHeader: "Ford Raptor v GR Toyota Hilux v VW Amarok: DRAG RACE",
    channelTitle: "carwow",
    timeParagraph: "2.4M views 1 year ago",
  },
  {
    category: "Testdrive",
    video: "https://www.youtube.com/watch?v=C1TrEbg00BU",
    videoImage: "/testdVid2.jpg",
    channelImage: "/testdProf2.jpg",
    channelHeader:
      "2024 Ford F-150 Raptor R - Screaming 720hp V8 Truck Morning Commute",
    channelTitle: "TopherDrives",
    timeParagraph: "55K views 7 days ago",
  },
  {
    category: "Testdrive",
    video: "https://www.youtube.com/watch?v=CWszVwY0BPQ",
    videoImage: "/testdVid3.jpg",
    channelImage: "/testdProf3.jpg",
    channelHeader: "2024 Lexus LX 600 -- An Unstoppable $113,000 Luxury TANK!",
    channelTitle: "Car Confections",
    timeParagraph: "45K views 2 weeks ago",
  },

  {
    category: "Architecture",
    video: "https://www.youtube.com/watch?v=1npTHjKbwnE",
    videoImage: "/archVid1.jpg",
    channelImage: "/archProf1.jpg",
    channelHeader:
      "Revitalizing a Cape Town Home: ARRCC's Transformation | ARCHITECTURE HUNTER",
    channelTitle: "Architecture Hunter",
    timeParagraph: "88K views 1 month ago",
  },
  {
    category: "Architecture",
    video: "https://www.youtube.com/watch?v=vglO_1boX2M",
    videoImage: "/archVid2.jpg",
    channelImage: "/archProf2.jpg",
    channelHeader:
      "Inside a $251K - 5 Bedroom Duplex in Lekki (With Gym, Swimming pool & Open Terrace)",
    channelTitle: "Precious Afinni",
    timeParagraph: "4.5K views 7 days ago",
  },
  {
    category: "Architecture",
    video: "https://www.youtube.com/watch?v=yadvK9wiJE4",
    videoImage: "/archVid3.jpg",
    channelImage: "/archProf3.jpg",
    channelHeader: "100 Most Beautiful Places to Visit in China",
    channelTitle: "My Unreal Planet TV",
    timeParagraph: "479K views 2 months ago",
  },

  {
    category: "Samsung",
    video: "https://www.youtube.com/watch?v=f2saSx301b0",
    videoImage: "/samVid1.jpg",
    channelImage: "/samProf1.jpg",
    channelHeader: "Samsung Galaxy Z Fold 6 | Tips, Tricks & Best Features",
    channelTitle: "Tech Spurt",
    timeParagraph: "103K views 1 month ago",
  },
  {
    category: "Samsung",
    video: "https://www.youtube.com/watch?v=t3-jSn99eB0",
    videoImage: "/samVid2.jpg",
    channelImage: "/samProf2.jpg",
    channelHeader:
      "iPhone 15 Pro Max Vs Samsung Galaxy S24 Ultra Unboxing and Camera Test - ASMR",
    channelTitle: "Dr Debox",
    timeParagraph: "1.6M views 5 months ago",
  },
  {
    category: "Samsung",
    video: "https://www.youtube.com/watch?v=hUoa01qTLLo",
    videoImage: "/samVid3.jpg",
    channelImage: "/samProf3.jpg",
    channelHeader: "Galaxy S25 Ultra - Samsung is Creating a Masterpiece",
    channelTitle: "Discover of Tech",
    timeParagraph: "4.7K views 5 days ago",
  },

  {
    category: "Newtoyou",
    video: "https://www.youtube.com/watch?v=OMUfmlPs_w4",
    videoImage: "/newVid1.jpg",
    channelImage: "/newProf1.jpg",
    channelHeader:
      "Inside The World’s Most Secret House Built Into a Mountain (House Tour)",
    channelTitle: "The Local Project",
    timeParagraph: "1.2M views 4 weeks ago",
  },
  {
    category: "Newtoyou",
    video: "https://www.youtube.com/watch?v=R7jjcxgkt9o",
    videoImage: "/newVid2.jpg",
    channelImage: "/newProf2.jpg",
    channelHeader:
      "Immaculate Mansion in the SKY with Private Pool | LUXURY HOME TOUR",
    channelTitle: "Luxury TV",
    timeParagraph: "998K views 1 year ago",
  },
  {
    category: "Newtoyou",
    video: "https://www.youtube.com/watch?v=CnGk-xjv5vg",
    videoImage: "/newVid3.jpg",
    channelImage: "/newProf3.jpg",
    channelHeader: "Pro Pilot vs. Beginner | CINEMATIC FPV BATTLE!",
    channelTitle: "Niklas Christl",
    timeParagraph: "2.5M views 3 years ago",
  },
];

let Thriller = homeVideos.filter((word) => {
  return word.category === "Thriller";
});
let Gaming = homeVideos.filter((word) => {
  return word.category === "Gaming";
});
let Music = homeVideos.filter((word) => {
  return word.category === "Music";
});
let Gadgetary = homeVideos.filter((word) => {
  return word.category === "Gadgets";
});
let SciFi = homeVideos.filter((word) => {
  return word.category === "SciFi";
});
let Luxurycars = homeVideos.filter((word) => {
  return word.category === "Luxurycars";
});
let Testdrive = homeVideos.filter((word) => {
  return word.category === "Testdrive";
});
let Architecture = homeVideos.filter((word) => {
  return word.category === "Architecture";
});
let Samsung = homeVideos.filter((word) => {
  return word.category === "Samsung";
});
let Newtoyou = homeVideos.filter((word) => {
  return word.category === "Newtoyou";
});

function Home() {
  const [thriller2, setThriller] = useState(true);
  const [gaming2, setGaming] = useState(true);
  const [music2, setMusic] = useState(true);
  const [gadgets2, setGadgets] = useState(true);
  const [scifi2, setScifi] = useState(true);
  const [luxurycars2, setLuxuryCars] = useState(true);
  const [testdrive2, setTestDrive] = useState(true);
  const [architecture2, setArchitecture] = useState(true);
  const [samsung2, setSamsung] = useState(true);
  const [newtoyou2, setNewToYou] = useState(true);
  const sections = [
    { condition: thriller2, data: Thriller },
    { condition: gaming2, data: Gaming },
    { condition: music2, data: Music },
    { condition: gadgets2, data: Gadgetary },
    { condition: scifi2, data: SciFi },
    { condition: luxurycars2, data: Luxurycars },
    { condition: testdrive2, data: Testdrive },
    { condition: architecture2, data: Architecture },
    { condition: samsung2, data: Samsung },
    { condition: newtoyou2, data: Newtoyou },
  ];
  function setAllTrue() {
    setThriller(true);
    setGaming(true);
    setMusic(true);
    setGadgets(true);
    setScifi(true);
    setLuxuryCars(true);
    setTestDrive(true);
    setArchitecture(true);
    setSamsung(true);
    setNewToYou(true);
  }

  function activateOnly(setActive) {
    setThriller(false);
    setGaming(false);
    setMusic(false);
    setGadgets(false);
    setScifi(false);
    setLuxuryCars(false);
    setTestDrive(false);
    setArchitecture(false);
    setSamsung(false);
    setNewToYou(false);
    setActive(true);
  }

  return (
    <div className="min-h-screen bg-[#0e0d0d] text-white ">
      {/* Navigation */}
      <div className="hidden lg:flex">
        <Navigation />
      </div>

      {/* Sticky Header: Toggle + Buttons */}
      <div className="HP1 fixed top-0 left-0 right-0 z-50 bg-[rgb(14,13,13)] px-1  pb-2 lg:ml-[100px]">
        <Toggle />

        {/* Buttons Bar */}
        <div className=" flex overflow-x-auto gap-2 md:justify-start">
          {[
            { id: "all", label: "All", onClick: () => setAllTrue() },
            {
              id: "thriller",
              label: "Thriller",
              onClick: () => activateOnly(setThriller),
            },
            {
              id: "gaming",
              label: "Gaming",
              onClick: () => activateOnly(setGaming),
            },
            {
              id: "music",
              label: "Music",
              onClick: () => activateOnly(setMusic),
            },
            {
              id: "gadgets",
              label: "Gadgets",
              onClick: () => activateOnly(setGadgets),
            },
            {
              id: "scifi",
              label: "SciFi",
              onClick: () => activateOnly(setScifi),
            },
            {
              id: "luxurycars",
              label: "Luxury Cars",
              onClick: () => activateOnly(setLuxuryCars),
            },
            {
              id: "testdrive",
              label: "Test Drive",
              onClick: () => activateOnly(setTestDrive),
            },
            {
              id: "architecture",
              label: "Architecture",
              onClick: () => activateOnly(setArchitecture),
            },
            {
              id: "samsung",
              label: "Samsung",
              onClick: () => activateOnly(setSamsung),
            },
            {
              id: "newtoyou",
              label: "New To You",
              onClick: () => activateOnly(setNewToYou),
            },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={btn.onClick}
              className="well whitespace-nowrap hover:bg-white hover:text-black text-sm p-[12px] h-[40px] rounded-[10px] transition duration-200"
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* Video Grid */}
      <div className="pt-[130px]">
        {" "}
        {/* Push content below the fixed Toggle+Buttons bar */}
        <div className="flex flex-wrap ">
          {sections.map(
            ({ condition, data }) =>
              condition &&
              data.map((youTUBE) => {
                const embedUrl = youTUBE.video.replace("watch?v=", "embed/");

                return (
                  <div
                    key={youTUBE.video}
                    className="w-full cusm:w-[100%] sm:w-[45%] sm:m-[20px] lg:ml-[100px] umlg:w-[30.5%] lg:w-[22.4%] xl:w-[24.4%] umlg:ml-[10px] md:w-[47.3%] md:m-[10px] bg-[#0e0d0d] mb-5 rounded-lg box-border "
                  >
                    <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
                      <iframe
                        src={embedUrl}
                        title={youTUBE.channelHeader}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full rounded-lg border-none"
                      />
                    </div>

                    <div className="flex items-start gap-2 mt-3">
                      <Image
                        src={youTUBE.channelImage}
                        alt="Channel"
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <h2 className="text-base font-bold mb-1">
                          {youTUBE.channelHeader}
                        </h2>
                        <p className="text-sm text-gray-400 m-0">
                          {youTUBE.channelTitle}
                        </p>
                        <p className="text-sm text-gray-400 m-0">
                          {youTUBE.timeParagraph}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
          )}
        </div>
      </div>

      <div className="lg:hidden">
      <LowNav />
      </div>


    </div>
  );
}

export default Home;
