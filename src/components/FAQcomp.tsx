import React, {useState} from "react";
<<<<<<< HEAD
import image1 from "../assests/Untitled-4 7.png"
import image2 from "../assests/Untitled-4 8.png"
import styles from "../styles/faqcomp.module.css"
import Link from "next/link";
import Image from "next/image";
const FAQcomp =(props:any)=>{
=======
const Resource =(props:any)=>{
>>>>>>> 351b1610bf58207d554e840065fd4f91e326e670
    const [state, setState] = useState("none")
    const drop = () => {
        state == "none"? setState("block"):setState("none")
    }
    return(
<<<<<<< HEAD
        <div className={styles.box_faq}>
           <div className={styles.question}>
               <button className={styles.button} onClick={drop}>
               <div>
                   <p>{props.question}</p>
               </div>
                   <Image className={styles.img} src={state === "none" ? image1 : image2}  alt={"1"}/>
               </button>

           </div>
            <div className={styles.answer}>
                <div>
                <p style={{display: state}}>{props.answer}</p>
                </div>
=======
        <div className="box">
           <div> <p>{props.question}</p>
            <button onClick={drop}>&#8964;</button>
           </div>
            <div>
                <p style={{display: state}}>{props.answer}</p>
>>>>>>> 351b1610bf58207d554e840065fd4f91e326e670
            </div>
        </div>
    );
};
<<<<<<< HEAD
export default FAQcomp;
=======
export default Resource;
>>>>>>> 351b1610bf58207d554e840065fd4f91e326e670
