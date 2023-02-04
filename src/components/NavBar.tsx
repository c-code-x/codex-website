import React, {useEffect, useState} from "react";
import styles from '../styles/NavBar.module.css'
import logo from '../assests/logo_1.png'
import Image from "next/image";
import Link from "next/link";
import bars from '../assests/bars-solid.svg'


const NavBar = () => {
    const [animate, setAnimate] = useState(false)
    useEffect(()=>{
        const changeColor = ()=>{
            if(window.scrollY>400)
                setAnimate(true)
            else
                setAnimate(false)
        }
        window.addEventListener('scroll',changeColor)
    },[])

    return(
        <div className= {animate?"navactive":"nav"}>
            <div className={"nav_box1"}>
                <Image className={"logo_nav"} src={logo} alt="logo" />
            </div>
            <div className={"nav_box2"}>
                <ul className={"navlink"}>
                    <li><Link className={"link"} href={"#"}>Home</Link></li>
                    <li><Link className={"link"} href={"#"}>About</Link></li>
                    <li><Link className={"link"} href={"#"}>Members</Link></li>
                    <li><Link className={"link"} href={"#"}>Resources</Link></li>
                </ul>

            </div>
            <div className={"linkbtn"}>
                <Link href={"#"} ><Image className={"mobbtn"} src={bars} alt={"f"}/></Link>
            </div>
        </div>
    );
}
export default NavBar;