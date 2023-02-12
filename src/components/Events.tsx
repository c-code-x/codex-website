import React from "react";
import styles from "../styles/Events.module.css"
import Image from "next/image";
import image1 from "../assests/posters/c-programming.jpg"

const Events = (props:any) =>{

    return(
        <div className={styles.container}>
            <div className={styles.cropped}>
                <Image src={props.image} alt={""}/>
            </div>
            <div className={styles.title}>
                <p>{props.title}</p>
            </div>
            <div className={styles.content}>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Events