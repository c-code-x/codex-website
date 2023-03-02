import Member_block from "./member_block";
import styles from '../styles/members.module.css'
const Teamcodex =()=>{
const data=[{
    image:"https://user-images.githubusercontent.com/105535366/222389427-794536d8-43a0-409e-bf55-508cd4294121.png",
    name:"Punith",
    role:"Tech - Lead",
    description:"Contributing his service as a Tech admin.",
    insta:"#",
    github:"#",
    linkdin:"#"
},{
    image:"https://user-images.githubusercontent.com/105535366/222389449-75e6212c-4151-49bd-bf36-a51bc70591bb.png",
    name:"Santhosh",
    role:"CP - Lead",
    description:"A lead programmer for competitive programming.",
    insta:"#",
    github:"#",
    linkdin:"#"
},{
    image:"https://user-images.githubusercontent.com/105535366/222389455-99366e0b-67f7-45aa-bf29-c38549b270f7.png",
    name:"Suhit",
    role:"Visual Arts Officer",
    description:"Chargeable for editing tasks.",
    insta:"#",
    github:"#",
    linkdin:"#"
},{
    image:"https://user-images.githubusercontent.com/105535366/222389435-77dd1d02-3543-4d69-9b4f-c3dfeedeffb6.png",
    name:"Hilux",
    role:"Front End - Lead",
    description:"Responsible for the all front end development work in the club.",
    insta:"#",
    github:"#",
    linkdin:"#"
},{
    image:"https://user-images.githubusercontent.com/105535366/222389439-f3bf22db-3243-4b53-9ea0-747df8d3232d.png",
    name:"Tushar",
    role:"Back End - Lead",
    description:"Manages the entire software development lifecycle.",
    insta:"#",
    github:"#",
    linkdin:"#"
},{
    image:"https://user-images.githubusercontent.com/105535366/222389442-4b7ec2d0-bfbb-4106-b686-9aa735d6f1bc.png",
    name:"Bharath",
    role:"Logistics Officer",
    description:"Responsible for maintaining and recording all the activities taking place in the club.",
    insta:"#",
    github:"#",
    linkdin:"#"
},{
    image:"https://user-images.githubusercontent.com/105535366/222389447-89270e64-8ba1-41d8-b982-5999e056fcea.png",
    name:"Tamana",
    role:"Public Relations Officer",
    description:"Held to account for managing social media and engaging with folks.",
    insta:"#",
    github:"#",
    linkdin:"#"
},{
    image:"https://user-images.githubusercontent.com/105535366/222389458-4d4ec6bf-fea4-4a96-96c7-eccee29786a4.png",
    name:"Surya",
    role:"Game Development Lead",
    description:"A lead programmer for competitive programming.",
    insta:"#",
    github:"#",
    linkdin:"#"
}]
    return(
        <div className={styles.team_codex_div}>
            <h1 className={styles.team_codex_heading}>Team Of <span>CODEX</span></h1>
           <div  className={styles.member_blocks_team_codex}>{data.map((item)=>{
            return(
            <Member_block img={item.image}
                          name={item.name}
                          role={item.role}
                          description={item.description}
                          insta={item.insta}
                          github={item.github}
                          linkdin={item.linkdin}/>
            );
           })} 
           </div>
        </div>
    );
};
export default Teamcodex;
