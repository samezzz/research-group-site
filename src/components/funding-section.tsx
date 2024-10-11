import Image from 'next/image';
import React from 'react';

const FundingSection = () => {
  return (
    <div className="xl:pt-32 pt-24 relative flex justify-center items-center flex-col border-b mb-8">
      <div className="xl:text-5xl text-3xl 2xl:w-3/5 w-3/5 font-medium xl:w-1/3 mx-auto text-center">
        Funding
      </div>
      <div className="items-center flex justify-center flex-col">
        <Image
          src="/logos/logoipsum-327.svg"
          alt="Canva logo"
          width={1000}
          height={1000}
          className="pt-2 xl:pt-0  w-10 xl:w-14 "
        />
        <div className=" text-center mb-24">
          <div className="text-sm  font-medium pt-4">
            Our research is made possible through the generous support of our funding partners. These contributions enable us to invest in new technologies, support talented students, and expand the scope of our projects.
          </div>
          <div className="text-sm">
            We are grateful to the organizations that believe in our vision and are helping us shape the future of healthcare.</div>
        </div>
      </div>
    </div>
  );
}

export default FundingSection;
//
// <Image
//   src="/assets/canva-logo.png"
//   alt="Canva logo"
//   width={1000}
//   height={1000}
//   className="pt-10 xl:pt-10
//           xl:w-1/3
//           w-4/5
//           "
// />
//
// <div className={cn(
//   'flex items-center justify-center text-xl xl:text-2xl pt-10 pb-4  xl:py-10 px-8  text-center  w-4/5 ',
//   font.className
// )}>
//   &quot;We got rid of nearly a dozen different tools because of what Bird does for us.&quot;
// </div>
//
//
