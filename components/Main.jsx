"use client";
import Image from "next/image";

function Main() {
  return (
    <div className="lg:h-screen mb-20">
      <Image
        src="/images/spiral.jpg"
        width={700}
        height={700}
        className="mx-auto mix-blend-darken"
        alt="Spiral"
      />
      <div className="uppercase text-center">
        <h1 className="text-3xl tracking-wider">Kayano Oyama</h1>
        <span className="text-pink text-lg tracking-widest">
          Software Developer
        </span>
      </div>
    </div>
  );
}

export default Main;
