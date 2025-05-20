import Member_block from "./member_block";
import styles from "../styles/members.module.css";
// import { link } from "fs";
const Teamcodex22 = ({openMemCard}:any) => {
    const data = [
        {
            image: "https://user-images.githubusercontent.com/141537855/258634979-503e83c7-519b-48e4-93f6-6e299f0faeab.png",
            name: "D Punith",
            role: "CP Lead",
            description:"The one responsible for managing the team, provides technical guaidance and support to the team",
            insta: "https://instagram.com/bad_captain_punith?igshid=YmMyMTA2M2Y=",
            github: "https://github.com/breathecode6365",
            linkdin: "https://www.linkedin.com/in/punithdandluri",
            timeline: [
                        {year: "2022", role: "CP Lead"},
                        {year: "June 2023", role: "Tech Admin"},
                        {year: "Till Date", role: "Mentor"},
                      ]
        },
        {
            image: "https://drive.google.com/uc?export=view&id=1yFblLdWUAOlper5CS-4YnP-cwrp2TWVc",
            name: "Jasir",
            role: "Non Tech Admin",
            description:
            "Efficiently manage administrative tasks and operations in a non-technical capacity using Codex.",
            insta: "https://instagram.com/jasirmd33?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D",
            github: "https://github.com/Jasirmd",
            linkdin: "https://www.linkedin.com/in/jasir-mohammed-4149ba246",
            timeline: [
                        {year: "2022", role: "Non-Tech Admin"}
                      ]
        },
        {
            image: "https://user-images.githubusercontent.com/141537855/258633541-5ab375e5-c53a-4089-a77d-9e13c2bf8285.png",
            name: "Pradyumna",
            role: "Tech Admin",
            description:"The one responsible for managing the team, provides technical guaidance and support to the team",
            insta: "https://instagram.com/_hououin_kyouma__?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D",
            github: "https://github.com/SaiSantoshPradyumna",
            linkdin: "https://www.linkedin.com/in/sai-santosh-611628222",
            timeline: [
                        {year: "2022", role: "Tech Admin"},
                        {year: "2023", role: "Non-Tech Admin"}
                      ]
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
            timeline: [
                        {year: "2022", role: "PR Officer"}
                      ]
        },
        {
            image: "https://user-images.githubusercontent.com/105535366/222389442-4b7ec2d0-bfbb-4106-b686-9aa735d6f1bc.png",
            name: "Bharath Yadav",
            role: "Logistics Officer",
            description:
                "The one who manages all the Logistical requirements and Clerical work along with coordinating and optimizing the movement of goods and resources that's necessary",
            insta: "https://instagram.com/lohitha222?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
            github: "https://github.com/Lohitha-kakumani",
            linkdin: "https://www.linkedin.com/in/lohitha-kakumani-29242525b",
            timeline: [
                        {year: "2022", role: "Logistics Officer"}
                      ]
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
            timeline: [
                        {year: "2022", role: "Visual Arts Lead"},
                        {year: "2023", role: "Wed Dev Lead"}
                      ]
        },
        {
            image: "https://drive.google.com/uc?export=view&id=1yKxTwpAn6Vb16C___BM27u-5556wgxMK",
            name: "Amulya",
            role: "Marketing Lead",
            description:
            "Made CODEX a well known club by marketing all its events and publicizing it throughout GITAM",
            insta: "https://instagram.com/nandipati_vaishnavi?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
            github: "https://github.com/c-code-x",
            linkdin: "https://www.linkedin.com/in/gnana-vaishnavi-nandipati-b60aba287",
            timeline: [
                        {year: "2022", role: "Marketing Lead"}
                      ]
        },
        {
            image: "https://user-images.githubusercontent.com/105535366/222389458-4d4ec6bf-fea4-4a96-96c7-eccee29786a4.png",
            name: "Surya Teja",
            role: "Finance officer",
            description:
            "The one who manages budgets, analyzes financial data, and ensures the organization's financial health.",
            insta: "https://www.instagram.com/codex_gitam/",
            github: "https://github.com/c-code-x",
            linkdin: "https://www.linkedin.com/in/surya-teja-pallapu",
            timeline: [
                        {year: "2022", role: "Finance officer"},
                        {year: "2023", role: "Game Development Lead"}
                      ]
        },
        {
            image: "https://user-images.githubusercontent.com/105535366/222389435-77dd1d02-3543-4d69-9b4f-c3dfeedeffb6.png",
            name: "Fokou Hilux",
            role: "Wed Dev - Lead",
            description:
                "Incharge of creating intuitive and visually stunning user experiences that immerse the user into the project",
            insta: "https://www.instagram.com/fokouhilux/",
            github: "https://github.com/hiluxfnh",
            linkdin: "https://www.linkedin.com/in/fokou/",
            timeline: [
                        {year: "2022", role: "Wed Dev - Lead"}
                      ]
        },
        {
            image: "https://user-images.githubusercontent.com/141537855/258637629-aba65ad3-ffb4-4706-aabb-4bdf85efc990.png",
            name: "Tushar Dhar",
            role: "Backend - Lead",
            description: "Part of the Back End Dev Development Team on the mission of handling the backbone of the project, the database and server",
            insta: "https://www.instagram.com/codex_gitam/",
            github: "https://github.com/c-code-x",
            linkdin: "www.linkedin.com/in/hellotushaar",
            timeline: [
                        {year: "2022", role: "Backend - Lead"},
                        {year: "2023", role: "Cyber Guardians Lead"}
                      ]
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
                        onClick = {() => openMemCard(item)}
                    />
                ))}
            </div>
        </div>
    );
};
export default Teamcodex22;
