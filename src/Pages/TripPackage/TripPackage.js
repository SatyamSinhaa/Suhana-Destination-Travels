import React, { useState } from 'react'
import "./TripPackage.css"
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { MdCall } from 'react-icons/md'
import img from '../../Assets/MBG.jpg';
import img1 from "../../Assets/4C.jpg"
import img2 from "../../Assets/3C.jpg"
import Model from './Model'

const TripPackage = () => {

    const [model, setModel] = useState(false)

    const handleClickModel = () => {
        setModel(!model)

    }

    return (
        <div>
            <Navbar />
            <div className="trip-package-container">
                <h1>Holy land Tour Packages From Hyderabad</h1>
                <h3>Trip covers <span>Jordan</span>, <span>Israel</span>, <span>Palestine</span> & <span>Egypt</span> countries from Hyderabad</h3>
                <div className='line'></div>
                <h3>starting at <span>INR 1,60,000/-</span>  <span className='price'> INR 2,00,0000/-</span></h3>
                <button onClick={handleClickModel}>Request Callback</button>
            </div>
            <div className='title-label'>
                <h2>Holy land tour packages from hyderabd | Confirm your booking...</h2>
                <p>Suhana Destination Travel Pvt Ltd. is a one stop destination for your travel needs to the Holy Land. It ha tie ups with Experienced Guides,Travel Houses and Hotels. Explore all that we offer in combinations or individual of Jordan,Israel,Palestine & Egypt in our 7 to 10 days based on ultimate tour package</p>
            </div>
            <div className='packages'>
                <div className='combo-pack1'>
                    <h1>Jordan,Israel,Palestine & Egypt tour package </h1>
                    <div className='combo-pack-details'>
                        <div className='combo-img'>
                            <img src={img1} alt="" />
                        </div>
                        <div className='combo-price'>
                            <p><span>10 days</span>Best of our Holy land 9 nights 10 days package </p>
                            <div className='combo-call'>
                                <h3>INR 1,65,000/-</h3>
                                <div className='btn-btn'>
                                    <button onClick={handleClickModel}><MdCall /></button>
                                    <button onClick={handleClickModel}>Request Callback</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='combo-pack1'>
                    <h1>Jordan,Israel,Palestine tour package </h1>
                    <div className='combo-pack-details'>
                        <div className='combo-img'>
                            <img src={img2} alt="" />
                        </div>
                        <div className='combo-price'>
                            <p><span>7 days</span>Best of our Holy land 6 nights 7 days package </p>
                            <div className='combo-call'>
                                <h3>INR 1,55,000/-</h3>
                                <div className='btn-btn'>
                                    <button onClick={handleClickModel}><MdCall/></button>
                                    <button onClick={handleClickModel}>Request Callback</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='combo-pack1'>
                    <h1>Israel tour package </h1>
                    <div className='combo-pack-details'>
                        <div className='combo-img'>
                            <img src={img} alt="" />
                        </div>
                        <div className='combo-price'>
                            <p><span>7 days</span>Best of our Holy land 6 nights 7 days package </p>
                            <div className='combo-call'>
                                <h3>INR 1,50,000/-</h3>
                                <div className='btn-btn'>
                                    <button onClick={handleClickModel}><MdCall /></button>
                                    <button onClick={handleClickModel}>Request Callback</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='combo-pack1'>
                    <h1>Turky tour package </h1>
                    <div className='combo-pack-details'>
                        <div className='combo-img'>
                            <img src={img} alt="" />
                        </div>
                        <div className='combo-price'>
                            <p><span>7 days</span>Best of our Holy land 6 nights 7 days package </p>
                            <div className='combo-call'>
                                <h3>INR 1,55,000/-</h3>
                                <div className='btn-btn'>
                                    <button onClick={handleClickModel}><MdCall /></button>
                                    <button onClick={handleClickModel}>Request Callback</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {
                model && <Model handleClickModel={handleClickModel}/> 
            }
            <Footer />
        </div>
    )
}

export default TripPackage