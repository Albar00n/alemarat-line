import ContactSection from '@/components/ContactSection'
import Footer from '@/components/footer'
import Navbar from '@/components/Navbar'
import PageTitle from '@/components/PageTitle'
import Scrollbar from '@/components/Scrollbar'
import FaqSection from "@/components/FaqSection"
import React from 'react'
import ServiceSection from '@/components/ServiceSection'

const Services = () => {
  return (
    <>
      <Navbar hclass={'header-style-2'}/>
            <PageTitle pageTitle={'Services'} pagesub={'Service'}/>
            <FaqSection />
            <ServiceSection/>
            <ContactSection />
            <Footer/>
            <Scrollbar/>
    </>
  )
}

export default Services