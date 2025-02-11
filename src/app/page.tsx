import Image from "next/image";
import { Home, Edit, Globe, Info } from "lucide-react";

import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaLaptop } from "react-icons/fa";
import { HiMiniCodeBracket } from "react-icons/hi2";
import { IoLogoJavascript, IoMdPhonePortrait } from "react-icons/io";
import { FiDatabase } from "react-icons/fi";
import { FaComputer, FaLocationDot } from "react-icons/fa6";
import { BsEarbuds } from "react-icons/bs";

export default function HomePage() {
  const navLinks = [
    {
      icon: Home,
      title: "Home",
    },
    {
      icon: Edit,
      title: "Edit",
    },
    {
      icon: Globe,
      title: "Friends",
    },
    {
      icon: Info,
      title: "Info",
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

  const skills = [
    {
      icon: HiMiniCodeBracket,
      title: "HTML & CSS",
    },
    {
      icon: IoLogoJavascript,
      title: "JavaScript",
    },
    {
      icon: FiDatabase,
      title: "Database",
    },
  ];

  const equipments = [
    {
      icon: FaComputer,
      title: "Main Desktop",
    },
    {
      icon: FaLaptop,
      title: "ROG Strix G17",
    },
    {
      icon: IoMdPhonePortrait,
      title: "Samsung A54",
    },
    {
      icon: BsEarbuds,
      title: "Galaxy Buds 2",
    },
  ];

  return (
    <div className="flex flex-col w-full sm:max-w-7xl mx-auto">
      <header className="flex flex-col justify-center items-center gap-4 p-8">
        <div className="relative size-32 rounded-full overflow-clip">
          <Image
            src={"/portfolio-ui/profile-pic.jpg"}
            fill
            className="w-full h-full object-cover object-center"
            alt="Reece Lim"
          ></Image>
        </div>
        <h1 className="text-3xl font-bold">Loading</h1>
        <p>A clever person solves a problem. A wise person avoids it.</p>
      </header>
      <main className="flex flex-col gap-2">
        <nav className="bg-neutral-900 h-12 flex justify-center items-center">
          {navLinks.map((item, index) => {
            return (
              <button
                key={index}
                className="flex items-center gap-1 p-2 px-3 hover:bg-neutral-600 transition-all duration-300 ease-in-out h-full"
              >
                <item.icon className="size-5" />
                {item.title}
              </button>
            );
          })}
        </nav>

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
              src={"/portfolio-ui/hero-banner.jpg"}
              fill
              className="object-cover object-top"
              alt="background scenery image"
            ></Image>
          </div>
        </div>

        <div className="bg-neutral-900 p-8 flex flex-col gap-4">
          <h1 className="border-l-[6px] border-blue-400 px-2 font-bold text-3xl">
            Skills
          </h1>
          <div className="flex gap-2">
            {skills.map((item, index) => {
              return (
                <div className="bg-neutral-800/50 p-4 flex flex-col gap-4 flex-1 hover:bg-neutral-700 transition-all ease-in-out" key={index}>
                  <item.icon className="size-12" />
                  <p className="font-bold">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-neutral-900 p-8 flex flex-col gap-4">
          <h1 className="border-l-[6px] border-blue-400 px-2 font-bold text-3xl">
            Equipments
          </h1>
          <div className="flex gap-2">
            {equipments.map((item, index) => {
              return (
                <div className="bg-neutral-800/50 p-4 flex flex-col gap-4 flex-1 hover:bg-neutral-700 transition-all ease-in-out" key={index}>
                  <item.icon className="size-12" />
                  <p className="font-bold">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-neutral-900 p-8 flex flex-col gap-4">
          <h1 className="border-l-[6px] border-blue-400 px-2 font-bold text-3xl">
            Cool Pictures
          </h1>
          <div className="grid grid-cols-3 grid-rows-2 h-[36rem] w-full gap-2">
            <div className="col-span-1 row-span-2 relative w-full h-full overflow-hidden rounded-xl">
              <Image
                src="/portfolio-ui/pictures/kyoto-japan.jpeg"
                fill
                alt="a cozy pavillion in japan"
                className="object-cover"
              />
              <span className="absolute bottom-2 left-2 p-2 items-center rounded-xl bg-neutral-900/50 backdrop-blur-sm flex gap-2">
                <FaLocationDot />
                <span>Kyoto, Japan</span>
              </span>
            </div>
            <div className="col-span-1 row-span-1">
              <div className="w-full h-full relative overflow-clip rounded-xl">
                <Image
                  src="/portfolio-ui/pictures/shanghai-china.jpeg"
                  fill
                  alt="shanghai, china's city proper scenery"
                  className="object-cover"
                />
                <span className="absolute bottom-2 left-2 p-2 items-center rounded-xl bg-neutral-900/50 backdrop-blur-sm flex gap-2">
                  <FaLocationDot />
                  <span>Shanghai, China</span>
                </span>
              </div>
            </div>
            <div className="col-span-1 row-span-1">
              <div className="main-picture w-full h-full relative overflow-clip rounded-xl">
                <Image
                  src="/portfolio-ui/pictures/el-nido-philippines.jpeg"
                  fill
                  alt="a beach in el nido in the philippines"
                  className="object-cover"
                />
                <span className="absolute bottom-2 left-2 p-2 items-center rounded-xl bg-neutral-900/50 backdrop-blur-sm flex gap-2">
                  <FaLocationDot />
                  <span>El Nido, Philippines</span>
                </span>
              </div>
            </div>
            <div className="col-span-1 row-span-1">
              <div className="main-picture w-full h-full relative overflow-clip rounded-xl">
                <Image
                  src="/portfolio-ui/pictures/new-york-usa.jpeg"
                  fill
                  alt="city proper in new york, usa with tall buildings"
                  className="object-cover"
                />
                <span className="absolute bottom-2 left-2 p-2 items-center rounded-xl bg-neutral-900/50 backdrop-blur-sm flex gap-2">
                  <FaLocationDot />
                  <span>New York, USA</span>
                </span>
              </div>
            </div>
            <div className="col-span-1 row-span-1">
              <div className="main-picture w-full h-full relative overflow-clip rounded-xl">
                <Image
                  src="/portfolio-ui/pictures/london-uk.jpeg"
                  fill
                  alt="driving in london in a rainy day"
                  className="object-cover"
                />
                <span className="absolute bottom-2 left-2 p-2 items-center rounded-xl bg-neutral-900/50 backdrop-blur-sm flex gap-2">
                  <FaLocationDot />
                  <span>London, UK</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
