import React from 'react';
import { MdWifiCalling1 } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaYoutube ,FaFacebookF,FaLinkedin ,FaMapMarkerAlt,FaTwitter} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
const Footer = () => {
    return (
<>
<div className=' footer '>
{/* here footer section */}
<div class="footer__wrapper ">
  <div className='footer__wrapper__area'>
      <h4>About Us</h4>
      <p>Sed sit amet nisl in velit viverra bibendum in ac nisi.
           Etiam efficitur dui vitae sem rutrum, 
          id pretium nunc varius. Vestibulum hendrerit malesuada .</p>
          <div className="footer__wrapper__area__social-icons ">
              <p className='footer__wrapper__area__social-icons__facebook '><FaFacebookF/></p>
              <p className='footer__wrapper__area__social-icons__youtube '><FaYoutube/></p>
              <p className='footer__wrapper__area__social-icons__twitter '><FaTwitter/></p>
              <p className='footer__wrapper__area__social-icons__linkedin '><FaLinkedin/></p>
          </div>
  </div>
  <div className=' footer__wrapper__area'>
   <h4 >All Contacts</h4>
   <ul className="footer__contact ">
    <li ><FaMapMarkerAlt/> 111 8th Ave, New York </li>
    <li ><MdWifiCalling1/> Reserve +1-202-555-0153 </li>
    <li ><HiOutlineMail/> info@hotel.com </li>
    <li ><AiOutlineClockCircle/> 08 am - 06 pm Sunday closed</li>    
   </ul>
  </div>
  <div className='footer__wrapper__area'>
      <h4>Subscribe</h4>
      <p>Sed sit amet nisl in 
          velit viverra bibendum in ac nisi.
           Etiam efficitur dui vitae sem</p>
       <input type="search" name="" id="" placeholder='insert your email'  />
        <button type="submit" >Submit</button>
  </div>
   <div className='footer__wrapper__area'>
      <h4>Gallery</h4>
      <div className="grid grid-cols-4 gap-4">
<div>
<img src="http://www.nicdarkthemes.com/themes/hotel-inn/wp/demo/inn-suites/wp-content/uploads/sites/2/2021/11/shop-9.jpg" alt="" />
</div> 
<div>
<img src="http://www.nicdarkthemes.com/themes/hotel-inn/wp/demo/inn-suites/wp-content/uploads/sites/2/2021/11/shop-9.jpg" alt="" />
</div> 
<div>
<img src="http://www.nicdarkthemes.com/themes/hotel-inn/wp/demo/inn-suites/wp-content/uploads/sites/2/2021/11/shop-9.jpg" alt="" />
</div> 
<div>
<img src="http://www.nicdarkthemes.com/themes/hotel-inn/wp/demo/inn-suites/wp-content/uploads/sites/2/2021/11/shop-9.jpg" alt="" />
</div> 
<div>
<img src="http://www.nicdarkthemes.com/themes/hotel-inn/wp/demo/inn-suites/wp-content/uploads/sites/2/2021/11/shop-9.jpg" alt="" />
</div> 
<div>
<img src="http://www.nicdarkthemes.com/themes/hotel-inn/wp/demo/inn-suites/wp-content/uploads/sites/2/2021/11/shop-9.jpg" alt="" />
</div> 
<div>
<img src="http://www.nicdarkthemes.com/themes/hotel-inn/wp/demo/inn-suites/wp-content/uploads/sites/2/2021/11/shop-9.jpg" alt="" />
</div> 
<div>
<img src="http://www.nicdarkthemes.com/themes/hotel-inn/wp/demo/inn-suites/wp-content/uploads/sites/2/2021/11/shop-9.jpg" alt="" />
</div> 
     </div>
   </div>
</div>
 </div>
 <div className="copyright ">
     <div className="copyright__wrapper">
         <div >&copy; Hotel Inn & Suites Theme - SFS Copyright</div>
         <div className="copyright__email">
             <IoIosArrowForward /> info@hotel.com 
             <IoIosArrowForward /> booking@hotel.com
             <IoIosArrowForward />contact@hotel.com
         </div>
       </div>
 </div>
    </>
    );
};

export default Footer;