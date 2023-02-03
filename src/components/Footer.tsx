import styles from '../styles/Footer.module.css'
import logo from '../assests/codexlogo.png';
import twit from '../assests/twiiter.webp';
import whtapp from '../assests/whatsapp.webp';
import face from '../assests/Facebook.webp';
import insta from '../assests/instagram.webp';
import utube from '../assests/youtube.png';
import Image from "next/image";
export default function Footer(){
    return(
        <div>
            <div className={styles.footcontainer}>
                <div className={styles.logo}>
                    <Image src={logo} alt='logo' />
                    <p>A Gitam Club . We learn,We build and We share</p>
                    <p>codex_sig@gitam.in</p>
                </div>
                <div className={styles.row}>
                    <h3>Quick Links</h3>
                    <nav>
                        <ul>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>About</a></li>
                            <li><a href='#'>Domains</a></li>
                            <li><a href='#'>Members</a></li>
                            <li><a href='#'>Resources</a></li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.row}>
                    <h3>Services</h3>
                    <nav>
                        <ul>
                            <li><a href='#'>Resources</a></li>
                            <li><a href='#'>Practice typing</a></li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.row}>
                    <h3>Contact</h3>
                    <nav>
                        <ul>
                            <li><a href='#'>info@codex.com</a></li>
                            <li><a href='#'>123-456-789</a></li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.social}>
                    <h3>Follow</h3>
                    <div>
                        <a href='#'><Image className={styles.twit} src={twit} alt='twitter' /></a>
                        <a href='#'><Image src={face} alt='facebook'/></a>
                        <a href='#'><Image src={whtapp} alt='whatsapp'/></a>
                        <a href='#'><Image src={insta} alt='instagram'/></a>
                        <a href='#'><Image className={styles.yout} src={utube} alt='youtube'/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}