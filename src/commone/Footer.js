import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdWifiCalling1 } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
const Footer = () => {
    return (
<div>
<div className=' footer text-white py-14'>
{/* here footer section */}
<div class="grid md:grid-cols-4 grid-cols-1 gap-4 mx-4 ">
  <div className=' p-10 '>
      <h4 className=''>About Us</h4>
      <p>Sed sit amet nisl in velit viverra bibendum in ac nisi.
           Etiam efficitur dui vitae sem rutrum, 
          id pretium nunc varius. Vestibulum hendrerit malesuada .</p>
          <div className="social-icons flex  w-28 mt-4">
              <p className='text-2xl bg-blue-500 rounded-full p-2'><FaFacebookF/></p>
              <p className='text-2xl mx-3 bg-red-600 rounded-full p-2'><AiFillYoutube/></p>
              <p className='text-2xl bg-sky-500 rounded-full p-2'><FaTwitter/></p>
              <p className='text-2xl bg-blue-600 rounded-full mx-3 p-2'><FaLinkedin/></p>
          </div>
  </div>
  <div className=' p-10 '>
   <h4 className=''>All Contacts</h4>
   <ul>
   <div className="flex items-center">
   <FaMapMarkerAlt/><li className='m-1'>111 8th Ave, New York </li>
   </div>
   <div className="flex items-center">
   <MdWifiCalling1/> <li className='m-2'> Reserve +1-202-555-0153</li>
   </div>
   <div className="flex items-center">
   <HiOutlineMail/> <li className='m-2'>info@hotel.com</li>
   </div>
   <div className="flex items-center">
   <AiOutlineClockCircle/> <li className='m-2'> 08 am - 06 pm Sunday closed</li>
   </div>
        
       
   </ul>
  </div>
  <div className='p-10'>
      <h4>Subscribe</h4>
      <p>Sed sit amet nisl in 
          velit viverra bibendum in ac nisi.
           Etiam efficitur dui vitae sem</p>
           <input type="search" name="" id="" placeholder='insert your email' className='py-3 px-5 md:w-96 my-4' />
           <button type="submit" className='px-12 py-2 footer__submit'>Submit</button>
  </div>
      <div className='p-10'>
      <h4>Gallery</h4>
      <div class="grid grid-cols-4 gap-4">
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
 <div className="copyright py-4">
     <div className="md:flex justify-between mx-8 items-center text-white">
         <div className="">&copy; Hotel Inn & Suites Theme - SFS Copyright</div>
         <div className=" md:flex items-center md:mt-0 mt-2">
             <IoIosArrowForward className='hidden md:block'/> info@hotel.com 
             <IoIosArrowForward className='hidden md:block'/> booking@hotel.com
             <IoIosArrowForward className='hidden md:block'/>contact@hotel.com
</div>
     </div>
 </div>
    </div>
    );
};

export default Footer;