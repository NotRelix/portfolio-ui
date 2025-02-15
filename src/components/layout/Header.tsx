import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center gap-4 p-8 pt-14">
      <div className="relative size-28 rounded-full overflow-clip">
        <Image
          src={"/profile-pic.jpg"}
          fill
          className="w-full h-full object-cover object-center"
          alt="Reece Lim"
        ></Image>
      </div>
      <h1 className="text-3xl font-bold">Loading</h1>
      <p>A clever person solves a problem. A wise person avoids it.</p>
    </header>
  );
};

export default Header;
