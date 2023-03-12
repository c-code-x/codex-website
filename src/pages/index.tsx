import { NextPage } from "next";
import React, {useEffect} from "react";
import styles from '../styles/Body.module.css'
import exp from "constants";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import Glimpse from "@/components/Glimpse";
import Resources from "@/components/Resources";
import FAQ from "@/components/FAQ";
import Memories from "@/components/memories";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
const Home:NextPage=()=>{
    return (
        <div className={styles.body}>
            <Head>
                <title>Codex</title>

            </Head>
            <NavBar/>
            <Glimpse/>
            <Resources/>
            <FAQ/>
            <Memories/>
            <Feedback/>
            <Footer/>
        </div>
    )
}

export default Home