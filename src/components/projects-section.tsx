import {
  PiArrowRight,
} from "react-icons/pi";
import Image from "next/image";

import { VscTools } from "react-icons/vsc";
import { RiPresentationFill } from "react-icons/ri";
import { FiCheckCircle } from "react-icons/fi";
import { VscGraph } from "react-icons/vsc";

const items = [
  {
    icon: <VscTools className="text-2xl text-red-500" />,
    name: "Ongoing Projects",
    button: (
      <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer pt-6">
        View Projects <PiArrowRight className="ml-3 text-sm " />
      </div>
    ),
    image: "/images/company-wiki-template.webp",
  },
  {
    icon: <FiCheckCircle className="text-2xl text-sky-600" />,
    name: "Completed Projects",
    button: (
      <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer pt-6">
        View Projects <PiArrowRight className="ml-3 text-sm " />
      </div>
    ),
    image: "/images/company-wiki-template.webp",
  },
  {
    icon: <RiPresentationFill className="text-2xl text-orange-500" />,
    name: "Publications and presentations",
    button: (
      <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer pt-6">
        View Publications <PiArrowRight className="ml-3 text-sm " />
      </div>
    ),
    image: "/images/company-wiki-template.webp",
  },
  {
    icon: <VscGraph className="text-2xl text-green-500" />,
    name: "Future Endeavours",
    button: (
      <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer pt-6">
        Our vision <PiArrowRight className="ml-3 text-sm " />
      </div>
    ),
    image: "/images/company-wiki-template.webp",
  },
];

const ProjectsSection = () => {
  return (
    <>
      <div className="flex flex-col pt-32 items-center justify-center">
        <div className="text-3xl xl:text-5xl font-medium justify-center items-center flex">
          Projects
        </div>
        <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer pt-6">
          Browse all projects <PiArrowRight className="ml-3 text-sm " />
        </div>
      </div>
      <div className="grid xl:grid-cols-4  md:grid-cols-1 md:row-span-1  gap-4  xl:gap-6 mt-8 px-8 md:px-16 xl:px-0 xl:w-3/4  2xl:w-[55%] mx-auto md:w-full">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-[#f6f5f4] dark:bg-[#1C1F20] p-6 rounded-xl"
          >
            <div className="flex flex-col ">
              {item.icon}
              <div className="text-lg font-medium mt-2">{item.name}</div>
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
