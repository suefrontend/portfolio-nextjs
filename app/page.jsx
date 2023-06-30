"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Main from "@components/Main";
import Highlight from "@components/Highlight";
import ProjectList from "@components/ProjectList";
import About from "@components/About";
import Contact from "@components/Contact";
import Footer from "@components/Footer";
import Header from "@components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Highlight />
      <ProjectList />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
