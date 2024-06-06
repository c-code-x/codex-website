import styles from "../styles/resources.module.css";
import back from "../assets/backendimg.png";
import competitive from "../assets/runningimg.png";
import cone from "../assets/Cones.jpg";
import wand from "../assets/Wands.jpg";
import rec from "../assets/Rectangle 33.png";
import Resource from "./Resource";
import Image from "next/image";
export default function Resources() {
    const data = [
        // {
        //     heading: "FRONT END DEVELOPMENT",
        //     description:
        //         "Front-end development is generally responsible for the aesthetic of the site. What you see on the screen is the front end, which includes menus, images, and other elements",
        //     image: "https://user-images.githubusercontent.com/105535366/222947401-0bba30e7-abc7-4b30-bc3d-da2a73401ffd.png",
        // },
        // {
        //     heading: "BACK END DEVELOPMENT",
        //     description:
        //         "Back end development is the process of creating everything that happens behind the scenes of a website or application that the user cannot see.",
        //     image: "https://user-images.githubusercontent.com/105535366/222947405-cf335c08-058c-4470-8537-186477959742.png",
        // },
        {
            heading: "COMPETITIVE PROGRAMMING",
            description:
                "Competitive programming is a sport where coders solve algorithmic problems within a time limit, enhancing their coding and problem-solving skills. It involves competing on online platforms to write efficient and correct programs.",
            image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/Competitive-Programming.jpg",
            diversionLink: "/resources/cp",
        },
    ];
    return (
        <div className={styles.resoucespage_entire}>
            <div className={styles.resourcespage}>
                <div className={styles.rscheader}>
                    <h1>Resources</h1>
                </div>
                <div className={styles.rlayout}>
                    {data.map((item, index) => {
                        return (
                            <div key={index} className={styles.viewBx}>
                                <Resource
                                    heading={item.heading}
                                    description={item.description}
                                    image={item.image}
                                    diversionLink={item.diversionLink}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* <div className={styles.leftimg}>
            <Image src={cone} alt='coneimg'/>
          </div>
      <div className={styles.rightimg}>
            <Image src={wand} alt='wandimg'/>
        </div> */}
        </div>
    );
}
