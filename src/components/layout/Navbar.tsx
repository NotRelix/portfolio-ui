'use client'

import React, { useState } from "react";
import Image from "next/image";
import { Home, Edit, Globe, Info } from "lucide-react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const Navbar = () => {
  const navLinks = [
    {
      icon: Home,
      title: "Home",
      href: "/",
    },
    {
      icon: Edit,
      title: "Blog",
      href: "/blog",
    },
    {
      icon: Globe,
      title: "Friends",
      href: "/friends",
    },
    {
      icon: Info,
      title: "Info",
      href: "/info",
    },
  ];

  const contacts = [
    {
      icon: MdEmail,
    },
    {
      icon: AiFillInstagram,
    },
    {
      icon: FaFacebookF,
    },
  ];

  const [openMenu, setOpenMenu] = useState(false);

  function onMenuPress() {
    setOpenMenu(!openMenu);
  }

  return (
    <nav className="bg-neutral-900 h-12 flex justify-between sm:justify-center items-center">
      <div className="flex h-full">
        {navLinks.map((item, index) => {
          return (
            <Link
              href={item.href}
              key={index}
              className="flex items-center gap-1 px-3 hover:bg-neutral-600 transition-all duration-300 ease-in-out h-full"
            >
              <item.icon className="size-5" />
              <p className="hidden sm:block sm:visible">{item.title}</p>
            </Link>
          );
        })}
      </div>
      <div onClick={onMenuPress} className="visible sm:hidden flex px-3 items-center hover:bg-neutral-600 transition-all duration-300 ease-in-out h-full">
        <GiHamburgerMenu className="size-5" />
      </div>
      <div className={`flex flex-col items-center backdrop-blur-md backdrop-brightness-50 sm:hidden fixed top-0 right-0 z-50 w-full h-full transition-transform ease-in-out duration-300 ${openMenu ? "translate-x-0" : "translate-x-full"
        }`}>
        <RxCross2 onClick={onMenuPress} className="size-12 p-2 stroke-[0.5] self-end" />
        <div className="flex flex-col items-center w-full h-full px-4 gap-4">
          <div className="relative size-32 overflow-hidden rounded-full">
            <Image
              src="https://github.com/NotRelix.png"
              alt="profile picture"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold">Reece Lim</h1>
          <p>If today ain't it, tomorrow will be.</p>
          <hr className="border border-dashed opacity-50 w-full" />
          <div className="flex flex-col justify-center gap-4">
            <p className="px-2 font-bold text-xl text-center">My Socials</p>
            <div className="flex gap-2 flex-wrap justify-center">
              {contacts.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="border-2 md:rounded-full rounded-xl hover:bg-neutral-500 transition-all ease-in-out"
                  >
                    <item.icon className="size-10 p-2"></item.icon>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
