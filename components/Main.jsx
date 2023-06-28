"use client";
import Image from "next/image";

function Main() {
  return (
    <div className="h-screen">
      <Image
        src="/images/spiral.jpg"
        width={700}
        height={700}
        className="mx-auto"
        alt="Spiral"
      />
      <div className="uppercase text-center ">
        <h1 className="text-3xl tracking-wider">Kayano Oyama</h1>
        <span className="text-pink text-lg tracking-widest">Software Developer</span>
      </div>
    </div>
  );
}

export default Main;
