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
    <div className="flex gap-2">
      <div className="bg-neutral-900 flex-grow-[1] p-6 flex flex-col items-center gap-4">
        <div className="relative overflow-clip size-24 rounded-full">
          <Image
            src={"https://github.com/NotRelix.png"}
            fill
            className="w-full h-full object-cover object-center"
            alt="profile picture"
          ></Image>
        </div>
        <h1 className="text-3xl font-bold">Reece Lim</h1>
        <p className="font-bold">hi there</p>
        <div className="flex gap-2">
          {contacts.map((item, index) => {
            return (
              <div
                key={index}
                className="border-2 rounded-full hover:bg-neutral-500 transition-all ease-in-out"
              >
                <item.icon className="size-10 p-2"></item.icon>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex-grow-[9] bg-neutral-500 relative overflow-hidden">
        <Image
          src={"/hero-banner.jpg"}
          fill
          className="object-cover object-top"
          alt="background scenery image"
        ></Image>
      </div>
    </div>
  );
};

export default ProfileCard;
