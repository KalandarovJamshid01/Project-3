"use client";
import React, { useState } from "react";
import Image from "next/image";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import ThumbnailComponent from "./thumbail";

export default function ModalComponent({ images, initialIndex, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handlePrev = () =>
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  const handleNext = () => setCurrentIndex((currentIndex + 1) % images.length);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative bg-white px-3 pt-16 max-w-6xl w-full flex justify-center ">
        <div className={"w-full"}>
          <div className={"w-full flex justify-end absolute top-0 right-0"}>
            <button
              onClick={onClose}
              className="w-28 h-11 flex items-center justify-center text-gray-600 hover:text-gray-800 bg-gray-200"
            >
              닫기 X
            </button>
          </div>
          <div className={"flex sm:flex-row flex-col w-full gap-12 mb-4"}>
            <div className="relative w-full lg:w-[592px] h-48 sm:h-72 lg:h-[577px] md:h-96">
              <Image
                src={images[currentIndex].src || "/images/map.png"}
                alt={images[currentIndex].alt}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={"w-1/2 h-auto flex flex-col justify-between"}>
              <div>
                <h3 className={"text-2xl font-bold"}>
                  {images[currentIndex].title}
                </h3>
                <p className={"text-base font-normal"}>
                  {images[currentIndex].description}
                </p>
              </div>
              <div className="flex space-x-4 overflow-x-scroll">
                {images.map((image, index) => (
                  <ThumbnailComponent
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    onClick={() => setCurrentIndex(index)}
                    isActive={index === currentIndex}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className={"flex relative h-14"}>
            <button
              onClick={handlePrev}
              className={
                "absolute left-0 top-0 md:top-auto md:bottom-0 w-[50%]"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="590"
                height="54"
                viewBox="0 0 590 54"
                fill="none"
                className=" hidden md:block md:w-[400px] lg:w-auto"
              >
                <path d="M0 0H590L562.936 54H0V0Z" fill="#D4D4D4" />
              </svg>
              <div
                className={
                  "w-10 h-10 border bg-black md:bg-transparent border-b-white text-white rounded-full flex " +
                  "items-center justify-center absolute top-2 left-1/3"
                }
              >
                <BsArrowLeft size={20} />
              </div>
            </button>
            <button
              onClick={handleNext}
              className={"absolute right-5 top-0 md:top-auto md:bottom-0"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="589"
                height="54"
                viewBox="0 0 589 54"
                fill="none"
                className="hidden md:block md:w-[400px] lg:w-auto"
              >
                <path
                  d="M589 54H0L27.0183 -3.8147e-06H589V54Z"
                  fill="#A3A3A3"
                />
              </svg>
              <div
                className={
                  "w-10 h-10 bg-black md:bg-transparent border border-b-white text-white rounded-full flex " +
                  "items-center justify-center absolute top-2 right-1/3"
                }
              >
                <BsArrowRight size={20} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
