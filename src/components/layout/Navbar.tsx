import React from "react";
import { Home, Edit, Globe, Info } from "lucide-react";
import Link from "next/link";

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
    <nav className="bg-neutral-900 h-12 flex justify-center items-center">
      {navLinks.map((item, index) => {
        return (
          <Link
            href={item.href}
            key={index}
            className="flex items-center gap-1 p-2 px-3 hover:bg-neutral-600 transition-all duration-300 ease-in-out h-full"
          >
            <item.icon className="size-5" />
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
