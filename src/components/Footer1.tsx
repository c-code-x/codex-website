import logo from '../assests/codexlogo.png';
import Image from "next/image";
import twit from '../assests/github1.png'
import face from '../assests/facebook.png'
import whtapp from '../assests/whatsapp.png'
import insta from '../assests/instagram.png'
import utube from '../assests/youtube1.png'
export default function Footer1(){
    return(
        <div>
            <footer>
   <div className="content">
     <div className="left box">
       <div className="logo">
        <Image src={logo} alt='logo' />
        <p>A Gitam Club . We learn,We build and We share</p>
        <p>codex_sig@gitam.in</p>
       </div>
     </div>
     <div className="middle box">
       <div className="topic">Quick Links</div>
       <div><a href="#"></a></div>
       <div><a href="#">Home</a></div>
       <div><a href="#">About</a></div>
       <div><a href="#">Domains</a></div>
       <div><a href="#">Members</a></div>
       <div><a href="#">Resources</a></div>
     </div>
     <div className="middle box">
        <div className="topic">Services</div>
        <div><a href="#">Resources</a></div>
        <div><a href="#">Practice typing</a></div>
    </div>
     <div className="lower">
        <div className="topic">Contact us</div>
        <div className="phone">
          <a className='contact_num' href="#"><i className="fas fa-phone-volume"></i>123-456-789</a>
        </div>
        <div className="email">
          <a className='contact_num' href="#"><i className="fas fa-envelope"></i>info@codex.com</a>
        </div>
      </div>
     <div className="right box">
       <div className="topic">Follow us</div>
         <div className="media-icons">
           <a href="#"><Image src={twit} alt=""/></a>
           <a href="#"><Image src={face} alt=""/></a>
           <a href="#"><Image src={whtapp} alt=""/></a>
           <a href="#"><Image src={insta} alt=""/></a>
           <a href="#"><Image src={utube} alt=""/></a>
         </div>
     </div>
   </div>
   <div className="footr">
    <div className="footr_1">
        <div className="foot1">Terms& Conditions</div>
        <div className="foot2">Back to Top</div>
    </div>
    <div className="foot3"><p>Copyright © 2023 <a href="#">CodeX</a> All rights reserved</p></div>
</div>
 </footer>
        </div>
    )
}