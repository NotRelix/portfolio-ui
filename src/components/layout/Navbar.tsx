import React from "react";
import { Home, Edit, Globe, Info } from "lucide-react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

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
      <div className="flex px-3 items-center hover:bg-neutral-600 transition-all duration-300 ease-in-out h-full">
        <GiHamburgerMenu className="size-5" />
      </div>
    </nav>
  );
};

export default Navbar;
