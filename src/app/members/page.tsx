"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { useState } from 'react';
import Teamcodex21 from "@/components/proud_alumni";
import Teamcodex22 from "@/components/team_codex22";
import Teamcodex23 from "@/components/team_codex23";
import Teamcodex24 from "@/components/team_codex24";
import Member_card from '@/components/member_card';

interface TimelineItem {
    year: string;
    role: string;
}

interface MemCard {
    name: string;
    role: string;
    description: string;
    image: string;
    insta: string;
    github: string;
    linkdin: string;
    timeline: TimelineItem[];
}

const members = () => {
    const [memCard,setMemCard] = useState<MemCard | null>(null);

  const openMemCard = (mem:MemCard) => { setMemCard(mem);};
  const closeMemCard = () => { setMemCard(null); };
    return (
        <div>
            {memCard && (
            <Member_card
                show={true}
                handleClose={closeMemCard}
                name={memCard.name}
                role={memCard.role}
                description={memCard.description}
                img = {memCard.image}
                smedia = {{insta:memCard.insta,github:memCard.github,linkdin:memCard.linkdin}}
                timeline = {memCard.timeline}
            />
            )
            }

            <div className={"bg-custom-gradient text-center pt-[150px] pb-[50px] text-[1.2vw] text-white"}>
                <h2 className="text-3xl">Meet our people</h2>
            </div>
            <div className="text-right py-5 px-5">
                <div className="w-full flex flex-wrap justify-end items-center py-5 px-5 gap-2">
                    <button className="bg-custom-gradient hover:bg-blue-700 text-white font-bold py-1 px-3 sm:py-2 sm:px-4 text-xs sm:text-sm md:text-base rounded-full transition-all" onClick={() => document.getElementById('batch24')?.scrollIntoView({ behavior: 'smooth' })}>v.4.0</button>
                    <button className="bg-custom-gradient hover:bg-blue-700 text-white font-bold py-1 px-3 sm:py-2 sm:px-4 text-xs sm:text-sm md:text-base rounded-full transition-all" onClick={() => document.getElementById('batch23')?.scrollIntoView({ behavior: 'smooth' })}>v.3.0</button>
                    <button className="bg-custom-gradient hover:bg-blue-700 text-white font-bold py-1 px-3 sm:py-2 sm:px-4 text-xs sm:text-sm md:text-base rounded-full transition-all" onClick={() => document.getElementById('batch22')?.scrollIntoView({ behavior: 'smooth' })}>v.2.0</button>
                    <button className="bg-custom-gradient hover:bg-blue-700 text-white font-bold py-1 px-3 sm:py-2 sm:px-4 text-xs sm:text-sm md:text-base rounded-full transition-all" onClick={() => document.getElementById('batch21')?.scrollIntoView({ behavior: 'smooth' })}>v.1.0</button>
                </div>
            </div>
            <div id="batch24">
                <Teamcodex24 openMemCard = {openMemCard}/>
            </div>
            <div id="batch23">
                <Teamcodex23 openMemCard = {openMemCard}/>
            </div>
            <div id="batch22">
                <Teamcodex22 openMemCard = {openMemCard}/>
            </div>
            <div id="batch21">
                <Teamcodex21 openMemCard = {openMemCard}/>
            </div>
        </div>
    );
};
export default members;
