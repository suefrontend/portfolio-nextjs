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
      className={`w-full text-center ${
        isFixed
          ? "fixed top-0 bg-white shadow z-10 py-3"
          : "absolute max-lg:top-8 lg:top-24"
      } `}
    >
      <h1
        className={`uppercase tracking-wider ${
          isFixed ? "text-xl" : "lg:text-3xl max-lg:text-2xl"
        }`}
      >
        Kayano Oyama
      </h1>
      <span
        className={`uppercase text-pink  tracking-widest ${
          isFixed ? "text-xs" : "lg:text-lg max-lg:text-sm"
        }`}
      >
        Software Developer
      </span>
    </div>
  );
}

export default Header;
