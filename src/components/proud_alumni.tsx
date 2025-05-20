import Member_block from "./member_block";
import styles from "../styles/members.module.css";
const Proud_alumni = ({openMemCard}:any) => {
    const data = [
        {
            image: "https://i.ibb.co/qF0v6b6/Ellipse-19.png",
            name: "Manoj",
            role: "Founder / Non-Tech Admin",
            description:
                "Founder of CODEX. Established Codex and responsible of ensuring the smooth flow of events ",
            insta: "https://www.instagram.com/_m_a_n_o_j_95/",
            github: "https://github.com/manoj9573",
            linkdin: "http://www.linkedin.com/in/manoj-k-4224941ba",
            timeline: [
                {year: "2021", role: "Founder - Codex"},
                {year: "2022", role: "Non-Tech Admin"}
              ]
        },
        {
            image: "https://i.ibb.co/LxYNws6/Ellipse-16.png",
            name: "Jaideep C",
            role: "Founder / Tech Admin",
            description:
                "Founder of CODEX.Tech enthusiast, Public speaker, Mentor to Current team , Motivator etc",
            insta: "https://instagram.com/c.jai.07",
            github: "https://github.com/Jaideep-C",
            linkdin: "https://www.linkedin.com/in/jaideep-c",
            timeline: [
                        {year: "2021", role: "Founder - Codex"},
                        {year: "2022", role: "Non-Tech Admin"}
                      ]
        },
        {
            image: "https://i.ibb.co/MSvGCBs/Ellipse-21.png",
            name: "Sayan",
            role: "Competitive Programming Lead",
            description:
                "Established and Contributed to Competitive Programming domain in CODEX , initiated CODEX's trade mark event Coding contest/Hackathon",
            insta: "https://www.instagram.com/_isayandutta_/",
            github: "https://github.com/sayand0122",
            linkdin: "https://www.linkedin.com/in/sayan-dutta-117a8a1a8/",
            timeline: [
                        {year: "2021", role: "CP Lead"}
                      ]
        },
        {
            image: "https://i.ibb.co/mH47WZL/Ellipse-16-2.png",
            name: "Vishal",
            role: "Marketing Officer",
            description:
                "Made CODEX a well known club by marketing all its events and publicizing it throughout GITAM",
            insta: "https://instagram.com/kito__011?igshid=YmJhNjkzNzY=",
            github: "https://github.com/Legend-1125",
            linkdin: "https://www.linkedin.com/in/vishal-sharma-67321b1a4",
            timeline: [
                        {year: "2021", role: "Marketing Officer"}
                      ]
        },
        {
            image: "https://i.ibb.co/9HjBq9R/Ellipse-16-1.png",
            name: "Sujana",
            role: "Agent",
            description:
                "Hey Sujana Here! I was an agent at codex and the experience was really great. Being a part of the Organizing team during the hackathon i have learnt a lot.",
            insta: "https://instagram.com/sujanaa.reddy",
            github: "https://github.com/sujana-kamasany",
            linkdin: "https://www.linkedin.com/in/sujana--k",
            timeline: [
                        {year: "2021", role: "Agent"}
                      ]
        },
        {
            image: "https://i.ibb.co/VVhgZFp/Ellipse-27.png",
            name: "Navya sree",
            role: "Web devoloper",
            description:
                "The First Web Dev lead of CODEX , brought Web Devleopment domain and cultivated its intrest among Gitamites",
            insta: "https://www.instagram.com/sree.nav/",
            github: "https://github.com/navya-005",
            linkdin: "http://www.linkedin.com/in/navya-sree-mallela-b0a4931ba",
            timeline: [
                        {year: "2021", role: "Web devoloper"}
                      ]
        },
        {
            image: "https://i.ibb.co/qMRFTgY/Ellipse-23.png",
            name: "Madhulika",
            role: "Front End - Lead",
            description:
                "Developed websites for hackathons and helped design posters and banners for events.",
            insta: "https://www.instagram.com/madhu.akumalla/",
            github: "https://github.com/madhulika01",
            linkdin: "https://www.linkedin.com/in/madhulika-akumalla-a984ab1ba/",
            timeline: [
                        {year: "2021", role: "Front End - Lead"}
                      ]
        },
        {
            image: "https://i.ibb.co/qyq2QKq/Ellipse-25.png",
            name: "Nishita",
            role: "Content Writer",
            description:
                "Supported CODEX by being the Incharge of documentation and the content creatives in the club.",
            insta: "https://www.instagram.com/_goalie_7081/",
            github: "https://github.com/Nishitha-Motakatla",
            linkdin: "https://www.linkedin.com/in/nishitha-motakatla-187465193",
            timeline: [
                        {year: "2021", role: "Content Writer"}
                      ]
        },
        {
            image: "https://i.ibb.co/fN1zPCk/Ellipse-16-3.png",
            name: "Arief",
            role: "Visual arts officer",
            description: "Lead of the beautiful poster and visual elements in the club.",
            insta: "https://instagram.com/ariefbasha07?igshid=YmJhNjkzNzY=",
            github: "https://github.com/AriefB18",
            linkdin: "https://www.linkedin.com/in/arief-basha-a3b558236",
            timeline: [
                        {year: "2021", role: "Visual arts officer"}
                      ]
        },
    ];
    return (
        <div className={styles.proud_alumni_codex}>
            <div className={styles.team_codex_div}>
                <h1 className={styles.team_codex_heading}>
                    <span>v.1.0</span>
                </h1>
                <div className={styles.member_blocks_team_codex}>
                    {data.map((item, index) => (
                        <Member_block
                            img={item.image}
                            name={item.name}
                            role={item.role}
                            description={item.description}
                            insta={item.insta}
                            github={item.github}
                            linkdin={item.linkdin}
                            key={index}
                            onClick = {() => openMemCard(item)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Proud_alumni;
