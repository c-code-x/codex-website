import React, {useState} from "react";
const Resource =(props:any)=>{
    const [state, setState] = useState("none")
    const drop = () => {
        state == "none"? setState("block"):setState("none")
    }
    return(
        <div className="box">
           <div> <p>{props.question}</p>
            <button onClick={drop}>&#8964;</button>
           </div>
            <div>
                <p style={{display: state}}>{props.answer}</p>
            </div>
        </div>
    );
};
export default Resource;