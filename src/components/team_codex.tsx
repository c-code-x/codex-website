import Member_block from "./member_block";
import styles from "../styles/members.module.css";
// import { link } from "fs";
const Teamcodex = () => {
    const data = [
        {
            image: "https://user-images.githubusercontent.com/105535366/222389427-794536d8-43a0-409e-bf55-508cd4294121.png",
            name: "D Punith",
            role: "President",
            description:
                "The ONE responsible and accountable for executive leadership and operational direction of CODEX ",
            insta: "https://instagram.com/bad_captain_punith?igshid=YmMyMTA2M2Y=",
            github: "https://github.com/breathecode6365",
            linkdin: "#",
        },
        {
            image: "https://user-images.githubusercontent.com/105535366/222389442-4b7ec2d0-bfbb-4106-b686-9aa735d6f1bc.png",
            name: "Bharath",
            role: "Logistics Officer",
            description:
                "Manages all the Logistical requirements and Clerical work along with coordinating and optimizing the movement of goods and resources that's necessary",
            insta: "https://instagram.com/_.b.h.a.r.a.t.h.__.y.a.d.a.v._?igshid=YmMyMTA2M2Y=",
            github: "#",
            linkdin: "#",
        },
        {
            image: "https://user-images.githubusercontent.com/105535366/222389447-89270e64-8ba1-41d8-b982-5999e056fcea.png",
            name: "Tamana",
            role: "Public Relations Officer",
            description:
                "Craft compelling stories and Be the voice of our CODEX and build meaningful connections.",
            insta: "https://instagram.com/truly_tamanna?igshid=YmMyMTA2M2Y=",
            github: "https://www.linkedin.com/in/tamannashaw",
            linkdin: "#",
        },
        {
            image: "https://user-images.githubusercontent.com/105535366/222389455-99366e0b-67f7-45aa-bf29-c38549b270f7.png",
            name: "Suhit",
            role: "Visual Arts Officer",
            description:
                "The one responsible for leading and to create visually stunning and technically precise art assets that help in marketing and promotional aspect of CODEX ",
            insta: "https://instagram.com/suhit_eswar_?igshid=YmMyMTA2M2Y=",
            github: "https://github.com/suhit123",
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
            image: "https://user-images.githubusercontent.com/105535366/222389439-f3bf22db-3243-4b53-9ea0-747df8d3232d.png",
            name: "Tushar",
            role: "Back End - Lead",
            description:
                "Lead the development of scalable, robust, and secure systems as our Back End Lead and shape the future of our technology.",
            insta: "#",
            github: "https://github.com/hellotushaar",
            linkdin: "https://linkedin.com/in/hellotushaar",
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
            image: "https://user-images.githubusercontent.com/105535366/222389449-75e6212c-4151-49bd-bf36-a51bc70591bb.png",
            name: "Pradyumna",
            role: "Competitive Programming Lead",
            description:
                "Lead and manage the competitive programming team, providing strategic guidance and solutions to achieve success in coding challenges and competitions",
            insta: "https://github.com/SaiSantoshPradyumna",
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
