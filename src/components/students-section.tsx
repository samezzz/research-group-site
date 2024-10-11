import Image from 'next/image';
import React from 'react';
import { PiArrowRight } from 'react-icons/pi';

const students = [
  { image: "/logos/logoipsum-265.svg" },
  { image: "/logos/logoipsum-222.svg" },
  { image: "/logos/logoipsum-243.svg" },
  { image: "/logos/logoipsum-258.svg" },
  { image: "/logos/logoipsum-317.svg" },
  { image: "/logos/logoipsum-289.svg" },
];

const StudentsSection = () => {
  return (
    <div className="pt-16 flex justify-center items-center flex-col">
      <div className="text-4xl w-3/4 text-center xl:text-5xl font-medium">
        Students
      </div>
      <div className="py-4 xl:w-1/4 text-center px-8">
        Our lab has been fortunate to work with a diverse group of talented students who have contributed to our research goals.
      </div>
      <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer">
        View Students <PiArrowRight className="ml-3 text-sm " />
      </div>

      <div className='grid grid-cols-3  xl:grid-cols-4 items-center justify-center  px-10 md:px-20 lg:px-0 lg:w-1/2 pt-10 gap-10 text-center mx-auto'>
        {students.map((student, index) => (
          <div key={index} className="">
            <Image
              src={student.image}
              alt="student"
              width={500}
              height={500}
              className=''
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentsSection;
