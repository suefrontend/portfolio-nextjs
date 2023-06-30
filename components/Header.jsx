"use client";
import { useRef, useState, useEffect } from "react";

function Header() {
  const headerRef = useRef();
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    const { top } = headerRef.current.getBoundingClientRect();
    setIsFixed(top <= 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    if (window.scrollY <= 20) {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollToTop);
    return () => window.removeEventListener("scroll", handleScrollToTop);
  }, []);

  return (
    <div
      ref={headerRef}
      className={`uppercase w-full text-center ${
        isFixed
          ? "fixed top-0 bg-white shadow z-10 py-3"
          : "absolute max-lg:top-8 lg:top-24 border border-purple-600"
      } `}
    >
      <h1
        className={`tracking-wider animation ${
          isFixed ? "text-2xl" : "lg:text-3xl max-lg:text-xl"
        }`}
      >
        Kayano Oyama
      </h1>
      <span
        className={`text-pink  tracking-widest ${
          isFixed ? "text-sm" : "lg:text-lg max-lg:text-sm"
        }`}
      >
        Software Developer
      </span>
    </div>
  );
}

export default Header;
