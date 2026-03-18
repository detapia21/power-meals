import Image from "next/image";
import styles from "./page.module.css";
import Services from "./Services/page";
import AboutUs from "./AboutUs/page";
import Contact from "./Contact/page";
import Hero from "./Hero/page";
import Benefits from "./Benefits/page";
import Plans from "./Plans/page";
import Menu from "./Menu/page";

export default function Home() {
  return (
    <>
      <Hero/>
      <AboutUs/>
      <Benefits/>
      <Plans/>
      <Menu/>
      <Services/>
      <Contact/>  
    </>
  );
}
