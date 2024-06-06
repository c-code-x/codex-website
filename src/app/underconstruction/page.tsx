import Image from "next/image";
import styles from "../../styles/underconstruction.module.css";
import underconstruction from "../../assets/underconstruction.png";
import Link from "next/link";
const Underconst = () => {
    return (
        <div className={styles.under_const}>
            <div className={styles.under_const1}>
                <h1>Oops!</h1>
                <h3>Under construction</h3>
                <p>Be patient</p>
                <Link href={"/"}>
                    <button>Go Back</button>
                </Link>
            </div>
            <div className={styles.under_const2}>
                <Image src={underconstruction} alt="" />
            </div>
        </div>
    );
};
export default Underconst;
