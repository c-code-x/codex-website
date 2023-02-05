import React from "react";
import Glimpse from "@/components/Glimpse";
import Calender from "@/components/Calender"
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Memories from "@/components/memories";
import Resources from "@/components/Resources"
import FAQ from "@/components/FAQ";
import Feedback from "@/components/Feedback";

const LandingPage = () => {
    return(
    <div>
        <NavBar/>
        <Glimpse/>
        <Calender/>
        <Resources/>
        <FAQ/>
        <Memories/>
        <Feedback/>
        <Footer/>
    </div>
    )
}
export default LandingPage;