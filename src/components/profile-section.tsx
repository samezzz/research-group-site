import Image from "next/image";
import { PiArrowRight } from "react-icons/pi";


const ProfileSection = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-20 xl:py-24">
        <div className="text-center text-4xl font-medium  xl:text-5xl">
          Profile
        </div>
        <div className="px-10 py-4  text-center xl:w-1/3">
          Hi, I&apos;m Dr. Adjei, a passionate Biomedical Engineer and researcher with a strong interest in AI in healthcare and biomedical signal processing. My journey in academia has led me to explore innovative technologies that bridge the gap between engineering and healthcare solutions. Through my research, I aim to contribute to the advancement of medical technology and improve patient care, focusing on hypertensive conditions and personalized treatment systems. I&apos;m also a dedicated mentor to students, guiding them as they explore the world of biomedical engineering.
        </div>
        <div className="flex items-center text-sky-500 hover:cursor-pointer hover:underline">
          Contact me <PiArrowRight className="ml-3 text-sm " />
        </div>

        <Image
          src="/assets/MessyDoodle.svg"
          alt="hero image"
          width={1000}
          height={1000}
          className="w-80 pt-10"
        />

      </div>
    </>

  );
}

export default ProfileSection;
