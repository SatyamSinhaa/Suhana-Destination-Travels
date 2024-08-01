import React from 'react'
import { FaTimes } from 'react-icons/fa'
import "./Contents.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ModelGallary = ({ handleClickModelGallary, SlideImages }) => {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
    };
    return (
        <div className='overlaygallary'>
            <div className="modelgallary">
                <div className="crossgallary">
                    <FaTimes style={{ color: "white" }} size={25} onClick={handleClickModelGallary} />
                </div>
                <div className="gallaryimg">
                    <Slider {...settings}>

                        {
                            SlideImages.map((image) => {
                                return (
                                    <div key={image}>
                                        <img src={image} alt="" />
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default ModelGallary