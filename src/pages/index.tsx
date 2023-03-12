import { NextPage } from "next";
import React, { useEffect } from "react";
import styles from "../styles/Body.module.css";
import exp from "constants";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import Glimpse from "@/components/Glimpse";
import Resources from "@/components/Resources";
import FAQ from "@/components/FAQ";
import Memories from "@/components/memories";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
const Home: NextPage = () => {
    return (
        <div className={styles.body}>
            <Head>
                <title>Codex</title>
                <meta name="title" content="Codex - Club" />
                <meta
                    name="description"
                    content="CODEX is a student-run organization at the University of GITAM that aims to provide students with the resources and opportunities to learn about computer science and software development. We learn, we build, and we share!"
                />
                <meta
                    name="keywords"
                    content="codex, gitam, codex website, technical club, programming, coding club, gitam club, club, student club, active student gitam student clubs,  technology"
                />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="3 days" />
                <meta name="author" content="CodeX - CoreTeam" />
                <meta name="distribution" content="global" />
                <meta name="rating" content="general" />
                <meta property="og:title" content="Codex - Cub" />
                <meta
                    property="og:description"
                    content="CODEX is a student-run organization at the University of GITAM that aims to provide students with the resources and opportunities to learn about computer science and software development. We learn, we build, and we share!"
                />
            </Head>
            <NavBar />
            <Glimpse />
            <Resources />
            <FAQ />
            <Memories />
            <Feedback />
            <Footer />
        </div>
    );
};

export default Home;
