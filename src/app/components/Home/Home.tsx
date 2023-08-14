"use client";
import { useEffect, useState } from "react";
import { ButtonCustom } from "../ButtonCustom";

const imagens = [
  {
    id: 1,
    src: "https://media.discordapp.net/attachments/949389628413206589/1139435870060032070/bg-2.png?width=1099&height=618",
  },
  {
    id: 2,
    src: "https://media.discordapp.net/attachments/949389628413206589/1139435870349435002/bg-1.png?width=1099&height=618",
  },
];

export const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagens.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${imagens[currentIndex].src})` }}
      className={`w-full h-[100vh] sm:bg-center bg-right  bg-cover transition-all ease-in-out duration-500 bg-fixed`}
    >
      <div className="w-full sm:px-20 p-4 h-full justify-center flex sm:items-center flex-col">
        <div className="text-center">
          <h1 className="text-red-700 sm:text-5xl text-2xl font-medium ">
            <span className="text-white font-medium sm:text-[200px] font-suburbio text-6xl">
              Subúrbio71
            </span>
            <br /> Faça parte da família
          </h1>

          <div className="sm:pt-10 pt-5 sm:flex sm:justify-center">
            <ButtonCustom href="/" name="Saiba mais" />
          </div>
        </div>
      </div>
    </div>
  );
};
