import React from "react";
import Image from "next/image";

export default function ThumbnailComponent({ src, alt, onClick, isActive }) {
  return (
    <div
      className={`relative flex-shrink-0 !w-28 h-20 sm:h-32 cursor-pointer ${
        isActive ? "border-2 border-blue-500" : ""
      }`}
      onClick={onClick}
    >
      <Image src={src} alt={alt} layout="fill" objectFit="cover" className="" />
    </div>
  );
}
