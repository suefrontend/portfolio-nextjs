"use client";
import Image from "next/image";

function Main() {
  return (
<<<<<<< HEAD
    <div className="w-full h-auto border border-black max-lg:pt-28 lg:pt-60 lg:pb-16 max-lg:pb-12">
      <div className="mx-auto relative max-md:h-60 max-lg:h-72 lg:h-96 border border-green-600">
        <Image
          src="/images/spiral-new.png"
          // sizes="(max-width: 768px) 50vw"
          fill
          className="mx-auto mix-blend-darken border border-blue-600 object-contain"
          alt="Spiral"
        />
=======
    <div className="h-screen">
      <Image
        src="/images/spiral.jpg"
        width={700}
        height={700}
        className="mx-auto mix-blend-darken"
        alt="Spiral"
      />
      <div className="uppercase text-center ">
        <h1 className="text-3xl tracking-wider">Kayano Oyama</h1>
        <span className="text-pink text-lg tracking-widest">
          Software Developer
        </span>
>>>>>>> 557af377ff4de47387b9efd5be834ce1ce5e720c
      </div>
    </div>
  );
}

export default Main;
