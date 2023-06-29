<<<<<<< HEAD
"use client";
import { useEffect } from "react";
=======
>>>>>>> 557af377ff4de47387b9efd5be834ce1ce5e720c
import Image from "next/image";
import Main from "@components/Main";
import Highlight from "@components/Highlight";
import ProjectList from "@components/ProjectList";
import About from "@components/About";
import Contact from "@components/Contact";
import Footer from "@components/Footer";
<<<<<<< HEAD
import Nav from "@components/Nav";
=======
>>>>>>> 557af377ff4de47387b9efd5be834ce1ce5e720c

export default function Home() {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      console.log("scrolled");
    });
  });

  return (
<<<<<<< HEAD
    <>
      <Nav />
=======
    <div className="app">
      {/* <Image src="/images/grid.svg" alt="background image" fill /> */}
>>>>>>> 557af377ff4de47387b9efd5be834ce1ce5e720c
      <Main />
      <Highlight />
      <ProjectList />
      <About />
      <Contact />
      <Footer />
<<<<<<< HEAD
    </>
=======
    </div>
>>>>>>> 557af377ff4de47387b9efd5be834ce1ce5e720c
  );
}
