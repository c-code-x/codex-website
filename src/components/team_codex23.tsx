import Member_block from "./member_block";
import styles from "../styles/members.module.css";
// import { link } from "fs";
const Teamcodex = () => {
    const data = [
        {
            image: "https://user-images.githubusercontent.com/141537855/258634979-503e83c7-519b-48e4-93f6-6e299f0faeab.png",
            name: "D Punith",
            role: "Tech Admin",
            description:"The one responsible for managing the team, provides technical guaidance and support to the team",
            insta: "https://instagram.com/bad_captain_punith?igshid=YmMyMTA2M2Y=",
            github: "https://github.com/breathecode6365",
            linkdin: "https://www.linkedin.com/in/punithdandluri",
        },
        {
            image: "https://user-images.githubusercontent.com/141537855/258633541-5ab375e5-c53a-4089-a77d-9e13c2bf8285.png",
            name: "Pradyumna",
            role: "Non Tech Admin",
            description:"The one who is responsible for the performance managment, Efficiently manages administrative tasks and operation in a non-technical capacity",
            insta: "https://instagram.com/_hououin_kyouma__?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D",
            github: "https://github.com/SaiSantoshPradyumna",
            linkdin: "#",
        },
        {
            image: "https://user-images.githubusercontent.com/141537855/258632478-571f0f9d-dc25-41f1-a92c-fa4e41e66092.png",
            name: "Lokesh",
            role: "Media Manager",
            description:
            "Efficiently manage media content and strategies using Codex, ensuring impactful communication and engagement.",
            insta: "https://instagram.com/thisislokeshrm",
            github: "https://github.com/thisislokeshrm",
            linkdin: "https://in.linkedin.com/in/thisislokeshrm",
        },
        {
            image: "https://user-images.githubusercontent.com/141537855/260285369-e973ed90-e98a-4c38-8020-ac1655f2f928.png",
            name: "Shanmukh",
            role: "Content Creator",
            description:
            "The one who supports CODEX by being the Incharge of documentation and the content creatives in the club.",
            insta: "https://instagram.com/shannu_19__?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D",
            github: "#",
            linkdin: "https://www.linkedin.com/in/shanmukh-nandhu-9598b524b",
        },
        {
            image: "https://user-images.githubusercontent.com/141537855/258630251-feda784c-aec9-42a2-b388-bc4f6302999e.png",
            name: "Parameshwar Madur",
            role: "IOT Developer",
            description:
            "The one who innovate and engineer IoT solutions as a developer, leveraging Codex for seamless integration and efficient device communication.",
            insta: "https://instagram.com/eshwarmadur?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
            github: "https://github.com/TOXIC-PLASMA",
            linkdin: "https://www.linkedin.com/in/parameshwar-madur-77434223b",
        },
        {
            image: "https://user-images.githubusercontent.com/141537855/258632318-754bf934-478a-40df-86c3-1689b9dcb6d7.png",
            name: "Sahasra",
            role: "Alpha Competitive Programmer",
            description:
                "The one who push the boundaries of competitive programming with alpha-level skills, leveraging Codex for strategic coding excellence.",
            insta: "#",
            github: "#",
            linkdin: "#",
        },
        {
            image: "https://user-images.githubusercontent.com/141537855/258641876-a9a46010-3ae8-4963-bc1e-8641cb917724.png",
            name: "Sravya",
            role: "Delta Competitive Programmer",
            description:
            "Master the art of competitive programming at the delta level, utilizing Codex for advanced problem-solving and coding strategies.",
            insta: "https://www.instagram.com/p_sravya__75/",
            github: "https://github.com/Sravya1706",
            linkdin: "https://www.linkedin.com/in/sravya-patham-b31254247/",
        },
        {
            image: "https://user-images.githubusercontent.com/141537855/258631435-2ee7eb1e-e86f-4830-868f-2d3d828c6b87.png",
            name: "Atheeq",
            role: "Application Developer",
            description:
                "The one who Build versatile applications as an application developer, looks for innovative development.",
            insta: "https://instagram.com/aaron_1.8_?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
            github: "https://github.com/AtheeqAhmedMJ",
            linkdin: "https://www.linkedin.com/in/atheeq-ahmed-82193b26a",
        },
        {
            image: "https://user-images.githubusercontent.com/105535366/222389458-4d4ec6bf-fea4-4a96-96c7-eccee29786a4.png",
            name: "Surya",
            role: "Game Development Lead",
            description:
                "The one who is responsible for creating interactive and entertaining vedio games.",
            insta: "#",
            github: "#",
            linkdin: "#",
        },
        {
            image: "https://user-images.githubusercontent.com/141537855/258631976-42c14940-aab1-4cea-b4c0-e59b7f77e2f7.png",
            name: "Sreeja",
            role: "Level Design",
            description:
            "The one who is responsible for art of creating a game levels,which makes challenging experience for players.",
            insta: "#",
            github: "https://github.com/Sreeja88",
            linkdin: "https://www.linkedin.com/in/sreeja-sistla-9a4996255",
        },
        
    ];
    return (
        <div className={styles.proud_alumni_codex}>
            <div className={styles.team_codex_div}>
                <h1 className={styles.team_codex_heading}>
                    <span>v.3.0</span>
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
        </div>
    );
};
export default Teamcodex;
