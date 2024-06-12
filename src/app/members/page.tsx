import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Proud_alumni from "@/components/proud_alumni";
import Teamcodex from "@/components/team_codex";
import styles from "../../styles/members.module.css";
const members = () => {
    return (
        <div>
            <div className={"bg-custom-gradient text-center pt-[150px] pb-[50px] text-[1.2vw] text-white"}>
                <h2 className="text-3xl">Meet our people</h2>
            </div>
            <Teamcodex />
            <Proud_alumni />
        </div>
    );
};
export default members;
