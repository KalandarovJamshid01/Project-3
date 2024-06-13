import CompanyRotateGallery from "@/components/companyRotate";
import MainSectionBanner from "@/components/mainHeader";

export default function Page() {
  return (
    <div className="containerr">
      <main>
        <MainSectionBanner
          title={"청주지붕공사"}
          text={"30년 경력의 지붕장인 청주지붕공사 입니다."}
          desc={"지붕개량/칼라강판/기와/슁글/징크 시공전문"}
          img="/images/mainBanner2.png"
        />
      </main>
      <CompanyRotateGallery />
    </div>
  );
}
