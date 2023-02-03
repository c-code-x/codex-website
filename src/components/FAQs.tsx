import styles from'../styles/FAQs.module.css';
import q from '../assests/quiresimg.png';
import man from '../assests/faqsguy.png';
import bg from '../assests/sec3bg.png';
import questions from '../assests/faq.json';
import Banner from "./Banner";
import Image from "next/image";

export default function Faqs(){
  return(
    <section>
      <div className={styles.maincontainer1}>
        <div className={styles.row2}>
          <div className={styles.faq}>
            <h1 className={styles.faq_head}>FAQ'S</h1>
            <p className={styles.faq_descp}>These are some of the frequently asked question on CODEX</p>
            <Banner>
              <div className='faq_box'>{questions.map((question) => (
                <Banner.Entity key={question.id}>
                  <Banner.Question>{question.question}</Banner.Question>
                  <Banner.Text>{question.answer}</Banner.Text>
                </Banner.Entity>
              ))}</div>
            </Banner>
          </div>
        </div>
        <div className={styles.row3}>
          <input type='text' placeholder='Any Queries ask here'>
          </input>
          <Image src={q} alt='send' />
        </div>
      </div>
        <div className={styles.row1}>
          <Image src={man} alt='man' />
        </div>
        <div className={styles.row4}>
          <Image src={bg} alt='bg'/>
        </div>
    </section>
    
  )
}