import Member_block from "./member_block";
import styles from '../styles/members.module.css'
const Teamcodex =()=>{
const data=[{
    image:"../assests/members/santosh_img.png",
    name:"Santhosh",
    role:"CP - Lead",
    description:"A lead programmer for competitive programming.",
    insta:"#",
    github:"#",
    linkdin:"#"
},{
    image:"../assests/members/santosh_img.png",
    name:"Punith",
    role:"Tech - Lead",
    description:"Contributing his service as a Tech admin.",
    insta:"#",
    github:"#",
    linkdin:"#"
},{
    image:"../assests/members/santosh_img.png",
    name:"Hilux",
    role:"Front End - Lead",
    description:"Responsible for the all front end development work in the club.",
    insta:"#",
    github:"#",
    linkdin:"#"
},{
    image:"../assests/members/santosh_img.png",
    name:"Santhosh",
    role:"CP - Lead",
    description:"A lead programmer for competitive programming.",
    insta:"#",
    github:"#",
    linkdin:"#"
},{
    image:"../assests/members/santosh_img.png",
    name:"Punith",
    role:"Tech - Lead",
    description:"Contributing his service as a Tech admin.",
    insta:"#",
    github:"#",
    linkdin:"#"
},{
    image:"../assests/members/santosh_img.png",
    name:"Hilux",
    role:"Front End - Lead",
    description:"Responsible for the all front end development work in the club.",
    insta:"#",
    github:"#",
    linkdin:"#"
},{
    image:"../assests/members/santosh_img.png",
    name:"Santhosh",
    role:"CP - Lead",
    description:"A lead programmer for competitive programming.",
    insta:"#",
    github:"#",
    linkdin:"#"
},{
    image:"../assests/members/santosh_img.png",
    name:"Punith",
    role:"Tech - Lead",
    description:"Contributing his service as a Tech admin.",
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
