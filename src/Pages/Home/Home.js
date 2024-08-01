import React, { useEffect } from 'react';
import "./Home.css";
import Navbar from '../../Components/Navbar/Navbar';
import vdo from "../../Assets/MicrosoftTeams-video.mp4";
import SearchBar from '../../Content/SearchBar';
import Footer from '../../Components/Footer/Footer';
import { LuTicket } from "react-icons/lu";
import { MdOutlineHotel } from "react-icons/md";
import { MdOutlineFoodBank } from "react-icons/md";
import { PiTelegramLogoLight } from "react-icons/pi";
import { FaPhoneAlt, FaInstagram, FaFacebook } from 'react-icons/fa';
import { GiPalmTree } from "react-icons/gi";
import { MdOutlineFlight } from "react-icons/md";
import { FcGlobe } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
import Map from "../../Assets/map.jpg"
import { FiMail } from "react-icons/fi";
import icon1 from "../../Assets/plane.png"
import icon2 from "../../Assets/pin.png"
import icon3 from "../../Assets/luggage.png"
import icon4 from "../../Assets/family.png"
import { FcNext } from "react-icons/fc";
import flag1 from "../../Assets/slides/Dome of the Rock Temple Mount in Jerusalem.jpg";
import flag2 from "../../Assets/Jordan petra.jpg";
import flag3 from "../../Assets/111.png";
import flag4 from "../../Assets/egypt.jpg";
import flag5 from "../../Assets/IMG-20240725-WA0008.jpg";
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  const handleType = (text) => {
    console.log(`Typing: ${text}`);
  }

  const handleDone = () => {
    console.log(`Typewriter animation completed!`);
  }

  useEffect(() => {
    AOS.init({ duration: 2000 });
  })


  return (
    <div>
      <Navbar />
      <SearchBar />
      <div className='home-header'>
        <div className='header-title'>
          <h2 className='heading-places'>
            <CiLocationOn />...{' '}
            <span style={{ color: 'red' }}>
              <Typewriter
                words={['Israel', 'Jordan', 'Palestine', 'Egypt', 'Turkey']}
                loop={5}
                cursor
                cursorStyle='|'
                typeSpeed={120}
                deleteSpeed={50}
                onLoopDone={handleDone}
                onType={handleType}
              />
            </span>
          </h2>
          <div data-aos="fade-up" className='heading-info'>
            <h1>Welcome to Suhana Destination & Travels</h1>
            <p><GiPalmTree />...Explore the <FcGlobe /> with us...<MdOutlineFlight /></p>
            <p>Explore all that we offer in combinations of Jordan,Israel,Palestine & Egypt in our 10 days ultimate tour package. This versatile tour gives travellers the opportunity to visit many of the historical, cultural and religious sites within this region</p>
            <Link to="package">Book now!</Link>
          </div>
          <div data-aos="fade-right" className='heading-icons'>
            <span> <FiMail /></span>
            <span> <FaInstagram /></span>
            <span> <FaFacebook /></span>
            <span> <FaXTwitter /></span>
            <span> <FaPhoneAlt /></span>
          </div>
        </div>
        <div className='video'>
          <video src={vdo} autoPlay loop muted />
          <div className='filter'></div>
        </div>
      </div>

      <div className='service-plan'>
        <h1 data-aos="fade-down">Our Service</h1>
        <div data-aos="fade-up" className='plans'>
          <div className="plan">
            <div className='p1'><LuTicket /></div>
            <h3>Ticket Booking</h3>
            <p>We book all kind of national or international ticket for your destinaion.</p>
          </div>
          <div className="plan">
            <div className="p2"><MdOutlineHotel /></div>
            <h3>Hotel Booking</h3>
            <p>You can easily book your according to your budget hotel by our website.</p>
          </div>
          <div className="plan">
            <div className="p3"><PiTelegramLogoLight /></div>
            <h3>Tour Plan</h3>
            <p>We provide you the best plan within a short time explore more.</p>
          </div>
          <div className="plan">
            <div className="p4"><MdOutlineFoodBank /></div>
            <h3>Meals Providing</h3>
            <p>We provide you the best of delitious meals.</p>
          </div>
        </div>
      </div>

      <div className='quote'>
        <img className='imge' src={Map} alt="" />
        <div data-aos="fade-left" className='icons-trip1'>
          <img src={icon1} alt="icon" />
        </div>
        <div data-aos="fade-up" className='icons-trip2'>
          <img src={icon3} alt="icon" />
        </div>
        <div data-aos="fade-down" className='icons-trip3'>
          <img src={icon2} alt="icon" />
        </div>
        <div data-aos="fade-right" className='icons-trip4'>
          <img src={icon4} alt="icon" />
        </div>
        <h1 data-aos="fade-up">We always try to give you the best service</h1>
        <p data-aos="fade-up">We always try to make our customer Happy. We provide all kind of facilities. Your Satisfaction is our main priority.</p>
      </div>

      <div className='popular-destinations'>
        <h1 data-aos="fade-down">Our Popular Distinations</h1>
        <div className='popularplaces'>
          <div data-aos="fade-up" className="popularplace">
            <div  className="popularplace-img">
              <img src={flag1} alt="" />
            </div>
            <h3>Israel</h3>
            <span><Link to="package"><FcNext /></Link></span>
          </div>
          <div data-aos="fade-up" className="popularplace">
            <div className="popularplace-img">
              <img src={flag2} alt="" />
            </div>
            <h3>Jordan</h3>
            <span><Link to="package"><FcNext /></Link></span>
          </div>
          <div data-aos="fade-up" className="popularplace">
            <div className="popularplace-img">
              <img src={flag3} alt="" />
            </div>
            <h3>Palestine</h3>
            <span><Link to="package"><FcNext /></Link></span>
          </div>
          <div data-aos="fade-up" className="popularplace">
            <div className="popularplace-img">
              <img src={flag4} alt="" />
            </div>
            <h3>Egypt</h3>
            <span><Link to="package"><FcNext /></Link></span>
          </div>
          <div data-aos="fade-up" className="popularplace">
            <div className="popularplace-img">
              <img src={flag5} alt="" />
            </div>
            <h3>Turkey</h3>
            <span><Link to="package"><FcNext /></Link></span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home