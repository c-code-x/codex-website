import React from "react";
import Glimpse from "@/components/Glimpse";
import Calender from "@/components/Calender"
import Footer from "@/components/Footer";
import Faqs from "@/components/FAQs";
import NavBar from "@/components/NavBar";
import Memories from "@/components/memories";


const LandingPage = () => {
    return(
    <div>
        <NavBar/>
        <Glimpse/>
        <Calender/>
        {/*<Memories/>*/}
        <Footer/>
    </div>
    )
}
export default LandingPage;