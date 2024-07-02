import React from "react";
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Link  from 'next/link'


const Hero = () => {
    return (

        <section className="hero-slider hero-style-4">
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url('/images/slider/slide-3.jpg')` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div data-swiper-parallax="300" className="slide-title">
                                    <h2>Modern House Design</h2>
                                </div>
                                <div data-swiper-parallax="400" className="slide-text">
                                    <p>Dapibus aliquet lacus sem egestas netus vestibulum
                                        sit turpis scelerisque pharetra pelque diam pharetra curabitur..</p>
                                </div>
                                <div className="clearfix"></div>
                                <div data-swiper-parallax="500" className="slide-btns">
                                    <Link href="/about" className="theme-btn">Discover More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
        </section>
    )
}

export default Hero;