import styles from "../styles/resource.module.css";
import Image from "next/image";
const Resource = (props: any) => {
    return (
        <a href={props.diversionLink} className="overflow-hidden">
            {/* <div className={styles.box}>
                <Image
                    src={`${props.image}`}
                    alt="front-end"
                    className={styles.img1}
                    width={500}
                    height={500}
                />
                <h3 className="font-bold">{props.heading}</h3>
                <p>{props.description}</p>
                <Image src={props.desg} alt="rec" className={styles.img2} />
            </div> */}
            <div className="flex w-[300px] md:w-[600px] flex-col bg-white border shadow-xl rounded-xl">
                <Image
                    width={100}
                    height={100}
                    className="w-full h-[200px] rounded-t-xl"
                    src={props.image}
                    alt="Image Description"
                />
                <div className="p-4 md:p-5">
                    <h3 className="text-lg font-bold text-gray-800">{props.heading}</h3>
                    <p className="mt-1 text-gray-500">
                        {props.description}
                    </p>
                </div>
            </div>
        </a>
    );
};
export default Resource;
