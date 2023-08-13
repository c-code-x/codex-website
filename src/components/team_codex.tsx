import Member_block from "./member_block";
import styles from "../styles/members.module.css";
// import { link } from "fs";
const Teamcodex = () => {
    const data = [
        {
            image: "https://user-images.githubusercontent.com/141537855/258634979-503e83c7-519b-48e4-93f6-6e299f0faeab.png",
            name: "D Punith",
            role: "Tech Admin",
            description:"The ONE responsible for managing the team, provides technical guaidance and support to the team",
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
            image: "https://user-images.githubusercontent.com/141537855/258630710-42494eea-0b50-465e-83b4-e0fa4e985178.png",
            name: "Lakshmi Vardhan",
            role: "Public Relations Officer",
            description:
                "Craft compelling stories and Be the voice of our CODEX and build meaningful connections.",
            insta: "https://instagram.com/n.l.vardhan_?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D",
            github: "https://github.com/Vardhan09764346",
            linkdin: "https://www.linkedin.com/in/narasapu-lakshmi-vardhan-7132a8259",
        },
        {
            image: "https://user-images.githubusercontent.com/141537855/258641686-5d8fa4fd-7360-4bf7-b89e-a008eb8282c3.png",
            name: "Lohitha",
            role: "Logistics Officer",
            description:
                "Manages all the Logistical requirements and Clerical work along with coordinating and optimizing the movement of goods and resources that's necessary",
            insta: "https://instagram.com/lohitha222?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
            github: "#",
            linkdin: "https://www.linkedin.com/in/lohitha-kakumani-29242525b",
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
            image: "https://user-images.githubusercontent.com/141537855/258630559-21b9d4ab-3b97-4f67-bcf7-5cc5d1ed42c6.png",
            name: "Sanjana",
            role: "Visual Media Lead",
            description:
                "Creatively lead and orchestrate visual media projects using Codex's innovative tools.",
            insta: "https://instagram.com/__.s.a.n.j.a.n.a__?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D",
            github: "https://github.com/Spiresanjana",
            linkdin: "https://www.linkedin.com/in/sanjana-thrilokchandra-5b683b257",
        },
        {
            image: "https://user-images.githubusercontent.com/141537855/258630662-9c9383a5-6566-47ec-99d4-094ce7a2d8cd.png",
            name: "Moksha sai",
            role: "Visual Arts Lead",
            description:
            "The one responsible for leading and to create visually stunning and technically precise art assets that help in marketing and promotional aspect of CODEX",
            insta: "https://instagram.com/_.msk.official_01?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
            github: "https://github.com/mskmsd0108",
            linkdin: "https://www.linkedin.com/in/mokshasai-kandimalla-780845261",
        },
        {
            image: "https://user-images.githubusercontent.com/141537855/260285369-e973ed90-e98a-4c38-8020-ac1655f2f928.png",
            name: "Shanmukh",
            role: "Content Creator",
            description:
            "Supported CODEX by being the Incharge of documentation and the content creatives in the club.",
            insta: "https://instagram.com/shannu_19__?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D",
            github: "#",
            linkdin: "https://www.linkedin.com/in/shanmukh-nandhu-9598b524b",
        },
        {
            image: "https://user-images.githubusercontent.com/141537855/260285805-3094c008-b37c-4259-8ec0-d0bb92e306e5.png",
            name: "Vaishanavi",
            role: "Marketing Lead",
            description:
            "Made CODEX a well known club by marketing all its events and publicizing it throughout GITAM",
            insta: "https://instagram.com/nandipati_vaishnavi?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
            github: "#",
            linkdin: "https://www.linkedin.com/in/gnana-vaishnavi-nandipati-b60aba287",
        },
        {
            image: "https://user-images.githubusercontent.com/141537855/260286487-644d5378-e94b-46f2-94d6-e31ae85f85cf.png",
            name: "Aravindha Sankeerthana",
            role: "Public relations officer",
            description:
            "Craft compelling stories and Be the voice of our CODEX and build meaningful connections.",
            insta: "https://instagram.com/arvnda.vejalla?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
            github: "#",
            linkdin: "https://www.linkedin.com/in/aravinda-keerthana-vejalla-52603b27b",
        },
        {
            image: "https://user-images.githubusercontent.com/141537855/260286770-5e7b45e3-b8b4-4595-be41-5f5a3c236e1a.png",
            name: "Pavan",
            role: "Marketing-officer",
            description:
            "Made CODEX a well known club by marketing all its events and publicizing it throughout GITAM",
            insta: "https://instagram.com/pavancharan_28?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D",
            github: "#",
            linkdin: "https://www.linkedin.com/in/pavan-charan-9b9224256",
        },
        {
            image: "https://user-images.githubusercontent.com/141537855/258630251-feda784c-aec9-42a2-b388-bc4f6302999e.png",
            name: "Parameshwar Madur",
            role: "IOT Developer",
            description:
            "Innovate and engineer IoT solutions as a developer, leveraging Codex for seamless integration and efficient device communication.",
            insta: "https://instagram.com/eshwarmadur?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
            github: "https://github.com/TOXIC-PLASMA",
            linkdin: "https://www.linkedin.com/in/parameshwar-madur-77434223b",
        },
        {
            image: "https://user-images.githubusercontent.com/141537855/258630620-a4543436-f5df-492b-a3f9-7b1eafac2bd8.png",
            name: "Likhitha",
            role: "Cloud Architect",
            description:
            "The one who is responsible for the design and implement cutting-edge cloud solutions as a cloud architect.",
            insta: "https://instagram.com/indugulikhitha?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
            github: "https://github.com/ILikhitha",
            linkdin: "http://www.linkedin.com/in/likhitha-indugu-86796922a",
        },
        {
            image: "https://user-images.githubusercontent.com/141537855/258855565-729a678f-6a62-42bd-9c90-6ee86e22ebb9.png",
            name: "Aditya Kumar Prajapati",
            role: "Cloud Architect",
            description:
                "The one who is responsible for the design and implement cutting-edge cloud solutions as a cloud architect.",
            insta: "#",
            github: "https://github.com/helloaaditya",
            linkdin: "https://www.linkedin.com/in/adityakumarprajapati/",
        },
        {
            image: "https://user-images.githubusercontent.com/141537855/258632318-754bf934-478a-40df-86c3-1689b9dcb6d7.png",
            name: "Sahasra",
            role: "Alpha Competitive Programmer",
            description:
                "Push the boundaries of competitive programming with alpha-level skills, leveraging Codex for strategic coding excellence.",
            insta: "#",
            github: "#",
            linkdin: "#",
        },
        {
            image: "https://user-images.githubusercontent.com/141537855/258631022-428fbf30-d2f0-4b46-b1c2-b9acf9f6dc50.png",
            name: "Prajwal",
            role: "Beta Competitive Programmer",
            description:
            "Elevate competitive programming with beta-level expertise, employing Codex for strategic coding and problem-solving.",
            insta: "https://instagram.com/prajwal_p_m?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D",
            github: "https://github.com/PrajwalMutalik",
            linkdin: "https://www.linkedin.com/in/prajwal-m-a46661255",
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
            image: "https://user-images.githubusercontent.com/141537855/258852746-3132f401-aad9-418a-8fde-3dcb807e17d6.png",
            name: "Yaswanth Siva Kumar",
            role: "AI/ML lead",
            description:
                "The one who guide the era of technological advancements and AIML directs",
            insta: "https://instagram.com/infinity__king_01?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
            github: " https://github.com/yaswanth7-7",
            linkdin: "https://www.linkedin.com/in/yaswanth-siva-kumar-560990242/",
        },
        {
            image: "https://user-images.githubusercontent.com/141537855/258631435-2ee7eb1e-e86f-4830-868f-2d3d828c6b87.png",
            name: "Atheeq",
            role: "Application Developer",
            description:
                "Build versatile applications as an application developer, leveraging Codex for streamlined and innovative development.",
            insta: "https://instagram.com/aaron_1.8_?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
            github: "https://github.com/AtheeqAhmedMJ",
            linkdin: "https://www.linkedin.com/in/atheeq-ahmed-82193b26a",
        },
        {
            image: "https://user-images.githubusercontent.com/141537855/258637629-aba65ad3-ffb4-4706-aabb-4bdf85efc990.png",
            name: "Tushar",
            role: "Cyber Guardians Lead",
            description:   
            "Skillfully lead and safeguard cyber initiatives as a guardian at Codex.",
            insta: "#",
            github: "#",
            linkdin: "www.linkedin.com/in/hellotushaar",
        },
        {
            image: "https://user-images.githubusercontent.com/141537855/258632621-b1c5367c-0d2b-4d0e-bb65-ef320f1433b6.png",
            name: "Ritvik Kevin Son",
            role: "Alpha cyber Guardian",
            description:
            "Lead cybersecurity efforts at an alpha level, using Codex to fortify defenses and ensure digital safety.",
            insta: "#",
            github: "#",
            linkdin: "#",
        },
        {
            image: "https://user-images.githubusercontent.com/141537855/258642120-0e45c793-5185-449e-a422-2804a58a713b.png",
            name: "Abhiram",
            role: "Beta Cyber Guardian",
            description:
            "Execute cybersecurity strategies at a beta level, employing Codex to enhance protection and safeguard digital assets.",
            insta: "https://instagram.com/__.abhiiii._?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
            github: "https://github.com/AbhiramAchana",
            linkdin: "https://www.linkedin.com/in/abhiram-achana-90830925a",
        },
        {
            image: "https://user-images.githubusercontent.com/105535366/222389458-4d4ec6bf-fea4-4a96-96c7-eccee29786a4.png",
            name: "Surya",
            role: "Game Development Lead",
            description:
                "Lead the charge in crafting unforgettable gaming experiences that captivates your mind , as our Game Development Lead.",
            insta: "#",
            github: "#",
            linkdin: "#",
        },
        {
            image: "https://user-images.githubusercontent.com/141537855/258631776-8d21c135-22e5-48eb-b09c-01be9cf74290.png",
            name: "Vishruth",
            role: "Character Development",
            description:
                "Elevate game narratives through intricate character development, leveraging Codex to create captivating and emotionally resonant gaming experiences.",
            insta: "https://www.instagram.com/vishruth_reddy_15/",
            github: "https://github.com/VU21CSEN0102054VISHRUTH/VU21CSEN0102054VISHRUTH",
            linkdin: "https://www.linkedin.com/mwlite/in/thatiparthi-vishruth-reddy-a65478270",
        },
        {
            image: "https://user-images.githubusercontent.com/141537855/258631976-42c14940-aab1-4cea-b4c0-e59b7f77e2f7.png",
            name: "Sreeja",
            role: "Level Design",
            description:
            "Shape immersive game worlds and experiences through expert level design, utilizing Codex to craft engaging and dynamic gameplay environments.",
            insta: "#",
            github: "https://github.com/Sreeja88",
            linkdin: "https://www.linkedin.com/in/sreeja-sistla-9a4996255",
        },
        {
            image: "https://user-images.githubusercontent.com/141537855/258632915-4aab5094-7e30-4f56-aeda-b820fc483afe.png",
            name: "KV Gopichand",
            role: "Assest Design",
            description:
            "Create captivating in-game assets and visuals through expert design, harnessing Codex to enhance the aesthetic and impact of the gaming experience.",
            insta: "#",
            github: "#",
            linkdin: "#",
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
