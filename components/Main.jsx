"use client";
import Image from "next/image";

function Main() {
  return (
    <>
      <Image
        src="/images/spiral.jpg"
        width={500}
        height={500}
        className="mx-auto"
        alt="Spiral"
      />
    </>
  );
}

export default Main;
