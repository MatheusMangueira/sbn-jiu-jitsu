"use client";
import Image from "next/image";
import logo from "../../assets/images/SBN-logo.png";
import { InstagramLogo, WhatsappLogo } from "phosphor-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-primary w-full p-4">
      <div className="flex justify-around">
        <Image
          className="w-20 h-20 sm:w-[164px] sm:h-[164px]"
          src={logo}
          alt="logo"
        />

        <div className="text-white sm:text-base text-md flex flex-col sm:gap-5 gap-2 ">
          <p className="">Contato:</p>
          <div className="flex gap-2">
            <Link
              className=""
              target="_blank"
              href={
                "https://api.whatsapp.com/send/?phone=5571996913238&text&type=phone_number&app_absent=0/"
              }
            >
              <WhatsappLogo className="sm:w-[32px] sm:h-[32px] h-[18px] w-[18px] hover:text-red-700 transition-all duration-500 ease-in-out " />
            </Link>
            <Link
              className=""
              target="_blank"
              href={"https://www.instagram.com/suburbio71bjj/"}
            >
              <InstagramLogo
                className="sm:w-[32px] sm:h-[32px] h-[18px] w-[18px] 
              hover:text-red-700 transition-all duration-500 ease-in-out
              "
              />
            </Link>
          </div>
        </div>
      </div>

      <p className="text-gray-700 opacity-20 sm:text-base text-xs text-center mt-4 ">
        Copyright 2023
      </p>
    </div>
  );
};
