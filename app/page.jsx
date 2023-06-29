"use client";
import { useEffect } from "react";
import Image from "next/image";
import Main from "@components/Main";
import Highlight from "@components/Highlight";
import ProjectList from "@components/ProjectList";
import About from "@components/About";
import Contact from "@components/Contact";
import Footer from "@components/Footer";
import Nav from "@components/Nav";

export default function Home() {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      console.log("scrolled");
    });
  });

  return (
    <>
      <Nav />
      <Main />
      <Highlight />
      <ProjectList />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
