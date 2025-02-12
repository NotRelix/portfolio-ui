import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="font-bold text-center p-12">
      Designed by <Link href={"/"}>Loading</Link> @ {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
