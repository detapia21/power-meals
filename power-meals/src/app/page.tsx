import Image from "next/image";
import styles from "./page.module.css";
import Services from "./Services/page";
import AboutUs from "./AboutUs/page";
import Contact from "./Contact/page";


export default function Home() {
  return (
    <>
      <AboutUs/>
      <Services/>
      <Contact/>
    </>
  );
}
