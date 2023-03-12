import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Proud_alumni from "@/components/proud_alumni";
import Teamcodex from "@/components/team_codex";
import styles from '../styles/members.module.css';
const Members=()=>{
return(
    <div>
    <NavBar/>
    <div className={styles.meetourpeople}>
        <h2>Meet our people</h2>
    </div>
    <Teamcodex/>
    <Proud_alumni/>
    <Footer/>
    </div>
);
};
export default Members;