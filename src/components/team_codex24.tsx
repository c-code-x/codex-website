import Member_block from "./member_block";
import styles from "../styles/members.module.css";
// import { link } from "fs";
const Teamcodex24 = () => {
    const data = [
        {
            image: "https://drive.google.com/uc?export=view&id=1aBrpRJjXpI70rguzlv6pgRpEShXMPM3A",
            name: "Amit Sabnis",
            role: "Tech Admin",
            description:"The one responsible for managing the team, provides technical guaidance and support to the team",
            insta: "https://www.instagram.com/amit.sabnis/",
            github: "https://github.com/amitsabnis2004",
            linkdin: "https://www.linkedin.com/in/amit-sabnis2004/",
        },
        {
            image: "https://drive.google.com/uc?export=view&id=10fpY6M_6no4BrfqYDoM4OyoA-s7twXNc",
            name: "V Ghayini",
            role: "Non-Tech Admin",
            description:"The one who is responsible for the performance managment, Efficiently manages administrative tasks and operation in a non-technical capacity",
            insta: "https://www.instagram.com/noble_05_innocent/",
            github: "https://github.com/Honeyworld-19",
            linkdin: "https://www.linkedin.com/in/ghayini-v-8b2239293/",
        },
        {
            image: "https://drive.google.com/uc?export=view&id=13WIBK68tFAk2FRTshey9aLIdJtl68gOf",
            name: "Hare Shri Raam N",
            role: "Public Relations & Marketing Officer",
            description:
                "Craft compelling stories and Be the voice of our CODEX and build meaningful connections.",
            insta: "https://www.instagram.com/hareshriraam/",
            github: "https://github.com/Maruthiraam",
            linkdin: "https://www.linkedin.com/in/hare-shri-raam-n-b24b7031b/",
        },
        {
            image: "https://drive.google.com/uc?export=view&id=1-s8P_GRZ0UNlPHWb0ldzQK5qZBegzjPS",
            name: "Sahithi",
            role: "Logistics Officer",
            description:
                "The one who manages all the Logistical requirements and Clerical work along with coordinating and optimizing the movement of goods and resources that's necessary",
            insta: "https://www.instagram.com/sahi_thi.06/",
            github: "https://github.com/Sahithi932",
            linkdin: "https://www.linkedin.com/in/sahithi-g-865545293/",
        },
        {
            image: "https://drive.google.com/uc?export=view&id=1YSxWVy-0CF5yGG59px4_7IZiPSOrBECy",
            name: "Siddarth",
            role: "Alpha Competitive Programmer",
            description:
                "The one who push the boundaries of competitive programming with alpha-level skills, leveraging Codex for strategic coding excellence.",
            insta: "https://www.instagram.com/kvsiddarth99913/",
            github: "https://github.com/Siddarth116",
            linkdin: "https://www.linkedin.com/in/venkata-siddarth-karri-53354a293/",
        },
        {
            image: "https://user-images.githubusercontent.com/141537855/258641876-a9a46010-3ae8-4963-bc1e-8641cb917724.png",
            name: "Sravya",
            role: "Beta Competitive Programmer",
            description:
            "Elevates competitive programming with beta-level expertise, employing Codex for strategic coding and problem-solving.",
            insta: "https://www.instagram.com/p_sravya__75/",
            github: "https://github.com/Sravya1706",
            linkdin: "https://www.linkedin.com/in/sravya-patham-b31254247/",
        },
        {
            image: "https://drive.google.com/uc?export=view&id=1jxnP30ABdMBlYdK2SI3lJFqILFk_D6dU",
            name: "Sai Anudra",
            role: "Front End - Lead",
            description:
                "Incharge of creating intuitive and visually stunning user experiences that immerse the user into the project",
            insta: "https://www.instagram.com/anu_8807_/",
            github: "https://github.com/anudra",
            linkdin: "#",
        },
        {
            image: "https://drive.google.com/uc?export=view&id=1U7eyfyLtllpTgPZUXaflBU2jyeH0zg41",
            name: "Ujwal P",
            role: "Front End - Dev",
            description:
                "Part of the From End Dev Development Team on the mission of creating intuitive and visually stunning user experiences that immerse the user into the project",
            insta: "https://www.instagram.com/ujwalp31/",
            github: "https://github.com/ujwalp198",
            linkdin: "https://www.linkedin.com/in/ujwal-p-88834b289/",
        },
        {
            image: "https://drive.google.com/uc?export=view&id=1ud-eYntIkQir7XN24FPwTPlva8QkRT_A",
            name: "Rohini Reddy",
            role: "Back End - Dev",
            description:
                "Part of the Back End Dev Development Team on the mission of handling the backbone of the project, the database and server",
            insta: "https://www.instagram.com/rohinireddy.murali/",
            github: "https://github.com/Rohinireddie",
            linkdin: "https://www.linkedin.com/in/gudibandi-rohini-reddy-566426296",
        },

    ];
    return (
        <div className={styles.team_codex_div}>
            <h1 className={styles.team_codex_heading}>
                <span>v.4.0</span>
            </h1>
            <div className={styles.member_blocks_team_codex}>
                {data.map((item, index) => (
                    <Member_block
                        img={item.image}
                        name={item.name}
                        role={item.role}
                        description={item.description}
                        insta={item.insta}
                        github={item.github}
                        linkdin={item.linkdin}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
};
export default Teamcodex24;