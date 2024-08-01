import React from 'react'
import { FaTimes, FaWhatsapp, FaPhoneAlt, FaInstagram, FaFacebook} from 'react-icons/fa'
import { BiLogoGmail } from "react-icons/bi";
import "./TripPackage.css";
import AboutUs from '../AboutUs/AboutUs';

const Model = ({ handleClickModel }) => {

    
    const phoneNumberWtsp = '8790336560';
    const message = 'Hello!';

    const whatsappUrl = `https://wa.me/${phoneNumberWtsp}?text=${encodeURIComponent(message)}`;

    const phoneNumber = '8790336560';
    const  PhoneappUrl = `https://tel.me/${phoneNumber}?`;

    return (
        <div className='overlay'>
            <div className="model">
                <div className="cross">
                    <FaTimes style={{ color: "wheate" }} size={25} onClick={handleClickModel} />
                </div>
                <AboutUs />
                <div className='modelIcons'>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp style={{
                            color: "green",
                        }} size={32} />
                    </a>
                    <a href={PhoneappUrl} target="_blank" rel="noopener noreferrer">
                        <FaPhoneAlt style={{
                            color: "blue",
                        }} size={28} />
                    </a>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        <BiLogoGmail style={{
                            color: "red",
                        }} size={32} />
                    </a>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        <FaInstagram style={{
                            color: "pink",
                        }} size={32} />
                    </a>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        <FaFacebook style={{
                            color: "blue",
                        }} size={32} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Model