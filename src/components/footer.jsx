export default function FooterComponent() {
  return (
    <div className="containerr">
      <div className="footer font-gmarket w-full h-[100px] flex items-center relative justify-between text-neutral-50  text-[15px] md:text-[18px] lg:text-xl not-italic font-bold leading-[26px] text-center">
        <div
          style={{ clipPath: `polygon(0 0, 100% 0, 87% 100%, 0% 100%)` }}
          className="footerLeft bg-[#262626] w-[53.5%] h-full absolute bg-no-repeat bg-center bg-cover px-0 py-6 left-0 top-0"
        >
          <p className="footerTitle">견적신청</p>
          <p className="footerDesc">견적문의 010-7615-6737</p>
        </div>
        <div
          style={{ clipPath: `polygon(13% 0%, 100% 0, 100% 100%, 0% 100%)` }}
          className="footerRight bg-[#0D9488] w-[53.5%] h-full absolute bg-no-repeat bg-center bg-cover px-0 py-6 right-0 top-0"
        >
          <p className="footerTitle">문의하기 </p>
          <p className="footerDesc">문의상담 010-7615-6737</p>
        </div>
      </div>
    </div>
  );
}
