"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import { AlignJustify, X } from "lucide-react";
import Link from "next/link";
import DropdownMenu from "./drop-down-menu";

const ActionButtons = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="pr-2">
      <div className=" flex items-center justify-center ">

        <div className="flex items-center pr-4 lg:space-x-4">
          {/*
          <Link href={"/free"}>
            <Button
              variant={"outline"}
              className="
            lg:flex
            items-center
            hidden
                border-none
                text-md

                "
            >
              Log in
            </Button>
          </Link>
        */}
          <Link href={"/contact"}>
            <Button
              className="hidden bg-black text-white hover:bg-[#070E21] lg:block">Reach out</Button>
          </Link>
        </div>
      </div>

      {isDropdownVisible && (
        <div
          onClick={toggleDropdown}
          className="
               rounded-full
               xl:hidden
             "
        >
          <X className="size-5 items-center justify-center rounded-full" />
        </div>
      )}
      {!isDropdownVisible && (
        <div onClick={toggleDropdown} className="flex lg:hidden">
          <AlignJustify className="mr-2 size-6 items-center justify-center" />
        </div>
      )}

      {isDropdownVisible && <DropdownMenu onClose={closeDropdown} />}
    </div>
  );
};

export default ActionButtons;

// <div className="flex xl:space-x-4">
//   <Link
//     href={"/contact-sales"}
//     className="
//     lg:flex
//     items-center
//     hidden
//
//     "
//   >
//     <div className="">Request a demo</div>
//   </Link>
//
//   <div className="font-thin
// lg:flex
//     items-center
//     hidden">|</div>
// </div>
