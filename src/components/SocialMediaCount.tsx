import React from "react";
import Image from "next/image";
import styles from "../styles/SocialMediaCard.module.css"
const socialMediaCount = (props:any)  =>{
    return(
        <div className={styles.smcard}>
            <Image src={props.image} alt={""}/>
            <p className={styles.count}>{props.count}</p>
            <p className={styles.type}>{props.type}</p>
        </div>
    )
}
export default socialMediaCount