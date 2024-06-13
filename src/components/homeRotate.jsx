import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const HomeRotateGallery = () => {
  return (
    <div className="homeRotateGalery w-full h-[1600px] relative overflow-hidden mb-10">
      <div className="homeRotateGalery__info w-full relative flex items-center flex-col max-w-[730px] text-center mx-auto my-0 top-[150px]">
        <h2 className="homeRotateGalery__infoTitle font-gmarket text-[var(--Colors-Gray-700,#404040)] text-2xl not-italic font-bold leading-[28.8px]">
          지붕공사의 달인 청주지붕공사 입니다.
        </h2>
        <p className="homeRotateGalery__infoSubTitle font-gmarket text-[var(--Colors-Gray-700,#404040)] text-center text-base not-italic font-medium leading-[20.8px]">
          지붕개량/칼라강판/기와/슁글/징크 시공전문
        </p>

        <p className="homeRotateGalery__infoText1 font-gmarket text-[var(--Colors-Gray-700,#404040)] max-w-[600px] mx-4 lg:mx-0 lg:max-w-max text-center text-base not-italic font-medium leading-[20.8px] mt-[29px]">
          신속!정확!확실한 서비스! 청주지붕공사에 맡겨주세요 고객만족 100%를
          약속드립니다. 믿고 맡길 수 있는 신뢰도 최고! 청주 지붕공사를
          찾아주셔서 감사합니다. 우수한 전문기술력으로 확실한 서비스를
          책임집니다.
        </p>

        <p className="homeRotateGalery__infoText2 font-gmarket text-[var(--Colors-Gray-700,#404040)] mt-3 mx-4 lg:mx-0 lg:mt-auto max-w-[600px] lg:max-w-max text-center text-base not-italic font-medium leading-[20.8px] mt-12;">
          저희 업체는 전문장비와 전문인력을 보유하고 있으며, 최상의 서비스로
          고객 여러분의 신뢰에 보답하고자 최선을 다하고 있습니다. 또한 풍부한
          경험과 축적된 기술을 바탕으로 고객님들에게 최고의 만족도를 제공하고자
          최선을 다하고 있습니다. 항상 고객을 먼저 생각하며, 저렴한 가격에
          친절한 서비스로 고객님들께 다가설 것을 약속드립니다. 또한 시공 후에도
          A/S 처리 등 철저한 신뢰와 믿음을 드릴 것이며, 보다 지붕신기술을
          근간으로 계속하여 노력해 나갈 것을 약속드립니다. 감사합니다.
        </p>

        <button className="homeRotateGalery__infoBtn font-gmarket bg-[#ecfffa] text-[var(--Colors-Gray-700,#404040)] text-center text-[23px] sm:text-[26px] md:text-[28px] lg:text-[32px] not-italic font-medium leading-[20.8px] flex items-center justify-center gap-2 cursor-pointer mt-8 p-4">
          <p>
            <IoArrowForwardCircleOutline />
          </p>
          <p>더보기</p>
        </button>
      </div>

      <div className="homeRotateGalery__info2 absolute text-center flex flex-col items-center w-full md:w-[274px] right-0 md:right-[50px] bottom-[400px]">
        <p className="homeRotateGalery__info2Text font-gmarket text-[var(--Colors-Gray-700,#404040)] text-[26px] sm:text-[30px] md:text-[36px] lg:text-[40px] not-italic font-bold leading-[normal]">
          시공사례
        </p>

        <button className="homeRotateGalery__infoBtn font-gmarket bg-[#ecfffa] text-[var(--Colors-Gray-700,#404040)] text-center text-[23px] sm:text-[26px] md:text-[28px] lg:text-[32px] not-italic font-medium leading-[20.8px] flex items-center justify-center gap-2 cursor-pointer mt-8 p-4">
          <p>
            <IoArrowForwardCircleOutline />
          </p>
          <p>이미지 더보기</p>
        </button>
      </div>

      <div
        style={{ backgroundImage: `url("/images/Rectangle\ 10.png")` }}
        className="homeRotateGalery__back w-full h-[1500px] absolute bg-no-repeat bg-center bg-contain z-[-1] -left-20 top-0"
      />
      <div
        style={{
          backgroundImage: `url("/images/openart-image_ku34Cfoh_1717543622073_raw\ 1.png")`,
          clipPath: `polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)`,
        }}
        className="homeRotateGalery__topCenter hidden lg:block absolute w-40 h-40 bg-no-repeat bg-center bg-cover z-[-1] xl:right-[16px] right-[60px] top-[200px]"
      />
      <div
        style={{
          backgroundImage: `url('/images/mosamWindow.png')`,
          clipPath: `polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)`,
        }}
        className="homeRotateGalery__rightTop hidden md:block absolute w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] bg-no-repeat bg-center bg-cover z-[-1] right-[30px] lg:right-[64px] top-[420px]"
      />
      <div
        style={{
          backgroundImage: `url("/images/openart-image_wsOBM5Am_1717543691899_raw\ 1.png")`,
          clipPath: `polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)`,
        }}
        className="homeRotateGalery__leftTop hidden xl:block absolute w-[350px] h-[350px] bg-no-repeat bg-center bg-cover z-[-1] -left-20 top-[100px]"
      />
      <div
        style={{
          backgroundImage: `url("/images/image\ 1.png")`,
          clipPath: `polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)`,
        }}
        className="homeRotateGalery__center hidden md:block absolute w-[1000px] lg:w-[1100px] h-[1100px] left-[-400px] bg-no-repeat bg-center bg-cover z-[-1] bottom-0"
      />
      <div
        style={{
          backgroundImage: `url('/images/mosa7jr7M7.png')`,
          clipPath: `polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)`,
        }}
        className="homeRotateGalery__img1 hidden lg:block w-[310px] absolute h-[310px] bg-no-repeat bg-center bg-cover z-[-1] left-[480px] bottom-[380px]"
      />
      <div
        style={{
          backgroundImage: `url('/images/mosaGo3ZBU.png')`,
          clipPath: `polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)`,
        }}
        className="homeRotateGalery__img2 hidden lg:block w-[310px] absolute h-[310px] bg-no-repeat bg-center bg-cover z-[-1] left-[180px] lg:left-[200px] bottom-[140px] lg:bottom-[120px]"
      />
      <div
        style={{
          backgroundImage: `url("/images/mosahEqFwM 1.png")`,
          clipPath: `polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)`,
        }}
        className="homeRotateGalery__img3 hidden lg:block w-[280px] lg:w-[310px] absolute h-[280px] lg:h-[310px] bg-no-repeat bg-center bg-cover z-[-1] left-[300px] bottom-[550px]"
      />

      <div className="homeRotateGalery__topRec  bg-[#c9d3d6] absolute top-[-300px] right-[-200px] w-[471.971px] h-[466.566px] -rotate-45 shrink-0 opacity-[0.49] z-[-1]" />
    </div>
  );
};

export default HomeRotateGallery;
