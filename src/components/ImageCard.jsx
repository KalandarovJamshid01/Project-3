import React from "react";
import Image from "next/image";

export default function ImageCardComponent({ src, title, onClick }) {
  return (
    <div
      className="relative overflow-hidden group max-w-xs md:max-w-md"
      onClick={onClick}
    >
      <div className="relative w-full transition-all duration-300 ease-in-out group-hover:h-2/3">
        <div className="relative h-64 md:h-96">
          <Image
            src={
              src ||
              "https://images.freeimages.com/fic/images/icons/1811/houses/128/house_yellow.png?fmt=webp&w=500"
            }
            alt={title}
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
        </div>
      </div>
      <div className="flex justify-center h-28 items-center absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 text-center p-2 transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
    </div>
  );
}
