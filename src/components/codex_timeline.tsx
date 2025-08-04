import styles from "../styles/members.module.css";

const CodexTimeline = ({timeline}: any ) => (
    <>
        <div className={styles.timeline_head_cont}>
            <h1>Timeline</h1>
        </div>

        <div className={styles.timeline_data_cont}>
            {timeline.map((item: any, index: number) => (
                <div key={index} className={styles.timeline_block}>
                    <p className={styles.timeline_year_cont}>{item.year}</p>
                    <p className={styles.timeline_role_cont}>{item.role}</p>
                </div>
            ))}
        </div>
    </>
);

export default CodexTimeline;