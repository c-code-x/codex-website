import Member_block from "./member_block";
import styles from "../styles/members.module.css";
// import { link } from "fs";
const Teamcodex = () => {
    const data = [
        {
            image: "https://user-images.githubusercontent.com/105535366/222389427-794536d8-43a0-409e-bf55-508cd4294121.png",
            name: "D Punith",
            role: "Tech Admin",
            description:
                "The ONE responsible for Managing and leading all tech-related operations of CODEX ",
            insta: "https://instagram.com/bad_captain_punith?igshid=YmMyMTA2M2Y=",
            github: "https://github.com/breathecode6365",
            linkdin: "https://www.linkedin.com/in/punithdandluri/",
        },
        {
            image: "https://user-images.githubusercontent.com/105535366/222389449-75e6212c-4151-49bd-bf36-a51bc70591bb.png",
            name: "Sai Santosh Pradyumna",
            role: "Non-Tech Admin",
            description:
                "The ONE responsible and accountable for executive leadership and operational direction of CODEX ",
            insta: "https://instagram.com/sai_santosh_?igshid=YmMyMTA2M2Y=",
            github: "https://github.com/SaiSantoshPradyumna",
            linkdin: "https://www.linkedin.com/in/sai-santosh-611628222/",
        },
        {
            image: "https://user-images.githubusercontent.com/141537855/260285369-e973ed90-e98a-4c38-8020-ac1655f2f928.png",
            name: "Shanmukh",
            role: "Logistics Officer",
            description:
                "Manages all the Logistical requirements and documentation of CODEX",
            insta: "https://www.instagram.com/shannu_19__/",
            github: "#",
            linkdin: "https://www.linkedin.com/in/a-shanmukh-nandu-9598b524b/",
        },
        {
            image: "https://user-images.githubusercontent.com/141537855/258631435-2ee7eb1e-e86f-4830-868f-2d3d828c6b87.png",
            name: "Md.Atheeq",
            role: "App Devolopment Lead",
            description:
                "Responsibility of leading the App Development team and to create and maintain the apps",
            insta: "https://www.instagram.com/aaron_1.8_/",
            github: "#",
            linkdin: "https://www.linkedin.com/in/atheeq-ahmed-82193b26a/",
        },
        {
            image: "https://user-images.githubusercontent.com/141537855/258632478-571f0f9d-dc25-41f1-a92c-fa4e41e66092.png",
            name: "Lokesh",
            role: "Web Development Lead",
            description:
                "The One responsible for leading the web development team and to create and maintain the website of CODEX",
            insta: "https://www.instagram.com/thisislokeshrm/",
            github: "#",
            linkdin: "https://www.linkedin.com/in/thisislokeshrm/",
        },
        {
            image: "https://amitsabnis2004.github.io/photo/amit_img.png",
            name: "Amit",
            role: "Competitive Programming Team",
            description:
                "Part of the competitive programming team, to participate and host coding competitions and practice regularly.",
            insta: "https://www.instagram.com/amit.sabnis/",
            github: "https://github.com/amitsabnis2004",
            linkdin: "https://www.linkedin.com/in/amit-sabnis-b52056290/",
        },
        {
            image: "https://user-images.githubusercontent.com/141537855/258641876-a9a46010-3ae8-4963-bc1e-8641cb917724.png",
            name: "Sravya",
            role: "Competitive Programming Team",
            description:
                "Part of the competitive programming team, to participate and host coding competitions and practice regularly",
            insta: "#",
            github: "#",
            linkdin: "https://www.linkedin.com/in/sravya-patham-b31254247/",
        },
                {
            image: "https://user-images.githubusercontent.com/141537855/258630251-feda784c-aec9-42a2-b388-bc4f6302999e.png",
            name: "Parameshwar Madur",
            role: "IoT Lead",
            description:
                "Lead and manage the IoT team, and build interesting projects using IoT technology",
            insta: "https://www.instagram.com/toxicplasma/",
            github: "https://github.com/TOXIC-PLASMA",
            linkdin: "https://www.linkedin.com/in/parameshwar-madur-77434223b/",
        },
    ];
    return (
        <div className={styles.team_codex_div}>
            <h1 className={styles.team_codex_heading}>
                Team Of <span>CODEX</span>
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
export default Teamcodex;
