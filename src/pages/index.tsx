import { NextPage } from "next";
import React from "react";
import LandingPage from "@/pages/LandingPage";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const Home:NextPage=()=>{
    return (
        <div>
           <LandingPage/>
        </div>
    )
}

export default Home;