"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import MainSectionBanner from "@/components/mainHeader";
import ModalComponent from "@/components/modal";
import ImageCardComponent from "@/components/ImageCard";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
export default function Page() {
  const [images, setImages] = useState([
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [page, setPage] = useState(1)
  const pageSize = 10;
  const query = "my_website_images";

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`/api/images?page=${page}&pageSize=${pageSize}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setImages(data);
        console.log("Fetched images:", data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchImages();
  }, [page, pageSize, query]);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="containerr">
      <main>
        <MainSectionBanner
          title={"청주지붕공사"}
          text={"30년 경력의 지붕장인 청주지붕공사 입니다."}
          desc={"지붕개량/칼라강판/기와/슁글/징크 시공전문"}
          img="/images/mainBanner.png"
        />
      </main>

      <div className={"mt-20 mb-10"}>
        <h1
          className={
            "lg:text-3xl md:text-[28px] sm:text-[26px] text-[24px] font-bold text-center"
          }
        >
          시공사례
        </h1>
      </div>
      <div className="relative h-64 md:h-96 mx-5">
        {images.length > 2 && (
          <Image
            src={images[0].img_url || "/images/map.png"}
            alt={images[0].title}
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
        )}
      </div>
      <div
        className={
          "grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-12 my-10 mx-5"
        }
      >
        {images.map((image, index) => (
          <ImageCardComponent
            key={index}
            src={image.img_url}
            title={image.title}
            onClick={() => openModal(index)}
          />
        ))}
      </div>
      <div className="pagination flex flex-row justify-center items-center gap-5 mb-10">
        <div className="left-icon">
          <BsArrowLeft
            size={20}
            onClick={()=>{setPage(page-1)}}
            className="w-[40px] md:w-[45px] lg:w-[50px] h-[40px] md:h-[45px] lg:h-[50px] border-2 rounded-[30px] border-black p-[5px] md:p-[8px] lg:p-[10px] cursor-pointer"
          />
        </div>
        <div className="current-page">
          <h4 className="text-[16px] md:text-[18px] lg:text-[20px] font-medium">
            {page}/10
          </h4>
        </div>
        <div className="right-icon">
          <BsArrowRight
            size={20}
            onClick={()=>{setPage(page+1)}}
            className="w-[40px] md:w-[45px] lg:w-[50px] h-[40px] md:h-[45px] lg:h-[50px] border-2 rounded-[30px] border-black p-[5px] md:p-[8px] lg:p-[10px] cursor-pointer"
          />
        </div>
      </div>
      {isModalOpen && (
        <ModalComponent
          images={images}
          initialIndex={selectedImageIndex}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
