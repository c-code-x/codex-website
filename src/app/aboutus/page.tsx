"use client";
import React from "react";
import styles from "../../styles/AboutUs.module.css";
import Image from "next/image";
import imagei from "../../assets/instagram.png";
import imaged from "../../assets/discordlogo.png";
import image1 from "../../assets/image 4.png";
import image2 from "../../assets/Cones.jpg";
import SocialMediaCount from "@/components/SocialMediaCount";
import imagey from "../../assets/youtube.png";
import abtmem from "../../assets/memories/abtmem.jpg";
import Link from "next/link";
import YoutubeAPI from "@/api/Youtube";
const aboutus = () => {
    const subscribers = YoutubeAPI();
    return (
        <div className={styles.abtpagecontainer}>
            <div className={"flex flex-col bg-custom-gradient w-screen h-[25vh]"}>
                <div className={styles.abtheadertxt}>
                    <p>Who Are We?</p>
                </div>
            </div>
            <div className={styles.abtsubdiv1}>
                <Image className={styles.conesimg} src={image2} alt={""} />
                <div className={styles.abtsubdiv1header}>
                    <p>Our Followers Count</p>
                </div>
                <Image className={styles.guyimg} src={image1} alt={""} />
            </div>
            <div className={styles.ssmdiv}>
                <SocialMediaCount count={subscribers} type="Subscribers" image={imagey} />
                <SocialMediaCount count="600" type="Followers" image={imagei} />
                <SocialMediaCount count="550" type="members" image={imaged} />
            </div>
            <div className={styles.aboutus}>
                <div className={"flex flex-col"}>
                    <div>
                        <p className={styles.abtheading}>About Us</p>
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <div className={styles.abtcontent}>
                            CODEX is one of the most active clubs on campus and beyond and always
                            operates, keeping the needs of the student community in mind.
                            What`&apos;`s more, it never rests, ensuring you always have another
                            event to attend, another skill to develop, and another way to have a
                            great time! There are two sides to all engineering people. On one day,
                            we may want to spend all night coding, and on another, we may get the
                            urge to spend the night playing counter strike! Both these sides need to
                            be catered to. And CODEX club is the organization that does it!!! CODEX
                            club is an all-purpose organization that takes care of all your
                            computing needs. It conducts a host of technical events like workshops
                            and hackathons covering everything you could imagine, from web
                            development to cloud computing.
                        </div>
                        <div className="flex-shrink-0">
                            <Image
                                alt="mem img"
                                className={styles.abtmem}
                                src={abtmem}
                                width={300}
                                height={300}
                            />
                        </div>
                    </div>
                    <Link href={"/events"}>
                        <button className={styles.wanttojoin}>Our Events</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default aboutus;
