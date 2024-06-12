"use client";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import hamburger from "../../public/hamburger.svg";
import close from "../../public/close.png";
import Image from "next/image";
import codex from "../../public/codex.png";

export default function Navbar() {
    const [animate, setAnimate] = useState(false);
    const [open, setOpen] = useState(false);

    const sidebarRef = useRef(null);

    const toggleSidebar = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const closeSidebar = () => {
        setOpen(false);
    };
     useEffect(() => {
         const changeColor = () => {
             if (window.scrollY > 200) setAnimate(true);
             else setAnimate(false);
         };
         window.addEventListener("scroll", changeColor);
            return () => window.removeEventListener("scroll", changeColor);
     }, []);

    const handleClickOutside = (event: MouseEvent) => {
        const navbarButton = document.querySelector(".navbar-button");
        if (navbarButton && !navbarButton.contains(event.target as Node)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const ignorePaths = ["/", "/aboutus", "/members", "/events"];

    return (
        <div
            className={`${
                !ignorePaths.includes(usePathname() as string) ? "bg-custom-gradient" : (animate ? "bg-custom-gradient" : "bg-transparent")
            } flex flex-row justify-between font-sans top-0 w-screen h-[65px] fixed z-50  text-white`}>
            <div
                className="items-center flex  ml-2  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110
                    duration-300 ">
                <a className="hidden lg:block lg:font-bold lg:text-[24px]" href="/">
                    <Image src={codex} alt="logo" width={100} height={100} />
                </a>
                <a className="lg:hidden font-bold text-[24px]" href="/">
                    <Image src={codex} alt="logo" width={75} height={75} />
                </a>
            </div>
            <button
                onClick={toggleSidebar}
                className="lg:hidden bg-none p-4 border-none fixed z-50 right-5 navbar-button">
                <Image alt="menu" className="w-auto h-[25px]" src={open ? close : hamburger} />
            </button>

            <div className="hidden lg:flex lg:flex-row lg:items-center lg:text-[16px] lg:justify-between lg:text-white lg:font-sans lg:font-semibold lg:mr-[20px]">
                <div>
                    <a
                        className={`mx-3 ${
                            usePathname() === "/" ? "border-b-2 border-b-white" : ""
                        } hover:border-b-2 hover:border-b-white`}
                        href="/">
                        Home
                    </a>
                </div>
                <div>
                    <a
                        className={`mx-3 ${
                            usePathname() === "/aboutus" ? "border-b-2 border-b-white" : ""
                        } hover:border-b-2 hover:border-b-white`}
                        href="/aboutus">
                        About Us
                    </a>
                </div>
                <div>
                    <a
                        className={`mx-3 ${
                            usePathname() === "/members" ? "border-b-2 border-b-white" : ""
                        } hover:border-b-2 hover:border-b-white`}
                        href="/members">
                        Members
                    </a>
                </div>
                <div>
                    <a
                        className={`mx-3 ${
                            usePathname() === "/events" ? "border-b-2 border-b-white" : ""
                        } hover:border-b-2 hover:border-b-white`}
                        href="/events">
                        Events
                    </a>
                </div>
                <div>
                    <a
                        className={`mx-3 ${
                            usePathname() === "/resources" ? "border-b-2 border-b-white" : ""
                        } hover:border-b-2 hover:border-b-white`}
                        href="/resources">
                        Resources
                    </a>
                </div>
            </div>

            <div
                ref={sidebarRef}
                className={`lg:hidden h-screen ${
                    open ? "w-48" : "w-0"
                } duration-500 z-40 fixed right-0 bg-custom-gradient`}>
                <div className="flex flex-col mt-20 text-center text-[15px] text-white font-sans lg:font-semibold">
                    <div className="py-[20px]">
                        <a
                            className={`${
                                usePathname() === "/"
                                    ? "border-b-2 border-b-white"
                                    : "hover:border-b-2 hover:border-b-white"
                            } hover:border-b-2 hover:border-b-white`}
                            href="/">
                            Home
                        </a>
                    </div>
                    <div className="py-[20px]">
                        <a
                            className={`${
                                usePathname() === "/aboutus"
                                    ? "border-b-2 border-b-white"
                                    : "hover:border-b-2 hover:border-b-white"
                            } hover:border-b-2 hover:border-b-white`}
                            href="/aboutus">
                            About Us
                        </a>
                    </div>
                    <div className="py-[20px]">
                        <a
                            className={`${
                                usePathname() === "/members"
                                    ? "border-b-2 border-b-white"
                                    : "hover:border-b-2 hover:border-b-white"
                            } hover:border-b-2 hover:border-b-white`}
                            href="/members">
                            Members
                        </a>
                    </div>
                    <div className="py-[20px]">
                        <a
                            className={`${
                                usePathname() === "/events"
                                    ? "border-b-2 border-b-white"
                                    : "hover:border-b-2 hover:border-b-white"
                            } hover:border-b-2 hover:border-b-white`}
                            href="/events">
                            Events
                        </a>
                    </div>
                    <div className="py-[20px]">
                        <a
                            className={`${
                                usePathname() === "/resources"
                                    ? "border-b-2 border-b-white"
                                    : "hover:border-b-2 hover:border-b-white"
                            } hover:border-b-2 hover:border-b-white`}
                            href="/resources">
                            Resources
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
