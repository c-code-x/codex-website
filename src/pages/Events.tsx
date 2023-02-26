
import memory from "../assests/memories/mem_event1.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import styles from '../styles/event.module.css'
import Glimpse from "@/components/Glimpse";
import EventDate from "@/components/Calender";
import Event_curosel from "@/components/Eventspo_carousel";
const Eventspage =()=>{
  return(
    <div className={styles.events_page}>
        <NavBar/>
            <Image className={styles.top_event_img} src={memory} alt=""/>
            <Event_curosel/>
            <EventDate/>
        <Footer/>
    </div>
  );
};
export default Eventspage;