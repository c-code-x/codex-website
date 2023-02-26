
import memory from "../assests/memories/mem_event1.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import styles from '../styles/events.module.css'
import Glimpse from "@/components/Glimpse";
import EventDate from "@/components/Calender";
import Event_curosel from "@/components/Eventspo_carousel";
const Eventspage =()=>{
  return(
    <div className={styles.events_page}>
        <NavBar/>
            <div className={styles.ev_curosel}>
            <Carousel className={styles.carousel_events}  autoPlay infiniteLoop showIndicators={false} showArrows={false} showStatus={false}  interval={3000}>
                <div className={styles.images_events_carousel}>
                    <Image className={styles.img_evnts} src={memory} alt=""/>
                </div><div className={styles.images_events_carousel}>
                    <Image className={styles.img_evnts} src={memory} alt=""/>
                </div><div className={styles.images_events_carousel}>
                    <Image className={styles.img_evnts} src={memory} alt=""/>
                </div>          
            </Carousel>
            </div>
            <Event_curosel/>
            <EventDate/>
        <Footer/>
    </div>
  );
};
export default Eventspage;