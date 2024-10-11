import Image from 'next/image';
import React from 'react';

const FundingSection = () => {
  return (
    <div className="relative mb-8 flex flex-col items-center justify-center border-b pt-24 xl:pt-32">
      <div className="mx-auto w-3/5 text-center text-3xl font-medium xl:w-1/3 xl:text-5xl 2xl:w-3/5">
        Funding
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/logos/logoipsum-327.svg"
          alt="Canva logo"
          width={1000}
          height={1000}
          className="w-10 pt-2  xl:w-14 xl:pt-0 "
        />
        <div className=" mb-24 text-center">
          <div className="pt-4  text-sm font-medium">
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
