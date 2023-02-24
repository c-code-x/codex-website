import React, {useEffect} from "react";
import Image from "next/image";
import img from "../assests/preloaderavi.gif"
import styles from "../styles/Preloader.module.css"

const Preloader = () => {
    useEffect(() => {
        window.setTimeout(()=>{},3000)
    }, [])
    return(
        <div className={styles.preloader}>

        </div>
    )
}
export  default Preloader