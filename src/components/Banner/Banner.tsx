import React from "react";
import Image from "next/image";
export default function Banner() {
  return (
    <div className="banner-container relative w-full h-[300px] overflow-hidden">
      <Image
        src="/globe.svg"
        alt="Royal Tacos Pizza Valence"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
