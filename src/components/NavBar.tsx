import React, {useEffect, useState} from "react";
import styles from '../styles/NavBar.module.css'
import logo from '../assests/logo_1.png'
import Image from "next/image";
import Link from "next/link";
import bars from '../assests/bars-solid.svg'


const NavBar = () => {
    const [animate, setAnimate] = useState(false)
    const [screen , setScreen] = useState(1001)
    const [state, setState] = useState("none")
    const changeState = ()=>{
        state=="none"? setState("block"):setState("none");
    }
    useEffect(()=>{
        if((window.innerWidth) <= 1000)
        {
            setScreen(window.innerWidth)
        }
        const changeColor = ()=>{
            if(window.scrollY>400)
                setAnimate(true)
            else
                setAnimate(false)
        }
        window.addEventListener('scroll',changeColor)
        window.addEventListener("resize", ()=>{setScreen(window.innerWidth)})
    },[])

    return(
        <div className= {animate?"navactive":"nav"}>
            <div className={"nav_box1"}>
                <Image className={"logo_nav"} src={logo} alt="logo" />
            </div>
            <div className={"nav_box2"}>
                <ul className={"navlink"} style={{display: (screen<=1000)?state:"block"}}>
                    <li><Link className={"link"} href={"#"}>Home</Link></li>
                    <li><Link className={"link"} href={"#"}>About</Link></li>
                    <li><Link className={"link"} href={"#"}>Members</Link></li>
                    <li><Link className={"link"} href={"#"}>Resources</Link></li>
                </ul>

            </div>
            <div className={"linkbtn"}>
                <button onClick={changeState} style={{background:"none", border: "none"}}><Image className={"mobbtn"} src={bars} alt={"f"}/></button>
            </div>
        </div>
    );
}
export default NavBar;