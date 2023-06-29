"use client";
import Image from "next/image";

function Main() {
  return (
    <div className="w-full h-auto border border-black max-lg:pt-28 lg:pt-60 lg:pb-16 max-lg:pb-12">
      <div className="mx-auto relative max-md:h-60 max-lg:h-72 lg:h-96 border border-green-600">
        <Image
          src="/images/spiral-new.png"
          // sizes="(max-width: 768px) 50vw"
          fill
          className="mx-auto mix-blend-darken border border-blue-600 object-contain"
          alt="Spiral"
        />
      </div>
    </div>
  );
}

export default Main;
