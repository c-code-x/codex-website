import Member_block from "./member_block";
import styles from "../styles/members.module.css";
// import { link } from "fs";
const Teamcodex = ({openMemCard}:any) => {
    const data = [
        {
            image: "https://user-images.githubusercontent.com/141537855/258634979-503e83c7-519b-48e4-93f6-6e299f0faeab.png",
            name: "D Punith",
            role: "Tech Admin",
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
            image: "https://user-images.githubusercontent.com/141537855/258633541-5ab375e5-c53a-4089-a77d-9e13c2bf8285.png",
            name: "Pradyumna",
            role: "Non Tech Admin",
            description:"The one who is responsible for the performance managment, Efficiently manages administrative tasks and operation in a non-technical capacity",
            insta: "https://instagram.com/_hououin_kyouma__?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D",
            github: "https://github.com/SaiSantoshPradyumna",
            linkdin: "https://www.linkedin.com/in/sai-santosh-611628222",
            timeline: [
                        {year: "2022", role: "Tech Lead"},
                        {year:"2023", role: "Non-Tech Admin"}
                      ]
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
            timeline: [
                        {year: "2022", role: "Media Manager"},
                      ]
        },
        {
            image: "https://drive.google.com/uc?export=view&id=1yEx7ocffHKK2PWk_QBckj8hdI-vHdBTN",
            name: "Shanmukh",
            role: "Public Relations Officer",
            description:
            "The one who supports CODEX by being the Incharge of documentation and the content creatives in the club.",
            insta: "https://instagram.com/shannu_19__?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D",
            github: "https://github.com/c-code-x",
            linkdin: "https://www.linkedin.com/in/shanmukh-nandhu-9598b524b",
            timeline: [
                        {year: "2022", role: "Content Creator"},
                        {year: "2023",role: "Public Relations Officer"}
                      ]
        },
        {
            image: "https://drive.google.com/uc?export=view&id=1yN6WUNQvY6yLCAMvVffHz3BAVEQH2nbl",
            name: "Parameshwar Madur",
            role: "IOT Developer",
            description: "The one who innovate and engineer IoT solutions as a developer, leveraging Codex for seamless integration and efficient device communication.",
            insta: "https://instagram.com/eshwarmadur?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
            github: "https://github.com/TOXIC-PLASMA",
            linkdin: "https://www.linkedin.com/in/parameshwar-madur-77434223b",
            timeline: [
                        {year: "2023", role: "IOT Developer"}
                      ]
        },
        {
            image: "https://user-images.githubusercontent.com/141537855/258632318-754bf934-478a-40df-86c3-1689b9dcb6d7.png",
            name: "Sahasra",
            role: "Alpha Competitive Programmer",
            description:
                "The one who push the boundaries of competitive programming with alpha-level skills, leveraging Codex for strategic coding excellence.",
            insta: "https://www.instagram.com/codex_gitam/",
            github: "https://github.com/c-code-x",
            linkdin: "https://www.linkedin.com/in/sahasra-sagiraju-750262216",
            timeline: [
                        {year: "2023", role: "Alpha CP"}
                      ]
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
            timeline: [
                        {year: "2023", role: "Delta CP"},
                        {year:"Till Date", role: "Beta CP"}
                      ]
        },
        {
            image: "https://drive.google.com/uc?export=view&id=1yGfLo-wdGxB2FSTJxsrA4Ufxo1Ai45q-",
            name: "Atheeq Mohammed",
            role: "Application Developer",
            description:
                "The one who Build versatile applications as an application developer, looks for innovative development.",
            insta: "https://instagram.com/aaron_1.8_?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
            github: "https://github.com/AtheeqAhmedMJ",
            linkdin: "https://www.linkedin.com/in/atheeq-ahmed-82193b26a",
            timeline: [
                        {year: "2023", role: "Application Developer"}
                      ]
        },
        {
            image: "https://user-images.githubusercontent.com/105535366/222389458-4d4ec6bf-fea4-4a96-96c7-eccee29786a4.png",
            name: "Surya Teja",
            role: "Game Development Lead",
            description:
                "The one who is responsible for creating interactive and entertaining vedio games.",
            insta: "https://www.instagram.com/codex_gitam/",
            github: "https://github.com/c-code-x",
            linkdin: "https://www.linkedin.com/in/surya-teja-pallapu",
            timeline: [
                        {year: "2022", role: "Finance officer"},
                        {year: "2023", role: "Game Development Lead"}
                      ]
        },
        {
            image: "https://user-images.githubusercontent.com/141537855/258631976-42c14940-aab1-4cea-b4c0-e59b7f77e2f7.png",
            name: "Sreeja",
            role: "Level Design",
            description:
            "The one who is responsible for art of creating a game levels,which makes challenging experience for players.",
            insta: "https://www.instagram.com/codex_gitam/",
            github: "https://github.com/Sreeja88",
            linkdin: "https://www.linkedin.com/in/sreeja-sistla-9a4996255",
            timeline: [
                        {year: "2023", role: "Level Design"}
                      ]
        },
        {
            image: "https://user-images.githubusercontent.com/141537855/258637629-aba65ad3-ffb4-4706-aabb-4bdf85efc990.png",
            name: "Tushar Dhar",
            role: "Cyber Guardians Lead",
            description: "The one who formulates and executes robust cyber security strategies and safeguard cyber initiatives.",
            insta: "https://www.instagram.com/codex_gitam/",
            github: "https://github.com/c-code-x",
            linkdin: "www.linkedin.com/in/hellotushaar",
            timeline: [
                        {year: "2022", role: "Backend - Lead"},
                        {year: "2023", role: "Cyber Guardians Lead"}
                      ]
        },
        {
            image: "https://user-images.githubusercontent.com/105535366/222389455-99366e0b-67f7-45aa-bf29-c38549b270f7.png",
            name: "Suhit Eshwar",
            role: "Wed Dev Lead",
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
            image: "https://drive.google.com/uc?export=view&id=1yHNOnKLZp0MqiYKq25P53xz7MiRROLf7",
            name: "Aditya Rajesh",
            role: "Logistics Officer",
            description:
            "The one who manages all the Logistical requirements and Clerical work along with coordinating and optimizing the movement of goods and resources that's necessary",
            insta: "https://www.instagram.com/itzz_aadxthya1301/",
            github: "https://github.com/aadithya1301",
            linkdin: "https://www.linkedin.com/in/aadithya-rajesh",
            timeline: [
                        {year: "2023", role: "Logistics Officer"}
                      ]
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
                            timeline={item.timeline}
                            onClick = {() => openMemCard(item)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Teamcodex;
