"use client";
import logo from "../../public/codex_full.png";
import { useRouter } from "next/router";
import Image from "next/image";
import git from "../assets/github-white-svg.svg";
import disc from "../assets/discord-svg.svg";
import insta from "../assets/instagram-svg.svg";
import utube from "../assets/youtube-svg.svg";
import Link from "next/link";
export default function Footer() {
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div>
            <footer>
                <div className="content">
                    <div className="left box">
                        <div className="">
                            <Image src={logo} alt="logo" className="w-[250px] h-auto" />
                        </div>
                    </div>
                    <div className="middle box">
                        <div className="topic">Quick Links</div>
                        <div>
                            <Link href="/">Home</Link>
                        </div>
                        <div>
                            <Link href="/aboutus">About</Link>
                        </div>
                        <div>
                            <Link href="/underconstruction">Domains</Link>
                        </div>
                        <div>
                            <Link href="/underconstruction">members</Link>
                        </div>
                        <div>
                            <Link href="/underconstruction">Resources</Link>
                        </div>
                    </div>
                    <div className="middle box">
                        <div className="topic">Services</div>
                        <div>
                            <Link href="/underconstruction">Resources</Link>
                        </div>
                        <div>
                            <Link href="/underconstruction">Practice typing</Link>
                        </div>
                    </div>
                    <div className="lower">
                        <div className="topic">Contact us</div>
                        <div className="email">
                            <a className="contact_num" href="mailto: codexclub@gitam.in">
                                <i className="fas fa-envelope"></i>codexclub@gitam.in
                            </a>
                        </div>
                    </div>
                    <div className="right box">
                        <div className="topic">Follow us</div>
                        <div className="media-icons">
                            <a href="https://discord.gg/QaytX8tA">
                                <Image src={disc} alt="" />
                            </a>
                            <a href="https://github.com/CodeX-GITAM">
                                <Image src={git} alt="" />
                            </a>
                            <a href="https://www.instagram.com/codex_gitam/">
                                <Image src={insta} alt="" />
                            </a>
                            <a href="https://www.youtube.com/@codexgitam3817">
                                <Image src={utube} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footr">
                    <div className="footr_1">
                        <div className="foot1">Terms& Conditions</div>
                        <div className="foot2" onClick={goToTop}>
                            Back to Top
                        </div>
                    </div>
                    {/* <div className="foot3"><p>Copyright © 2023 <Link href="/LandingPage">CodeX</Link> All rights reserved</p></div> */}
                </div>
            </footer>
        </div>
    );
}
