"use client"
import AboutUs from "@/component/AboutUs";
import Header from "@/component/Header";
import WhyUs from "@/component/WhyUs";
import Services from "@/component/Services"
import Image from "next/image";
import styles from "./page.module.css";
import Portfolio from "@/component/Portfolio";
import Team from "@/component/Team";
import FAQ from "@/component/FAQ";
import Contact from "@/component/Contact";
import Footer from "@/component/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <AboutUs />
      <WhyUs />
      <Services />
      {/* <Portfolio /> */}
      {/* <Team /> */}
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
