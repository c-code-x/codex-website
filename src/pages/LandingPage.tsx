import React from "react";
import Glimpse from "@/components/Glimpse";
import Calender from "@/components/Calender"
import Faqs from "@/components/FAQs";
import Footer1 from "@/components/Footer1";
import NavBar from "@/components/NavBar";
import Memories from "@/components/memories";


const LandingPage = () => {
    return(
    <div>
        <NavBar/>
        <Glimpse/>
        <Calender/>
        <Footer1/>
    </div>
    )
}
export default LandingPage;