import React, {useState, useRef, MutableRefObject} from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/event.module.css';
import Image from 'next/image';
import imag1 from '../assests/events/event_img1.jpg';
const Event_curosel=()=> {
  const [detailedeventcontainer,setDetailedeventcontainer]=useState(products[0]);
  console.log(detailedeventcontainer);
  const slider = React.useRef(null);
  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 1124,
        settings: {
          
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ]
  };
  const detailedevent = useRef<HTMLDivElement>(undefined!);
  const scrollDown = (ref: MutableRefObject<HTMLDivElement>) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div>
    <div className={styles.curosels_enets}>
    <h2 className={styles.curosels_enets_h2}>OUR EVENTS</h2>
    <div className={styles.curosels_enets_block}>
      <Slider ref={slider} {...settings}>
        {products?.map((item, index) => {
          return(
            <div className={styles.event_block}>
            <div className={styles.events_block_imgbx}><img src={`${item.image}`} alt="" /></div>
            <div className={styles.events_block_content}>
                <h3>{item.title}</h3>
                <button onClick={()=>{
                  setDetailedeventcontainer(item);
                  scrollDown(detailedevent);
                }}>Know more</button>
            </div>
        </div>
          );
        })}
      </Slider>
    </div>
    </div>
    <div ref={detailedevent} className={styles.event_detailcont}>
          <div className={styles.event_detailcont1}>
            <h2>{detailedeventcontainer.title}</h2>
            <div className={styles.display_mobile_img_e}><img  className={styles.display_mobile_img_event} src={`${detailedeventcontainer.image}`} alt=""  /></div>
            <p>{detailedeventcontainer.description}</p>
            <h4>No of Participants:</h4>
            <h3>{detailedeventcontainer.participants}</h3>
          </div>
          <div className={styles.event_detailcont2}>
            <img src={`${detailedeventcontainer.image}`} alt=""/>
          </div>
    </div>
    </div>
  );
}
export default Event_curosel;
const products = [
  {
    id:1,
    title:"Introduction to C programming",
    description:"The club took the initiative to introduce and make individuals perfect in C language through the workshop. Through this workshop, beginners were able to start their journey in C. 3rd, and 4th-year students were able to cover the basics, which helped them with placement preparation.",
    participants:"100",
    image:"https://user-images.githubusercontent.com/105535366/221369175-7947a980-14a0-4a17-a727-0910a6894bad.jpg"
  },
  {
    id:2,
    title:"Snap chat lens studio workshop",
    description:"The event's goal was to inform participants about the use of augmented reality using Snapchat. This would help them learn new concepts regarding augmented reality and implement them practically. CODEX collaborated with GitHub Community GITAM to organize this event.",
    participants:"100",
    image:"https://user-images.githubusercontent.com/105535366/221369051-b7094a08-ecc6-4e69-9d29-4874570f0dd0.jpg"
  },
  {
    id:3,
    title:"CODEX: Code against time",
    description:"The event's goal was to inform the participants about competitive programming and the difficulty of the questions in the outside world. The event aimed to boost the participants' logical thinking and programming skills. The contest consisted of very basic coding questions to test the fundamentals of coding in the participants. This would help the participants understand the fundamentals of programming very well.",
    participants:"100",
    image:"https://user-images.githubusercontent.com/105535366/221369044-de3cd5cc-4704-479a-ba62-3e93d872ad37.jpg"
  },
  {
    id:4,
    title:"Codify code to design",
    description:"Websites are created using the HTML language. HTML is the language used to create all the text and material you see online. This session aided participants in using HTML and CSS to create a project. HTML and CSS are the easiest languages comparatively and also very fundamental skills required in any web development project.",
    participants:"100",
    image:"https://user-images.githubusercontent.com/105535366/221369037-95514d87-8609-4094-a463-4c574f001263.jpg"
  },

  {
    id:5,
    title:"CODEX Coding contest",
    description:"The objective of the conference was to educate the participants about competitive programming and the complexity of real-world topics. The goal of the event was to improve the attendees' logical reasoning and programming abilities.",
    participants:"100",
    image:"https://user-images.githubusercontent.com/105535366/221369047-cc316fbf-0e3b-4753-91d9-3db74fa93e0e.jpg"
  },
  {
    id:6,
    title:"Booorring Show Python Episode",
    description:"The vision of CODEX Club is to make students more knowledgeable and enhance their coding and logical skills. As per the audience's expectation, we planned a python workshop to help students boost their skills from the basic to intermediate level. We scheduled a two-day workshop so every participant could understand clearly and actively participate in the workshop. ",
    participants:"100",
    image:"https://user-images.githubusercontent.com/105535366/221369054-ef8a568d-648f-4a8e-977a-78594ead5fe2.jpg"
  }
];