import React from "react";
import styles from "../styles/UnderDev.module.css"
const UnderDev = () => {
    const DUMMY = () =>{}
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <h1 className={styles.header}>
                    Coming up soon!
                </h1>
                <p className={styles.info}>This feature is under development</p>
                <button className={styles.button} onClick={DUMMY}>back to home</button>
            </div>
        </div>

    );
}

export default UnderDev;
