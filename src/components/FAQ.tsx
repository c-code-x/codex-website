import React, {useState} from "react";
import questions from "./FAQ.json"
import Link from "next/link";
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
                            <FAQcomp question={item.question} answer={item.answer}/>
                        </div>);
                })}
            </div>
        </div>
    )
}
export default FAQ