import React, {useEffect, useState} from "react";
import styles from '../styles/NavBar.module.css'
import logo from '../assests/logo_1.png'
import Image from "next/image";
import Link from "next/link";
import bar from '../assests/burger.png';
import arrow from '../assests/rightarrow.png';

const NavBar = () => {
    const [animate, setAnimate] = useState(false)
    const [screen , setScreen] = useState(1001)
    const [state, setState] = useState("none")
    const changeState = ()=>{
        state=="none"? setState("block"):setState("none");
    }
    useEffect(()=>{
<<<<<<< HEAD
        if((window.innerWidth) <= 800)
=======
        if((window.innerWidth) <= 1000)
>>>>>>> 351b1610bf58207d554e840065fd4f91e326e670
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
<<<<<<< HEAD
                <ul className={"navlink"} style={{display: (screen<=800)?state:"block"}}>
                    <li className="li_nav"><Link className={"link"} href={"#"}>Home</Link></li>
                    <li className="li_nav"><Link className={"link"} href={"#"}>About</Link></li>
                    <li className="li_nav"><Link className={"link"} href={"#"}>Members</Link></li>
                    <li className="li_nav"><Link className={"link"} href={"#"}>Resources</Link></li>
=======
                <ul className={"navlink"} style={{display: (screen<=1000)?state:"block"}}>
                    <li><Link className={"link"} href={"#"}>Home</Link></li>
                    <li><Link className={"link"} href={"#"}>About</Link></li>
                    <li><Link className={"link"} href={"#"}>Members</Link></li>
                    <li><Link className={"link"} href={"#"}>Resources</Link></li>
>>>>>>> 351b1610bf58207d554e840065fd4f91e326e670
                </ul>

            </div>
            <div className={"linkbtn"}>
<<<<<<< HEAD
                <button onClick={changeState} style={{background:"none", border: "none"}}><Image className={"mobbtn"} src={state=="block"?arrow:bar} alt={"f"}/></button>
=======
                <button onClick={changeState} style={{background:"none", border: "none"}}><Image className={"mobbtn"} src={bars} alt={"f"}/></button>
>>>>>>> 351b1610bf58207d554e840065fd4f91e326e670
            </div>
        </div>
    );
}
export default NavBar;