import { PiArrowRight } from "react-icons/pi";
import Image from "next/image";


const ProfileSection = () => {
  return (
    <>
      <div className="py-20 xl:py-24 flex justify-center items-center flex-col">
        <div className="text-4xl xl:text-5xl font-medium  text-center">
          Profile
        </div>
        <div className="py-4 xl:w-1/3  text-center px-10">
          Hi, I'm Dr. Adjei, a passionate Biomedical Engineer and researcher with a strong interest in AI in healthcare and biomedical signal processing. My journey in academia has led me to explore innovative technologies that bridge the gap between engineering and healthcare solutions. Through my research, I aim to contribute to the advancement of medical technology and improve patient care, focusing on hypertensive conditions and personalized treatment systems. I'm also a dedicated mentor to students, guiding them as they explore the world of biomedical engineering.
        </div>
        <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer">
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
