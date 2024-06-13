export default function FooterComponent() {
  return (
    <div className="container">
      <div className="footer font-gmarket w-full h-[100px] flex items-center relative justify-between text-neutral-50 text-xl not-italic font-bold leading-[26px] text-center">
        <div className="footerLeft w-[51.5%] h-full absolute bg-no-repeat bg-center bg-cover px-0 py-6 left-0 top-0">
          <p className="footerTitle">견적신청</p>
          <p className="footerDesc">견적문의 010-7615-6737</p>
        </div>
        <div className="footerRight w-[51.5%] h-full absolute bg-no-repeat bg-center bg-cover px-0 py-6 right-0 top-0">
          <p className="footerTitle">문의하기 </p>
          <p className="footerDesc">문의상담 010-7615-6737</p>
        </div>
      </div>
    </div>
  );
}
