import React from "react";
import Map from "./map";

const CompanyRotateGallery = () => {
  return (
    <div className="companyRotateGalery w-full h-[900px] relative overflow-hidden mb-10">
      <div className="companyRotateGalery__info w-full relative flex items-center flex-col max-w-[400px] sm:max-w-[530px] md:max-w-[630px] lg:max-w-[730px] text-center mx-auto my-0 top-[150px]">
        <h2 className="companyRotateGalery__infoTitle font-gmarket text-[var(--Colors-Gray-700,#404040)] text-[18px] md:text-xl lg:text-2xl not-italic font-bold leading-[28.8px]">
          지붕공사의 달인 청주지붕공사 입니다.
        </h2>
        <p className="companyRotateGalery__infoSubTitle font-gmarket text-[var(--Colors-Gray-700,#404040)] text-center text-[13px] md:text-[14px] lg:text-base not-italic font-medium leading-[20.8px]">
          업체소개
        </p>

        <p className="companyRotateGalery__infoText1 text-[var(--Colors-Gray-700,#404040)] font-gmarket mx-4 md:mx-0 text-center text-[13px] md:text-[14px] lg:text-base not-italic font-medium leading-[20.8px] mt-[29px]">
          믿고 맡길 수 있는 신뢰도 최고! 청주 지붕공사를 찾아주셔서 감사합니다.
          OO지붕공사는 공장직영 시스템으로 운영되고 있습니다. 공장직영의 포스코
          정품자재만을 사용하여 거품을뺀 저렴한 가격에 시공 해드립니다. 우수한
          전문기술력으로 확실한 서비스를 책임집니다.
        </p>

        <p className="companyRotateGalery__infoText2 text-[var(--Colors-Gray-700,#404040)] font-gmarket mx-4 md:mx-0 text-center text-[13px] md:text-[14px] lg:text-base not-italic font-medium leading-[20.8px] mt-[48px]">
          저희 업체는 전문장비와 전문인력을 보유하고 있으며, 최상의 서비스로
          고객 여러분의 신뢰에 보답하고자 최선을 다하고 있습니다. 또한 풍부한
          경험과 축적된 기술을 바탕으로 고객님들에게 최고의 만족도를 제공하고자
          최선을 다하고 있습니다.
        </p>
        <p className="companyRotateGalery__infoText3 text-[var(--Colors-Gray-700,#404040)] mx-4 md:mx-0 font-gmarket text-center text-[13px] md:text-[14px] lg:text-base not-italic font-medium leading-[20.8px] mt-12">
          항상 고객을 먼저 생각하며, 저렴한 가격에 친절한 서비스로 고객님들께
          다가설 것을 약속드립니다. 또한 시공 후에도 A/S 처리 등 철저한 신뢰와
          믿음을 드릴 것이며, 보다 지붕신기술을 근간으로 계속하여 노력해 나갈
          것을 약속드립니다. 감사합니다.
        </p>
      </div>

      <div className="map-section mt-[11.5rem] flex justify-center flex-col items-center">
        <Map address={"1600 Amphitheatre Parkway, Mountain View, CA"} />
        <div className="text text-center max-w-[412px] font-gmarket">
          <p className="mt-4 text-[13px] md:text-[14px] mx-4 md:mx-0 lg:text-[16px] text-[#404040] font-medium">
            Lorem ipsum dolor sit amet consectetur. Placerat in iaculis nisl
            posuere egestas semper pulvinar sodales. Tristique est lacus blandit
            nulla eget sapien urna elementum.
          </p>
          <p className="mt-4 text-[13px] md:text-[14px] mx-4 md:mx-0 lg:text-[16px] text-[#404040] font-bold font-gmarket">
            견적문의전화 : 010-7615-6737
          </p>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url("/images/openart-image\_ku34Cfoh\_1717543622073\_raw\_1.png")`,
          clipPath: `polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)`,
        }}
        className="companyRotateGalery__topCenter absolute w-40 h-40 bg-no-repeat bg-center bg-cover transition-[0.3s] right-[130px] top-[327px]"
      />
      <div
        style={{
          backgroundImage: `url("/images/mosamWindow.png")`,
          clipPath: `polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)`,
        }}
        className="companyRotateGalery__rightTop hidden xl:block absolute w-[400px] h-[400px] bg-no-repeat bg-center bg-cover right-[-60px] top-[510px]"
      />
      <div
        style={{
          backgroundImage: `url("/images/openart-image\_wsOBM5Am\_1717543691899\_raw\_1.png")`,
          clipPath: `polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)`,
        }}
        className="companyRotateGalery__leftTop absolute w-[350px] h-[350px] bg-no-repeat bg-center bg-cover -left-20 top-[100px]"
      />

      <div className="companyRotateGalery__topRec bg-[#c9d3d6] absolute top-[-300px] left-[0] w-[471.971px] h-[466.566px] -rotate-45 shrink-0 opacity-[0.49] z-[-1]" />
    </div>
  );
};

export default CompanyRotateGallery;
