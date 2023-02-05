import image1 from '../assests/send_buttonfeed.png'
import send from '../assests/send_buttonfeed.png'
import styles from '../styles/Feedback.module.css';
import mail from '../assests/gmail.png'
import tele from '../assests/telephone.png'
import Image from "next/image";
const Feedback = () => {
    const handleSubmit = () => {
        console.log("Underdev")
    }
    return (
        <div>
            <p className={styles.askinG_feedback}>Willing to learn and work on projects with us?</p>
        <div className={styles.feedback_card}>
            <div className={styles.feedback_inputs_box}>
                <div className={styles.feedback_input_box_header}>
                    <h1>Send us a Message</h1>  
                </div>
                <form className={styles.feedback_inputs_box_form}>
                    <div className={styles.feedback_inputs_box_form_1}>
                    <div className={styles.feedback_inputs_box_input1}>
                        <label className={styles.namelabel} htmlFor={"name"}>Your Name</label>
                        <input className={styles.feedback_inputs_box_name} id={"name"} type={"text"}></input>
                    </div>
                    <div className={styles.input2}>
                        <label className={styles.emaillabel} htmlFor={"email"} placeholder={"CODEX"}>Email</label>
                        <input className={styles.feedback_inputs_box_email} id={"email"} type={"email"}></input>
                    </div>
                    </div>
                    
                    <div className={styles.feedback_inputs_box_form_2}>
                    <div className={styles.input3}>
                        <label className={styles.branchlabel} htmlFor={"Branch"}>Branch</label>
                        <input className={styles.feedback_inputs_box_branch} id={"Branch"} type={"text"}></input>
                    </div>
                    <div className={styles.input4}>
                        <label className={styles.phnolabel} htmlFor={"phno"}>Phone Number</label>
                        <input className={styles.feedback_inputs_box_phno} id={"phno"} type={"tel"}></input>
                    </div>
                    </div>
                    <div className={styles.feedback_inputs_box_form_3}>
                    <div className={styles.withpng}>
                        <div className={styles.input5}>
                            <label className={styles.querylabel} htmlFor={"query"}>Send your Query</label>
                            <textarea className={styles.feedback_inputs_box_query} name="query" rows={4} cols={40} id={"query"}></textarea>
                        </div>
                        <button className={styles.feedback_submitbtn} onSubmit={handleSubmit}><Image alt={""} src={send}/></button>
                    </div>
                    </div>
                </form>
            </div>
            <div className={styles.feedback_contact_box}>
                <h1 className={styles.feedback_contact_box_head}>Contact Information</h1>
                <p className={styles.feedback_contact_box_phone}><Image src={tele} alt="mail"/> +91 7439163646 </p>
                <a className={styles.feedback_contact_box_mail} href={"mailto: codex_sig@gitam.in"} ><Image src={mail} alt="mail"/> codex_sig@gitam.in</a>
            </div>
        </div>
        </div>
    );
}

export default Feedback;
