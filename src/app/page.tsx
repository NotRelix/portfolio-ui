import Image from "@/components/my-image";
import { FaLaptop } from "react-icons/fa";
import { HiMiniCodeBracket } from "react-icons/hi2";
import { IoLogoJavascript, IoMdPhonePortrait } from "react-icons/io";
import { FiDatabase } from "react-icons/fi";
import { FaComputer, FaLocationDot } from "react-icons/fa6";
import { BsEarbuds } from "react-icons/bs";
import ProfileCard from "@/components/layout/ProfileCard";

export default function HomePage() {
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
    <>
      <div className="flex gap-2 md:flex-row flex-col h-auto">
        <ProfileCard />
        <div className="flex-grow-[9] bg-neutral-900 relative overflow-hidden md:h-auto h-52">
          <Image
            src={"/hero-banner.jpg"}
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
        <div className="flex flex-wrap gap-2">
          {skills.map((item, index) => {
            return (
              <div
                className="bg-neutral-800/50 p-4 flex flex-col gap-4 flex-1 hover:bg-neutral-700 transition-all ease-in-out"
                key={index}
              >
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
        <div className="grid 2xs:grid-cols-2 md-plus:grid-cols-4 gap-2">
          {equipments.map((item, index) => {
            return (
              <div
                className="bg-neutral-800/50 p-4 flex flex-col gap-4 hover:bg-neutral-700 transition-all ease-in-out"
                key={index}
              >
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
        <div className="grid aspect-[1/5] sm:aspect-[2/3] md:aspect-[3/2] xs:grid-cols-1 sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2 max-w-[72rem] w-full gap-2">
          <div className="col-span-1 row-span-2 relative overflow-hidden rounded-xl">
            <Image
              src="/pictures/kyoto-japan.jpeg"
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
            <div className="w-full h-full relative overflow-hidden rounded-xl">
              <Image
                src="/pictures/shanghai-china.jpeg"
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
            <div className="main-picture w-full h-full relative overflow-hidden rounded-xl">
              <Image
                src="/pictures/el-nido-philippines.jpeg"
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
            <div className="main-picture w-full h-full relative overflow-hidden rounded-xl">
              <Image
                src="/pictures/new-york-usa.jpeg"
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
            <div className="main-picture w-full h-full relative overflow-hidden rounded-xl">
              <Image
                src="/pictures/london-uk.jpeg"
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
    </>
  );
}
