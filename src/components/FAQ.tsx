import React, {useState} from "react";
import questions from "./FAQ.json"
import Link from "next/link";
<<<<<<< HEAD
import styles from '../styles/faq.module.css'
import FAQcomp from "@/components/FAQcomp";
const FAQ = () => {
    console.log(questions)
    return(
        <div className={styles.faqcontainer}>
            <h1>FAQ'S</h1>
            <p className={styles.tag}>These are some of the frequently asked question on CODEX</p>
            <div className= {styles.faqlayout}>
                {questions.map((item)=>{
                    return(
                        <div key={0} className={styles.viewBox}>
=======
import FAQcomp from "@/components/FAQcomp";
const FAQ = () => {
    const [state, setState] =  useState("block");
    console.log(questions)
    const drop = ()=>{
        state=="none"?setState("block"):setState("none")
    }
    return(
        <div>
            <h1>FAQ's</h1>
            <div className='faqlayout'>
                {questions.map((item)=>{
                    return(
                        <div key={0} className='viewBox'>
>>>>>>> 351b1610bf58207d554e840065fd4f91e326e670
                            <FAQcomp question={item.question} answer={item.answer}/>
                        </div>);
                })}
            </div>
        </div>
    )
}
export default FAQ