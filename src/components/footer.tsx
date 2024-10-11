import Image from "next/image";
import { MdOutlineMail } from "react-icons/md";
import { ModeToggle } from "@/components/mode-toggle";

const Footer = () => {
  return (
    <div className=" flex lg:items-center pb-10 flex-col px-8 lg:px-0 xl:w-3/4 mx-auto 2xl:w-[55%] ">
      <div className="lg:flex  lg:space-x-32 md:px-0 pt-4">
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
        <div className="flex-col space-y-6 flex ">
          <div className="pt-10 font-medium">NAVIGATION</div>
          <div className="font-light space-y-2 text-sm">
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
