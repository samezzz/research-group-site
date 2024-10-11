import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <div className=" mx-auto flex flex-col px-8 pb-10 lg:items-center lg:px-0 xl:w-3/4 2xl:w-[55%] ">
      <div className="pt-4  md:px-0 lg:flex lg:space-x-32">
        <div className="container mx-auto px-4 text-center">
          © {new Date().getFullYear()} Research Project Catalog. All rights reserved.
        </div>
        <div className="">
          <Image
            src="/logos/bird-logo.png"
            width={1025}
            height={500}
            alt="logo"
            className=" w-28 "
          />
          <div className="flex  space-x-2">
            <MdOutlineMail className="text-2xl text-gray-500" />
          </div>
        </div>
        <div className="flex flex-col space-y-6 ">
          <div className="pt-10 font-medium">NAVIGATION</div>
          <div className="space-y-2 text-sm font-light">
            <div>Profile</div>
            <div>Current Students</div>
            <div>Past Students</div>
            <div>Projects</div>
          </div>
        </div>
        <ModeToggle />
      </div>
    </div>);
}

export default Footer;

// <PiFacebookLogoFill className="text-2xl text-gray-500" />
// <PiYoutubeLogoFill className="text-2xl text-gray-500" />
// <PiLinkedinLogoFill className="text-2xl text-gray-500" />
//
// <div className="flex-col space-y-6 flex ">
//   <div className="pt-10 font-medium">FOR BUSINESS</div>
//   <div className="font-light space-y-4 text-sm">
//     <div>Project Management</div>
//     <div>Goal Management</div>
//     <div>Increase Productivity</div>
//     <div>Work Management</div>
//     <div>Project Planning</div>
//   </div>
// </div>
//
// <div className="flex-col space-y-6 ">
//   <div className="font-light space-y-4 text-sm">
//   </div>
// </div>
