"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiPayMoney } from "react-icons/gi";
import {
  PiArrowRight,
  PiTargetLight,
} from "react-icons/pi";
import { useMediaQuery } from "react-responsive";

const tabs = [
  {
    icon: (
      <CgProfile className="mr-2 rounded-md bg-purple-100 p-1 text-3xl text-purple-600" />
    ),
    name: "Profile",
    feature: "Now with Q&A",
    description: "A researcher with a strong interest in AI in healthcare...",
    more: (
      <div className="flex items-center text-purple-600">
        Read more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),
    image: "/assets/GroovyDoodle.svg",
  },
  {
    icon: (
      <FaPeopleGroup className="mr-2 rounded-md bg-red-100 p-1 text-3xl text-red-600" />
    ),
    name: "Students",
    description: "Diverse group of talented students who have contributed...",
    more: (
      <div className="flex items-center text-red-600">
        Read more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),
    image: "/assets/PlantDoodle.svg",
  },

  {
    icon: (
      <PiTargetLight className="mr-2 rounded-md bg-blue-100 p-1 text-3xl text-blue-600" />
    ),
    name: "Projects",
    description: "Actively engaged in cutting-edge research projects that aim...",
    more: (
      <div className="flex items-center text-blue-600">
        Read more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),

    image: "/assets/CoffeeDoddle.svg",
  },
  {
    icon: (
      <GiPayMoney className="mr-2 rounded-md bg-yellow-100 p-1 text-3xl text-yellow-600" />
    ),
    name: "Funding",
    description: "Our research is made possible through the generous support..",
    more: (
      <div className="flex items-center text-yellow-600">
        Read more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),

    image: "/assets/RunningDoodle.svg",
  },
];

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });


  return (

    <div className="flex flex-col md:items-center ">
      <div
        className="
          flex
          justify-center
          px-8
          pt-6
          text-center
          text-5xl
          font-medium
          md:w-2/3
          lg:px-0
          xl:w-1/2
          xl:pt-14
          xl:text-6xl
          xl:font-medium
          2xl:w-1/3
          "
      >
        Innovating Healthcare Through Engineering
      </div>

      <p
        className="
            mx-auto
            w-2/3
            pt-4
            text-center
            text-2xl
            "
      >
        Pioneering research that transforms how we understand and treat complex medical conditions.
      </p>

      <div className="flex items-center justify-center gap-4 pt-6">
        <Link href="/contact">
          <Button className="bg-black py-1 hover:bg-[#070E21]">
            <div className="flex items-center justify-center">
              <div className="text-lg text-white">Reach out</div>
              <div>
                <PiArrowRight className="ml-2 text-white" />
              </div>
            </div>
          </Button>
        </Link>
      </div>

      <div className="items-center justify-center pt-10 xl:pt-20">
        <Image
          src="/assets/ReadingSideDoodle.svg"
          alt="hero image"
          width={1000}
          height={1000}
          className="mx-auto flex w-60 items-center justify-center xl:w-80"
        />
      </div>
      {isSmallScreen ? (
        <div className="px-8">
          <div className="mt-8 grid   grid-cols-4  gap-4  md:row-span-1 xl:gap-6   xl:px-0  ">
            {tabs.map((tab) => (
              <motion.div
                key={tab.name}
                className={`
              flex
            cursor-pointer
              p-1


                md:p-8

                ${activeTab.name === tab.name
                    ? "flex items-center justify-center rounded-md border-gray-200 bg-[#f6f5f4] p-1 dark:bg-[#1C1F20] md:rounded-xl md:border "
                    : "items-center justify-center rounded-md p-1 hover:bg-[#eae7e7] md:bg-[#f6f5f4] md:dark:bg-[#1C1F20] xl:rounded-xl"
                  } `
                }

                onClick={() => setActiveTab(tab)}
              >
                <div className="mx-auto flex   flex-col items-center md:justify-center">
                  <div className="hidden text-4xl md:flex">{tab.icon}</div>
                  <div className="mt-1 text-sm  font-medium xl:text-lg">
                    {tab.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Display content based on the active tab */}
          <div className="w-full pt-6   md:px-16 md:py-10 lg:px-16  xl:px-0 ">
            {activeTab && (
              <div className=" flex flex-col items-center justify-center  ">
                <Image
                  src={activeTab.image}
                  width={1025}
                  height={500}
                  alt="logo"
                  className="
                w-full
             rounded-xl
             border
             p-20
             xl:p-40


                "
                />
              </div>
            )}
          </div>
        </div>




      ) : (
        <div className="flex  w-4/5 items-center justify-between gap-4 hover:cursor-pointer xl:w-3/4 xl:space-x-4 2xl:w-[55%]">
          {tabs.map((tab) => (
            <motion.div
              key={tab.name}
              className={`
                h-36
                w-60
                justify-center
                space-x-4
                sm:my-10

                xl:my-0
                xl:flex
                xl:pt-4
                ${activeTab === tab
                  ? "rounded-xl border pt-2"
                  : "m rounded-xl bg-[#f6f5f4]  pt-2 shadow-md dark:bg-[#1C1F20]"
                }
              `}
              onMouseEnter={() => setActiveTab(tab)}
            >
              <div className="px-4">
                <div className="flex items-center">
                  <div>{tab.icon}</div>
                  <div className="text-2xl font-medium">{tab.name}</div>

                  {/* Render feature tag only for "AI" tab */}
                  {tab.name === "AI" && (
                    <div className="ml-2 rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-600">
                      {tab.feature}
                    </div>
                  )}
                </div>

                <motion.div
                  className="flex flex-col text-sm"
                  initial={{ y: 0 }}
                  animate={{ y: activeTab === tab ? 10 : 25 }}
                  transition={{ duration: 0.2 }}
                >
                  <div>
                    {/* Only animate the description */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {tab.description}
                    </motion.div>
                  </div>

                  {/* Conditional rendering for "Read more" link */}
                  {activeTab === tab && (
                    <div className="mt-2 text-sm">{tab.more}</div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>


      )}

      {/* Display content based on the active tab */}
      <div className="hidden px-8 py-10 md:flex md:px-0 lg:w-3/4 2xl:w-[55%]">
        {activeTab && (
          <div className=" w-full  items-center justify-center space-x-6 hover:cursor-pointer md:flex">
            <Image
              src={activeTab.image}
              width={500}
              height={500}
              alt="logo"
              className="
                w-full
                rounded-xl
                bg-[#f6f5f4]
                p-20
                shadow-md
                dark:bg-[#1C1F20]
                xl:p-40
        "
            />
          </div>
        )}
      </div>
    </div>

  );
};

export default HeroSection;
