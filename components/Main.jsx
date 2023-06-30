"use client";
import Image from "next/image";

function Main() {
  return (
    <div className="w-full h-auto max-lg:pt-36 lg:pt-60 lg:pb-16 max-lg:pb-12 max-lg:px-4">
      <div className="mx-auto relative max-md:h-60 max-lg:h-72 lg:h-80">
        <Image
          src="/images/spiral-new.png"
          fill
          className="mx-auto mix-blend-darken object-contain"
          alt="Spiral"
        />
      </div>
    </div>
  );
}

export default Main;
