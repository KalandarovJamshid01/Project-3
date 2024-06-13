import React from "react";

import NavbarComponent from "./navbar";

const MainSectionBanner = ({ title, text, desc, img }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
      }}
      className="mainSectionBanner w-full h-[90vh] relative bg-center bg-no-repeat bg-cover flex flex-col justify-center text-center items-center text-white pt-[84px]"
    >
      <NavbarComponent />

      <h2 className="mainBannerTitle w-[300px] sm:w-auto text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold text-white font-gmarket">
        {title}
      </h2>
      <p className="mainBannerText w-[300px] sm:w-auto text-[23px] sm:text-[25px] md:text-[28px] lg:text-[32px] text-white font-medium font-gmarket leading-10">
        {text}
      </p>
      <p className="mainBannerDesc w-[300px] sm:w-auto text-[13px] sm:text-[14px] lg:text-[16px] mt-[8px] text-white font-medium font-gmarket leading-5">
        {desc}
      </p>
    </div>
  );
};

export default MainSectionBanner;
