import React, { useState } from "react";
import image1 from "../assets/Untitled-4 7.png";
import image2 from "../assets/Untitled-4 8.png";
import styles from "../styles/faqcomp.module.css";
import Link from "next/link";
import Image from "next/image";
const FAQcomp = (props: any) => {
    const [state, setState] = useState("none");
    const drop = () => {
        state == "none" ? setState("block") : setState("none");
    };
    return (
        <div className={styles.box_faq}>
            <div className={styles.question}>
                <button className={styles.button} onClick={drop}>
                    <div>
                        <p>{props.question}</p>
                    </div>
                    <Image
                        className={styles.img}
                        src={state === "none" ? image1 : image2}
                        alt={"1"}
                    />
                </button>
            </div>
            <div className={styles.answer}>
                <div>
                    <p style={{ display: state }}>{props.answer}</p>
                </div>
            </div>
        </div>
    );
};
export default FAQcomp;
