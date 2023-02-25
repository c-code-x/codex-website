import Image from "next/image";
import image from "../assests/members/santosh_img.png";
import linkdin from "../assests/members/linkdinlogo.png";
import insta from "../assests/members/instalogo.png";
import github from "../assests/members/githublogo.png";
import styles from '../styles/members.module.css';
const Member_block=(props:any)=>{
    const data={
        image:"",
        name:"Santhosh",
        role:"CP - Lead",
        description:"A lead programmer for competitive programming.",
        insta:"#",
        github:"#",
        linkdin:"#"
    }
    return(
        <div className={styles.member_block_cont}>
            <div className={styles.member_block_cont_img_outer}>
                <Image className={styles.member_block_cont_img_inner} src={image} alt=""/>
            </div>
            <h1>{props.name}</h1>
            <h2>{props.role}</h2>
            <p>{props.description}</p>
            <div className={styles.ss_media_member_block}>
                <a href=""><Image className={styles.member_block_cont_img_socialmedia} src={insta} alt=""/></a>
                <a href=""><Image className={styles.member_block_cont_img_socialmedia} src={github} alt=""/></a>
                <a href=""><Image className={styles.member_block_cont_img_socialmedia} src={linkdin} alt=""/></a>
            </div>
        </div>
    );
};
export default Member_block;
