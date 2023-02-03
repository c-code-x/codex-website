import React,{useState} from 'react';
import ho from '../assests/calender_img1.png';
import styles2 from '../styles/EventDate.module.css';
import bg from '../assests/sec2bg.png';
import icon from '../assests/calendarimg.png';
import subbar from '../assests/subeventbar.png';
import Calendar from 'react-calendar'
import Image from "next/image";
export default function EventDate(){
    const [value, onChange] = useState(new Date());
    const data=[{date:"December 15,2022",
        event:"c programming workshop"},{
        date:"December 15,2022",
        event:"c++ workshop"
    },{
        date:"December 15,2022",
        event:"python workshop workshop"
    }]
    console.log(data);
    return(
        <div className={styles2.calSec}>
            <div className={styles2.calMain}>
                <div className={styles2.calHeader}>
                    <div><h1>Our Event Calendar</h1></div>
                    <div><Image src={ho} alt='horn-logo' /></div>
                </div>
                <div className={styles2.eventsSec}>
                    <div className={styles2.events}>
                        {
                            data.map((item)=>{
                                return(
                                    <div className={styles2.eventbar1}>
                                        <Image src={subbar} alt='logo' className='subbar'/>
                                        <Image src={icon} alt='calendar-logo'  className='callogo'/>
                                        <div className='des'>
                                            <h4>{item.date}</h4>
                                            <p>{item.event}</p>
                                        </div>
                                    </div>);
                            })
                        }
                    </div>
                    <div className={styles2.cal}>
                        <Calendar onChange={onChange} value={value}  nextLabel={null} next2Label={null} prevLabel={null} prev2Label={null} />
                    </div>
                </div>
            </div>
            <div className={styles2.caldesign}>
                <Image src={bg} alt='bg2'/>
            </div>
        </div>
    )
}