import { NextPage } from "next";
import React, {useEffect} from "react";
import LandingPage from "@/pages/LandingPage";
import NavBar from "@/components/NavBar";
import styles from '../styles/Body.module.css'
import exp from "constants";
const Home:NextPage=()=>{
    return (
        <div className={styles.body}>
           <LandingPage/>
        </div>
    )
}

export default Home