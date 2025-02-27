import Image from "next/image";
import styles from "@/styles/members.module.css";
import Social_media from './social_media';
import Codex_Timeline from "./codex_timeline";
const Member_card = (props: any) => {
    return (
    <div className={styles.memcardBg}>

      <div className={styles.memcard}>

        <header className={styles.memcard_header}>
          <button onClick={props.handleClose} className={styles.closebtn}>X</button>
        </header>

        <div className={styles.memcard_head_cont}>
          <div className={styles.memcard_img_cont}>
            <Image 
                src={`${props.img}`} alt=""
                width={120}
                height={120}
            />
          </div>

          <div className={styles.memcard_details_cont}>
            <div className={styles.memcard_role_cont}>
              <h1>{props.role}</h1>
            </div>
            
            <div className={styles.memcard_name_cont}>
              <h1>{props.name}</h1>
            </div>

            <div className={styles.memcard_desc_cont}>
              <p>{props.description}</p>
            </div>
          </div>

          <div className={styles.memcard_smedia_cont}>
                <Social_media
                  insta = {props.smedia.insta}
                  github = {props.smedia.github}
                  linkdin = {props.smedia.linkdin}
                />
          </div>

        </div>
          <Codex_Timeline timeline={props.timeline}/>
      </div>
    </div>
    )
};
export default Member_card;