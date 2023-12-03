import React, { useState } from "react";
import ho from "../assets/calender_img1.png";
import styles2 from "../styles/EventDate.module.css";
import bg from "../assets/sec2bg.png";
import icon from "../assets/calendarimg.png";
import subbar from "../assets/subeventbar.png";
import Calendar from "react-calendar";
import Image from "next/image";
export default function EventDate() {
    const [value, onChange] = useState(new Date());
    const data = [
        { date: "April 03, 2023", event: "Smart GITAM Hackathon" },
        {
            date: "Coming Soon",
            event: "Recruitments Bengaluru Core Team",
        },
        {
            date: "Coming Soon",
            event: "Game Development Workshop",
        },
    ];
    return (
        <div className={styles2.calSec}>
            <div className={styles2.calMain}>
                <div className={styles2.calHeader}>
                    <div>
                        <h1>Our Event Calendar</h1>
                    </div>
                    <div>
                        <Image src={ho} alt="horn-logo" />
                    </div>
                </div>
                <div className={styles2.eventsSec}>
                    <div className={styles2.events}>
                        {data.map((item, index) => {
                            return (
                                <div key={index} className={styles2.eventbar1}>
                                    <Image src={subbar} alt="logo" className={styles2.subbar} />
                                    <Image
                                        src={icon}
                                        alt="calendar-logo"
                                        className={styles2.callogo}
                                    />
                                    <div className={styles2.des}>
                                        <h4>{item.date}</h4>
                                        <p>{item.event}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles2.cal}>
                        <Calendar
                            onChange={onChange}
                            value={value}
                            nextLabel={null}
                            next2Label={null}
                            prevLabel={null}
                            prev2Label={null}
                        />
                    </div>
                </div>
            </div>
            {/* <div className={styles2.caldesign}>
                <Image src={bg} alt='bg2'/>
            </div> */}
        </div>
    );
}
