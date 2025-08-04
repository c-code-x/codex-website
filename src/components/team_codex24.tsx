import Member_block from "./member_block";
import styles from "../styles/members.module.css";

const Teamcodex24 = ({openMemCard}:any) => {
    const data = [
        {
            image: "https://drive.google.com/uc?export=view&id=1aBrpRJjXpI70rguzlv6pgRpEShXMPM3A",
            name: "Amit Sabnis",
            role: "Non-Tech Admin",
            description:"The one responsible for managing the team, provides technical guaidance and support to the team",
            insta: "https://www.instagram.com/amit.sabnis/",
            github: "https://github.com/amitsabnis2004",
            linkdin: "https://www.linkedin.com/in/amit-sabnis2004/",
            timeline: [
                        {year: "2023", role: "Media Manager"},
                        {year: "2023", role: "Competitive Programming Team"},
                        {year: "2024", role: "Tech Admin"},
                        {year: "Till Date", role: "Non-Tech Admin"}
                      ]
        },
        {
            image: "https://drive.google.com/uc?export=view&id=1PIO3KB60NLBRX5PpaUc9E646k8BRgWsZ",
            name: "Sai Anudra",
            role: "Tech Admin",
            description:
                "Incharge of creating intuitive and visually stunning user experiences that immerse the user into the project",
            insta: "https://www.instagram.com/anu_8807_/",
            github: "https://github.com/anudra",
            linkdin: "#",
            timeline: [
                        {year: "2024", role: "Front End - Lead"},
                        {year: "Till Date", role: "Tech Admin"}
                      ]
        },
        {
            image: "https://drive.google.com/uc?export=view&id=1-1GebXFSJHjfluM6G9Y1tP1ckYkHMEYt",
            name: "Sudeep Reddy",
            role: "Back End - Dev",
            description:
                "Part of the Back End Dev Development Team on the mission of handling the backbone of the project, the database and server",
            insta: "https://www.instagram.com/codex_gitam/",
            github: "https://github.com/alwayssudeepreddy/",
            linkdin: "https://www.linkedin.com/in/sudeep-reddy-kurmai/",
            timeline: [
                        {year: "Till Date", role: "Back End - Dev"}
                      ]
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
            timeline: [
                        {year: "2024", role: "Back End - Dev"}
                      ]
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
            timeline: [
                        {year: "2024", role: "Logistics Officer"}
                      ]
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
            timeline: [
                        {year: "2024", role: "PR & Marketing Officer"}
                      ]
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
                        onClick = {() => openMemCard(item)}
                    />
                ))}
            </div>
        </div>
    );
};
export default Teamcodex24;