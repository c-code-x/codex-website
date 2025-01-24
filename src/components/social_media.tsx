import Image from "next/image";
import styles from "../styles/members.module.css";
import linkdin from "../assets/members/linkdinlogo.png";
import insta from "../assets/members/instalogo.png";
import github from "../assets/members/githublogo.png";

const Social_media = (props: any) => {
  return (
        <>
            <a href={`${props.insta}`} target={`${"_blank"}`}>
                <Image
                    className={styles.memcard_smedia_img}
                    src={insta}
                    alt=""
                />
            </a>
            <a href={`${props.github}`} target={`${"_blank"}`}>
                <Image
                    className={styles.memcard_smedia_img}
                    src={github}
                    alt=""
                />
            </a>
            <a href={`${props.linkdin}`} target={`${"_blank"}`}>
                <Image
                    className={styles.memcard_smedia_img}
                    src={linkdin}
                    alt=""
                />
            </a>
        </>
  );

}

export default Social_media;
