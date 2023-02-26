import React from "react";
import {NextPage} from "next";
import NavBar from "@/components/NavBar";
import styles from "../styles/AboutUs.module.css"
import Image from "next/image";
import imagei from "../assests/instagram.png"
import imaged from "../assests/discordlogo.png"
import image1 from "../assests/image 4.png"
import image2 from "../assests/Cones.jpg"
import SocialMediaCount from "@/components/SocialMediaCount";
import Youtube from "@/api/Youtube";
import imagey from "../assests/youtube.png"
import abtmem from "../assests/memories/abtmem.jpg"
import Footer from "@/components/Footer";
import CAT from "../assests/posters/THOR_LOVE_2.jpg"
import cpro from "../assests/posters/c-programming.jpg"
import codify from "../assests/posters/web_design_.jpg"
import snap from "../assests/snapimg.png"
import Events from "@/components/Events";
import data from "../assests/jsonFIles/eventsgridcontent.json";
import Link from "next/link";
import lights from "../assests/Lights.png"
import side1 from "../assests/Untitled-8 1.png"
import side2 from "../assests/Untitled-8 2.png"


const AboutUs : NextPage = () => {
    const details = data[0].eventnames
    const subscribers = Youtube();
    return(
        <div className={styles.abtpagecontainer}>
        <div className={styles.abtheader} >
        <div>
            <NavBar/>
        </div>
            <div className={styles.abtheadertxt}>
        <p>Who Are We?</p>
            </div>
        </div>
            <div className={styles.abtsubdiv1}>
                <div className={styles.conesimgdiv}>
                    <Image className={styles.conesimg} src={image2} alt={""}/>
                </div>
                <div className={styles.abtsubdiv2}>
                    <p className={styles.abtsubdiv1header}>Our Followers Count</p>
                    <div>
                        <Image className={styles.guyimg}  src={image1} alt={""}/>
                    </div>

                </div>
            </div>
                <div className={styles.ssmdiv}>
                    <SocialMediaCount count = {subscribers} type = "Subscribers" image = {imagey}/>
                    <SocialMediaCount count = "600" type = "Followers" image = {imagei}/>
                    <SocialMediaCount count = "550" type = "Members" image = {imaged}/>

                </div>
            <Image className={styles.side1} src={side2} alt={""}/>
            <div className={styles.aboutus}>
                <div className={styles.abtsubdiv3}>
                    <div>
                        <p className={styles.abtheading}>About Us</p>
                    </div>
                    <div>
                        <p className={styles.abtcontent}>
                            CODEX is one of the most active clubs on campus and beyond and always operates, keeping the needs of the student community in mind. What's more, it never rests, ensuring you always have another event to attend, another skill to develop, and another way to have a great time! There are two sides to all engineering people. On one day, we may want to spend all night coding, and on another, we may get the urge to spend the night playing counter strike! Both these sides need to be catered to. And CODEX club is the organization that does it!!! CODEX club is an all-purpose organization that takes care of all your computing needs. It conducts a host of technical events like workshops and hackathons covering everything you could imagine, from web development to cloud computing.
                        </p>
                    </div>
                    <div>
                        <button className={styles.wanttojoin}>Want to Join Us?</button>
                    </div>
                </div>
                <div>
                    <Image className={styles.abtmem} src={abtmem} alt={""}/>
                </div>
                <Image className={styles.side2} src={side1} alt={""}/>
            </div>
            <div className={styles.events}>
                <div className={styles.eventheader}>
                    <p>Our Events</p>
                </div>
                <div className={styles.bg}></div>
                <div className={styles.eventgrid}>
                   <Events title = {details[0].title} description = {details[0].description} image = {cpro}/>
                    <Events title = {details[1].title} description = {details[1].description} image = {CAT}/>
                    <Events title = {details[2].title} description = {details[2].description} image = {codify}/>
                    <Events title = {details[3].title} description = {details[3].description} image = {snap}/>
                </div>
                <Link href={"/Events"}><button className={styles.viewmore} >View More</button></Link>
                <Image className={styles.light} alt={""} src={lights}></Image>

            </div>
            <Footer/>
        </div>

    );
}
export default AboutUs;