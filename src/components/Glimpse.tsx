import styles from "../styles/Glimpse.module.css";
import saly from "../assests/Saly-10_1.png";
import Image from "next/image";
import Calender from "@/components/Calender";
import { MouseEventHandler, MutableRefObject, useRef } from "react";
import { Calendar } from "react-calendar";
const Glimpse = () => {
<<<<<<< Updated upstream
    const calendar = useRef<HTMLDivElement>(undefined!);
    const scrollDown = (ref: MutableRefObject<HTMLDivElement>) => {
        console.log(ref);
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: "smooth",
        });
    };
    return (
        <div>
            <div className={styles.container1}>
                <div className={styles.info}>
                    <h1>
                        Hello, We are <span className={styles.typed}>CODEX</span>
                    </h1>
                    <p>
                        CODEX is a student-run organization at the University of GITAM <br />
                        that aims to provide students with the resources and opportunities to <br />
                        learn about computer science and software development. We learn, <br />
                        we build, and we share!
                    </p>
                    <div onClick={() => scrollDown(calendar)} className={styles.btnContainer}>
                        <button>Explore now</button>
                    </div>
                </div>
                <div className={styles.img1Container}>
                    <Image src={saly} alt="saly" />
                </div>
            </div>
            <div ref={calendar}>
                <Calender />
            </div>
=======
  const calendar = useRef<HTMLDivElement>(undefined!);
  const scrollDown = (ref: MutableRefObject<HTMLDivElement>) => {
    console.log(ref);
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className={styles.container1}>
        <div className={styles.info}>
          <h1>
            Hello, We are <span className={styles.typed}>CODEX</span>
          </h1>
          <p>
            {" "}
            <br />
            that aims to provide students with the resources and opportunities
            to <br />
            learn about computer science and software development. We learn,{" "}
            <br />
            we build, and we share!
          </p>
          <div
            onClick={() => scrollDown(calendar)}
            className={styles.btnContainer}
          >
            <button>Explore now</button>
          </div>
>>>>>>> Stashed changes
        </div>
    );
};
export default Glimpse;
