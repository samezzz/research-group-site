import Image from "next/image";
import {
  PiArrowRight,
} from "react-icons/pi";

import { FiCheckCircle } from "react-icons/fi";
import { RiPresentationFill } from "react-icons/ri";
import { VscGraph, VscTools } from "react-icons/vsc";

const items = [
  {
    icon: <VscTools className="text-2xl text-red-500" />,
    name: "Ongoing Projects",
    button: (
      <div className="flex items-center pt-6 text-sky-500 hover:cursor-pointer hover:underline">
        View Projects <PiArrowRight className="ml-3 text-sm " />
      </div>
    ),
    image: "/images/company-wiki-template.webp",
  },
  {
    icon: <FiCheckCircle className="text-2xl text-sky-600" />,
    name: "Completed Projects",
    button: (
      <div className="flex items-center pt-6 text-sky-500 hover:cursor-pointer hover:underline">
        View Projects <PiArrowRight className="ml-3 text-sm " />
      </div>
    ),
    image: "/images/company-wiki-template.webp",
  },
  {
    icon: <RiPresentationFill className="text-2xl text-orange-500" />,
    name: "Publications and presentations",
    button: (
      <div className="flex items-center pt-6 text-sky-500 hover:cursor-pointer hover:underline">
        View Publications <PiArrowRight className="ml-3 text-sm " />
      </div>
    ),
    image: "/images/company-wiki-template.webp",
  },
  {
    icon: <VscGraph className="text-2xl text-green-500" />,
    name: "Future Endeavours",
    button: (
      <div className="flex items-center pt-6 text-sky-500 hover:cursor-pointer hover:underline">
        Our vision <PiArrowRight className="ml-3 text-sm " />
      </div>
    ),
    image: "/images/company-wiki-template.webp",
  },
];

const ProjectsSection = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-32">
        <div className="flex items-center justify-center text-3xl font-medium xl:text-5xl">
          Projects
        </div>
        <div className="flex items-center pt-6 text-sky-500 hover:cursor-pointer hover:underline">
          Browse all projects <PiArrowRight className="ml-3 text-sm " />
        </div>
      </div>
      <div className="mx-auto mt-8  grid gap-4  px-8  md:row-span-1 md:w-full md:grid-cols-1 md:px-16 xl:w-3/4 xl:grid-cols-4  xl:gap-6 xl:px-0 2xl:w-[55%]">
        {items.map((item, index) => (
          <div
            key={index}
            className="rounded-xl bg-[#f6f5f4] p-6 dark:bg-[#1C1F20]"
          >
            <div className="flex flex-col ">
              {item.icon}
              <div className="mt-2 text-lg font-medium">{item.name}</div>
              {item.button}
            </div>
            {item.image && (
              <div
                className="flex-col justify-end"
              >
                <Image
                  src={item.image}
                  alt={`${item.name} Image`}
                  width={1000}
                  height={1000}
                  className="
                  mt-10
             w-96
             rounded-xl
                  "
                />
              </div>
            )}
          </div>
        ))}
      </div >
    </>
  );
};

export default ProjectsSection;
