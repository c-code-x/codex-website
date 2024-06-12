import Image from "next/image";
import image from "../assets/members/santosh_img.png";
import linkdin from "../assets/members/linkdinlogo.png";
import insta from "../assets/members/instalogo.png";
import github from "../assets/members/githublogo.png";
import styles from "../styles/members.module.css";
const Member_block = (props: any) => {
    return (
        <div className={styles.member_block_cont}>
            <div className={styles.member_block_cont_img_outer}>
                <Image
                    className={styles.member_block_cont_img_inner}
                    src={`${props.img}`}
                    alt=""
                    width={100}
                    height={100}
                />
            </div>
            <h1>{props.name}</h1>
            <h2>{props.role}</h2>
            <p>{props.description}</p>
            <div className={styles.ss_media_member_block}>
                <a href={`${props.insta}`} target={`${"_blank"}`}>
                    <Image
                        className={styles.member_block_cont_img_socialmedia}
                        src={insta}
                        alt=""
                    />
                </a>
                <a href={`${props.github}`} target={`${"_blank"}`}>
                    <Image
                        className={styles.member_block_cont_img_socialmedia}
                        src={github}
                        alt=""
                    />
                </a>
                <a href={`${props.linkdin}`} target={`${"_blank"}`}>
                    <Image
                        className={styles.member_block_cont_img_socialmedia}
                        src={linkdin}
                        alt=""
                    />
                </a>
            </div>
        </div>
    );
};
export default Member_block;
