"use client";
import Link from "next/link";
import logo from "../../assets/images/SBN-logo.png";
import Image from "next/image";
import faixa from "../../assets/images/faixa.png";

const header = [
  {
    id: 0,
    name: "Inicio",
    path: "/",
  },
  {
    id: 1,
    name: "Quem somos",
    path: "/",
  },
  {
    id: 2,
    name: "Academias",
    path: "/academy",
  },
  {
    id: 3,
    name: "Galeria",
    path: "/photos",
  },
];

import { Fragment } from "react";

import { Popover, Transition } from "@headlessui/react";
import { List, X } from "phosphor-react";
import { HeaderMobileItem } from "./HeaderMobileItem";

export const Header = () => {
  return (
    <div className="sticky top-0 z-[1]" aria-label="Navbar" id="Home">
      <Popover>
        <div className="px-5 py-4 lg:py-0 flex justify-between w-full items-center bg-primary relative">
          <div className="mr-2 lg:hidden flex justify-between w-full">
            <Image className="lg:hidden block" src={logo} alt="logo" />

            <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-white hover:text-white focus:outline-none focus:ring-inset ">
              <span className="sr-only">Open menu</span>
              <List className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <div className="flex gap-20 items-center">
            <Image className="lg:block hidden" src={logo} alt="logo" />

            <Popover.Group
              as="nav"
              className="hidden lg:flex space-x-10 relative items-center "
            >
              {header.map((item) => (
                <Link
                  className="text-white
                duration-500
                  uppercase hover:text-accent text-md"
                  key={item.id}
                  href={item.path}
                >
                  {item.name}
                </Link>
              ))}
            </Popover.Group>
          </div>

          <Image className="lg:block hidden" src={faixa} alt="blackBelt" />
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterTo="opacity-100 scale-100"
          enterFrom="opacity-0 scale-95"
          leave="duration-100 ease-in"
          leaveTo="opacity-0 scale-95"
          leaveFrom="opacity-100 scale-100"
        >
          <Popover.Panel
            focus
            className="absolute z-30 top-0 inset-x-0 transition transform origin-top-right lg:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-primary divide-y-2 divide-gray-50 ">
              <div className="pt-5 pb-6 px-5 h-[100vh] ">
                <div className="flex items-center justify-end">
                  <div className="mr-2">
                    <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-white hover:text-white hover:bg-primary focus:outline-none  ">
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>

                <div className="mt-6">
                  <nav className="grid grid-cols-1 gap-7">
                    {header.map((item) => (
                      <HeaderMobileItem key={item.id} href={item.path}>
                        {item.name}
                      </HeaderMobileItem>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};
