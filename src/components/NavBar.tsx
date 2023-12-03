import React, { useEffect, useState } from "react";
import styles from "../styles/NavBar.module.css";
import logo from "../assets/logo_1.png";
import Image from "next/image";
import Link from "next/link";
import bar from "../assets/burger.png";
import arrow from "../assets/rightarrow.png";

const NavBar = () => {
    const [animate, setAnimate] = useState(false);
    const [screen, setScreen] = useState(1001);
    const [state, setState] = useState("none");
    const changeState = () => {
        state == "none" ? setState("block") : setState("none");
    };
    useEffect(() => {
        if (window.innerWidth <= 800) {
            setScreen(window.innerWidth);
        }
        const changeColor = () => {
            if (window.scrollY > 400) setAnimate(true);
            else setAnimate(false);
        };
        window.addEventListener("scroll", changeColor);
        window.addEventListener("resize", () => {
            setScreen(window.innerWidth);
        });
    }, []);

    return (
        <div className={animate ? "navactive" : "nav"}>
            <div className={"nav_box1"}>
                <Link href={"/"}>
                    <Image className={"logo_nav"} src={logo} alt="logo" />
                </Link>
            </div>
            <div className={"nav_box2"}>
                <ul className={"navlink"} style={{ display: screen <= 800 ? state : "block" }}>
                    <li className="li_nav">
                        <Link className={"link"} href={"/"}>
                            Home
                        </Link>
                    </li>
                    <li className="li_nav">
                        <Link className={"link"} href={"/AboutUs"}>
                            About Us
                        </Link>
                    </li>
                    <li className="li_nav">
                        <Link className={"link"} href={"/Members"}>
                            Members
                        </Link>
                    </li>
                    <li className="li_nav">
                        <Link className={"link"} href={"/Events"}>
                            Events
                        </Link>
                    </li>
                    <li className="li_nav">
                        <Link className={"link"} href={"/UnderConstruction"}>
                            Resources
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={"linkbtn"}>
                <button onClick={changeState} style={{ background: "none", border: "none" }}>
                    <Image className={"mobbtn"} src={state == "block" ? arrow : bar} alt={"f"} />
                </button>
            </div>
        </div>
    );
};
export default NavBar;
