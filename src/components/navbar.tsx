"use client";

import { useState, useEffect } from "react";
import ActionButtons from "./action-buttons";
import Logo from "./logo";
import { Menu } from "./menu";

const Navbar = () => {
  const [, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = `
    flex items-center justify-between space-x-10 h-14
    sticky top-0 z-50 border-b border-gray-200 bg-white dark:bg-[#1C1F20] glassmorphism
  `;

  return (
    <div className={navbarClasses}>
      <div className="flex items-center justify-center">
        <Logo />
        <Menu />
      </div>
      <ActionButtons />
    </div>
  );
};

export default Navbar;
