import React, {useState} from "react";
import styles from '../styles/NavBar.module.css'
import logo from '../assests/logo_1.png'
import Image from "next/image";

const NavBar = () => {

    return(
        <div className= {styles.navactive}>
            <div className={styles.nav_box1}>
                <Image src={logo} alt="logo"/>
            </div>
            <div className={styles.nav_box2}>
                <p>Home</p>
                <p>About</p>
                <p>Members</p>
                <p>Resources</p>
            </div>
        </div>
    );
}
export default NavBar;