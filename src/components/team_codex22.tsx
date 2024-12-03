import Member_block from "./member_block";
import styles from "../styles/members.module.css";
// import { link } from "fs";
const Teamcodex22 = () => {
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
            image: "https://user-images.githubusercontent.com/141537855/258637418-ecd74f81-067a-47af-a737-b9aff33ce430.png",
            name: "Jasir",
            role: "Non Tech Admin",
            description:
            "Efficiently manage administrative tasks and operations in a non-technical capacity using Codex.",
            insta: "https://instagram.com/jasirmd33?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D",
            github: "https://github.com/Jasirmd",
            linkdin: "https://www.linkedin.com/in/jasir-mohammed-4149ba246",
        },
        {
            image: "https://user-images.githubusercontent.com/141537855/258633541-5ab375e5-c53a-4089-a77d-9e13c2bf8285.png",
            name: "Pradyumna",
            role: "Competitive Programming Lead",
            description:"The one who push the boundaries of competitive programming with alpha-level skills, leveraging Codex for strategic coding excellence.",
            insta: "https://instagram.com/_hououin_kyouma__?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D",
            github: "https://github.com/SaiSantoshPradyumna",
            linkdin: "#",
        },
        {
            image: "https://user-images.githubusercontent.com/105535366/222389447-89270e64-8ba1-41d8-b982-5999e056fcea.png",
            name: "Tamanna",
            role: "Public Relations Officer",
            description:
                "Craft compelling stories and Be the voice of our CODEX and build meaningful connections.",
            insta: "https://instagram.com/n.l.vardhan_?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D",
            github: "https://github.com/Vardhan09764346",
            linkdin: "https://www.linkedin.com/in/narasapu-lakshmi-vardhan-7132a8259",
        },
        {
            image: "https://user-images.githubusercontent.com/105535366/222389442-4b7ec2d0-bfbb-4106-b686-9aa735d6f1bc.png",
            name: "Bharath",
            role: "Logistics Officer",
            description:
                "The one who manages all the Logistical requirements and Clerical work along with coordinating and optimizing the movement of goods and resources that's necessary",
            insta: "https://instagram.com/lohitha222?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
            github: "https://github.com/Lohitha-kakumani",
            linkdin: "https://www.linkedin.com/in/lohitha-kakumani-29242525b",
        },
        {
            image: "https://user-images.githubusercontent.com/105535366/222389455-99366e0b-67f7-45aa-bf29-c38549b270f7.png",
            name: "Suhit Eshwar",
            role: "Visual Arts Lead",
            description:
            "The one who is responsible for leading and to create visually stunning and technically precise art assets that help in marketing and promotional aspect of CODEX",
            insta: "https://instagram.com/_.msk.official_01?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
            github: "https://github.com/mskmsd0108",
            linkdin: "https://www.linkedin.com/in/mokshasai-kandimalla-780845261",
        },
        {
            image: "https://user-images.githubusercontent.com/141537855/260285805-3094c008-b37c-4259-8ec0-d0bb92e306e5.png",
            name: "Amulya",
            role: "Marketing Lead",
            description:
            "Made CODEX a well known club by marketing all its events and publicizing it throughout GITAM",
            insta: "https://instagram.com/nandipati_vaishnavi?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
            github: "#",
            linkdin: "https://www.linkedin.com/in/gnana-vaishnavi-nandipati-b60aba287",
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
            image: "https://user-images.githubusercontent.com/105535366/222389435-77dd1d02-3543-4d69-9b4f-c3dfeedeffb6.png",
            name: "Hilux",
            role: "Front End - Lead",
            description:
                "Incharge of creating intuitive and visually stunning user experiences that immerse the user into the project",
            insta: "https://www.instagram.com/fokouhilux/",
            github: "https://github.com/hiluxfnh",
            linkdin: "https://www.linkedin.com/in/fokou/",
        },
        {
            image: "https://user-images.githubusercontent.com/141537855/258637629-aba65ad3-ffb4-4706-aabb-4bdf85efc990.png",
            name: "Tushar",
            role: "Cyber Guardians Lead",
            description:   
            "The one who formulates and executes robust cyber security strategies and safeguard cyber initiatives.",
            insta: "#",
            github: "#",
            linkdin: "www.linkedin.com/in/hellotushaar",
        },
        
    ];
    return (
        <div className={styles.team_codex_div}>
            <h1 className={styles.team_codex_heading}>
                <span>v.2.0</span>
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
export default Teamcodex22;
