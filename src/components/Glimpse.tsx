import styles from '../styles/Glimpse.module.css'
import saly from'../assests/Saly-10_1.png'
import Image from "next/image";
export default function Glimpse(){
    return(
        <div className={styles.homepage}>
            <section className={styles.sec1}>
                <div className={styles.mainContainer}>
                    <div className={styles.container1}>
                        <div></div>
                        <div className={styles.info}>
                            <h1>Hello, We are <span className={styles.typed}>CODEX</span></h1>
                            <p>
                                CODEX is a student-run organization at the University of GITAM <br/>
                                that aims to provide students with the resources and opportunities to <br/>
                                learn about computer science and software development. We learn, <br/>
                                we build, and we share!
                            </p>
                            <div className={styles.btnContainer}>
                                <button>Explore now</button>
                            </div>
                        </div>
                        <div className={styles.img1Container}>
                            <Image src={saly} alt='saly'/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}