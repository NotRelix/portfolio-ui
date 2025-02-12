import React from "react";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const ProfileCard = () => {
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

  return (
    <div className="bg-neutral-900 flex-grow-[1] p-6 flex md:flex-col items-center gap-4 md:justify-center">
      <div className="flex flex-col md:items-center gap-2 mr-auto md:m-auto">
        <div className="relative overflow-clip size-24 md:rounded-full rounded-2xl">
          <Image
            src={"https://github.com/NotRelix.png"}
            fill
            className="w-full h-full object-cover object-center"
            alt="profile picture"
          ></Image>
        </div>
        <h1 className="text-3xl font-bold">Reece Lim</h1>
      </div>
      <div className="mr-auto md:m-auto justify-start flex flex-col gap-2">
        <p className="font-bold text-2xl md:text-base md:text-center">My Socials</p>
        <div className="flex gap-2">
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
  );
};

export default ProfileCard;
