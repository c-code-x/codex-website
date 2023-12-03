import image1 from "../assets/send_buttonfeed.png";
import send from "../assets/send_buttonfeed.png";
import styles from "../styles/Feedback.module.css";
import mail from "../assets/gmail.png";
import tele from "../assets/telephone.png";
import Image from "next/image";
import saly38 from "../assets/Saly_38_1.png";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Feedback = () => {
    const notify_success = () => {
        toast.success("Message sent successfully!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    };
    const notify_failure = () => {
        toast.warning("Please enter all the fields!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    };
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phno, setPhno] = useState("");
    const [branch, setBranch] = useState("");
    const [message, setMessage] = useState("");
    const reconvertor = () => {
        setName("");
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (name != "" && email != "" && phno != "" && branch != "" && message != "") {
            const Data = {
                Name: name,
                Email: email,
                Phno: phno.toString(),
                Branch: branch,
                Message: message,
                Timestamp: new Date().toDateString(),
            };
            axios
                .post("https://sheet.best/api/sheets/5dd8217a-5d4d-41cf-8a60-064536aeb051", Data)
                .then((res) => {});
            notify_success();
            reconvertor;
        } else {
            notify_failure();
        }
    };
    return (
        <div className={styles.feedback}>
            <p className={styles.askinG_feedback}>Willing to learn and work on projects with us?</p>
            <div className={styles.feedback_card}>
                <div className={styles.feedback_inputs_box}>
                    <div className={styles.feedback_input_box_header}>
                        <h1>Send us a Message</h1>
                    </div>
                    <form className={styles.feedback_inputs_box_form} onSubmit={handleSubmit}>
                        <div className={styles.feedback_inputs_box_form_1}>
                            <div className={styles.feedback_inputs_box_input1}>
                                <label className={styles.namelabel} htmlFor={"name"}>
                                    Your Name
                                </label>
                                <input
                                    className={styles.feedback_inputs_box_name}
                                    id={"name"}
                                    placeholder={"your name"}
                                    onChange={(e) => setName(e.target.value)}
                                    type={"text"}></input>
                            </div>
                            <div className={styles.input2}>
                                <label
                                    className={styles.emaillabel}
                                    htmlFor={"email"}
                                    placeholder={"CODEX"}>
                                    Email
                                </label>
                                <input
                                    className={styles.feedback_inputs_box_email}
                                    placeholder={"your mail-id"}
                                    onChange={(e) => setEmail(e.target.value)}
                                    id={"email"}
                                    type={"email"}></input>
                            </div>
                        </div>

                        <div className={styles.feedback_inputs_box_form_2}>
                            <div className={styles.input3}>
                                <label className={styles.branchlabel} htmlFor={"Branch"}>
                                    Branch
                                </label>
                                <input
                                    className={styles.feedback_inputs_box_branch}
                                    placeholder={"Ex : CSE, Banglore(Campus)"}
                                    onChange={(e) => setBranch(e.target.value)}
                                    id={"Branch"}
                                    type={"text"}></input>
                            </div>
                            <div className={styles.input4}>
                                <label className={styles.phnolabel} htmlFor={"phno"}>
                                    Phone Number
                                </label>
                                <input
                                    className={styles.feedback_inputs_box_phno}
                                    id={"phno"}
                                    placeholder={"+91 00000 00000"}
                                    onChange={(e) => setPhno(e.target.value)}
                                    type={"tel"}></input>
                            </div>
                        </div>
                        <div className={styles.feedback_inputs_box_form_3}>
                            <div className={styles.withpng}>
                                <div className={styles.input5}>
                                    <label className={styles.querylabel} htmlFor={"query"}>
                                        Send your Query
                                    </label>
                                    <textarea
                                        className={styles.feedback_inputs_box_query}
                                        name="query"
                                        placeholder={"Your feedback message..."}
                                        rows={4}
                                        cols={40}
                                        onChange={(e) => setMessage(e.target.value)}
                                        id={"query"}></textarea>
                                </div>
                                <button className={styles.feedback_submitbtn}>
                                    <Image alt={""} src={send} />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className={styles.feedback_contact_box}>
                    <h1 className={styles.feedback_contact_box_head}>Contact Information</h1>
                    <a
                        className={styles.feedback_contact_box_mail}
                        href={"mailto: codex_sig@gitam.in"}>
                        <Image src={mail} alt="mail" /> codex_sig@gitam.in
                    </a>
                </div>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            {/* <Image className={styles.saly38} src={saly38} alt="saly_38_1"/> */}
        </div>
    );
};

export default Feedback;
