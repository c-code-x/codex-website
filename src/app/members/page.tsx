"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Teamcodex21 from "@/components/proud_alumni";
import Teamcodex22 from "@/components/team_codex22";
import Teamcodex23 from "@/components/team_codex23";
import Teamcodex24 from "@/components/team_codex24";
import styles from "../../styles/members.module.css";
const members = () => {
    return (
        <div>
            <div className={"bg-custom-gradient text-center pt-[150px] pb-[50px] text-[1.2vw] text-white"}>
                <h2 className="text-3xl">Meet our people</h2>
            </div>
            <div className="text-right text-[1.2vw] text-black items-flex justify-center py-5 px-5">
                <p>
                    <button className="bg-custom-gradient hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2" onClick={() => document.getElementById('batch23')?.scrollIntoView({ behavior: 'smooth' })}>v.3.0</button>
                    <button className="bg-custom-gradient hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2" onClick={() => document.getElementById('batch22')?.scrollIntoView({ behavior: 'smooth' })}>v.2.0</button>
                    <button className="bg-custom-gradient hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2" onClick={() => document.getElementById('batch21')?.scrollIntoView({ behavior: 'smooth' })}>v.1.0</button>
                </p>
            </div>
            <div id="batch24">
                <Teamcodex24 />
            </div>
            <div id="batch23">
                <Teamcodex23 />
            </div>
            <div id="batch22">
                <Teamcodex22 />
            </div>
            <div id="batch21">
                <Teamcodex21 />
            </div>
        </div>
    );
};
export default members;
