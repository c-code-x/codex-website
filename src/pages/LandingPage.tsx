import React from "react";
import Glimpse from "@/components/Glimpse";
import Calender from "@/components/Calender"
import Footer1 from "@/components/Footer1";
import NavBar from "@/components/NavBar";
import Memories from "@/components/memories";
import Resources from "@/components/Resources"
import FAQ from "@/components/FAQ";

const LandingPage = () => {
    return(
    <div>
        <NavBar/>
        <Glimpse/>
        <Calender/>
        <Resources/>
        <FAQ/>
        <Memories/>
        <Footer1/>
    </div>
    )
}
export default LandingPage;