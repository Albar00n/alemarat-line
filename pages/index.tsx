import React, { Fragment } from 'react';
import Navbar from '../components/Navbar'
import Hero from '@/components/hero';
import ServiceSection from '@/components/ServiceSection';
import VideoSection from '@/components/VideoSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/footer';
import Scrollbar from '@/components/Scrollbar';


const Home = () => {
    return (
        <Fragment>
            <Navbar />
            <Hero />
            <ServiceSection />
            <VideoSection vclass={"pb-120"}/>
            <ContactSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default Home;