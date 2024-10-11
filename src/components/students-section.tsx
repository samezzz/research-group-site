import Image from 'next/image';
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
    <div className="flex flex-col items-center justify-center pt-16">
      <div className="w-3/4 text-center text-4xl font-medium xl:text-5xl">
        Students
      </div>
      <div className="px-8 py-4 text-center xl:w-1/4">
        Our lab has been fortunate to work with a diverse group of talented students who have contributed to our research goals.
      </div>
      <div className="flex items-center text-sky-500 hover:cursor-pointer hover:underline">
        View Students <PiArrowRight className="ml-3 text-sm " />
      </div>

      <div className='mx-auto grid  grid-cols-3 items-center justify-center  gap-10 px-10 pt-10 text-center md:px-20 lg:w-1/2 lg:px-0 xl:grid-cols-4'>
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
