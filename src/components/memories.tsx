import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styles from "../styles/memories.module.css";
import img1 from "../assests/mem_img1.png";
import img2 from "../assests/memories/mem1.png";
import img3 from "../assests/memories/mem2.png";
import img4 from "../assests/memories/mem3.png";
import img5 from "../assests/memories/mem4.png";
import img6 from "../assests/memories/mem5.png";
import img7 from "../assests/memories/hackathon1.jpg";
import img8 from "../assests/memories/hacakathon2.jpg";
import img9 from "../assests/memories/hackathon3.jpg";
import img10 from "../assests/memories/hackathon4.jpg";
import img11 from "../assests/memories/hackathon5.jpg";
import img12 from "../assests/memories/WhatsApp Image 2023-07-11 at 21.19.00 (1).jpeg";
import img13 from "../assests/memories/IMG-20230302-WA0045.jpg";
import img14 from "../assests/memories/Rectangle 21.png";
import img15 from "../assests/memories/Rectangle 21 (1).png";
import img16 from "../assests/memories/Rectangle 21 (2).png";
import img17 from "../assests/memories/Rectangle 21 (3).png";
import img18 from "../assests/memories/Rectangle 21 (4).png";
import img19 from "../assests/memories/Rectangle 21 (5).png";
import img20 from "../assests/memories/Rectangle 21 (6).png";
import img21 from "../assests/memories/Rectangle 21 (7).png";
import img22 from "../assests/memories/Rectangle 21 (8).png";
import Image from "next/image";
import dynamic from "next/dynamic";
const Memories = () => {
    const handleDragStart = (e: any) => e.preventDefault();
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1200: { items: 3 },
    };
    const items = [
        <Image
            key={1}
            alt={"1"}
            className={styles.mem_images}
            src={img1}
            onDragStart={handleDragStart}
            role="presentation"
        />,
        <Image
            key={2}
            alt={"2"}
            className={styles.mem_images}
            src={img2}
            onDragStart={handleDragStart}
            role="presentation"
        />,
        <Image
            key={3}
            alt={"3"}
            className={styles.mem_images}
            src={img3}
            onDragStart={handleDragStart}
            role="presentation"
        />,
        <Image
            key={4}
            alt={"4"}
            className={styles.mem_images}
            src={img4}
            onDragStart={handleDragStart}
            role="presentation"
        />,
        <Image
            key={5}
            alt={"5"}
            className={styles.mem_images}
            src={img5}
            onDragStart={handleDragStart}
            role="presentation"
        />,
        <Image
            key={14}
            alt={"14"}
            className={styles.mem_images}
            src={img14}
            onDragStart={handleDragStart}
            role="presentation"
        />,
        <Image
            key={15}
            alt={"15"}
            className={styles.mem_images}
            src={img15}
            onDragStart={handleDragStart}
            role="presentation"
        />,
        <Image
            key={16}
            alt={"16"}
            className={styles.mem_images}
            src={img16}
            onDragStart={handleDragStart}
            role="presentation"
        />,
        <Image
            key={17}
            alt={"17"}
            className={styles.mem_images}
            src={img17}
            onDragStart={handleDragStart}
            role="presentation"
        />,
        <Image
            key={18}
            alt={"18"}
            className={styles.mem_images}
            src={img18}
            onDragStart={handleDragStart}
            role="presentation"
        />,
        <Image
            key={19}
            alt={"19"}
            className={styles.mem_images}
            src={img19}
            onDragStart={handleDragStart}
            role="presentation"
        />,
        <Image
            key={20}
            alt={"20"}
            className={styles.mem_images}
            src={img20}
            onDragStart={handleDragStart}
            role="presentation"
        />,
        <Image
            key={21}
            alt={"21"}
            className={styles.mem_images}
            src={img21}
            onDragStart={handleDragStart}
            role="presentation"
        />,
        <Image
            key={22}
            alt={"22"}
            className={styles.mem_images}
            src={img22}
            onDragStart={handleDragStart}
            role="presentation"
        />,
        /*<Image
            key={10}
            alt={"10"}
            className={styles.mem_images}
            src={img10}
            onDragStart={handleDragStart}
            role="presentation"
        />,<Image
            key={11}
            alt={"11"}
            className={styles.mem_images}
            src={img11}
            onDragStart={handleDragStart}
            role="presentation"
        />,*/

    ];
    return (
        <div className={styles.maincontainer_mem}>
            <div className={styles.head_mem}>
                <h1>
                    Our <span>Memories</span>
                </h1>
            </div>
            <AliceCarousel
                autoPlay
                infinite
                animationType="fadeout"
                autoPlayInterval={1000}
                animationDuration={1000}
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy={styles.alternate}
            />
        </div>
    );
};
export default dynamic(() => Promise.resolve(Memories), { ssr: false });
