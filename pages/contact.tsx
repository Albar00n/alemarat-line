import Contactpage from '@/components/Contactpage'
import Footer from '@/components/footer'
import Navbar from '@/components/Navbar'
import PageTitle from '@/components/PageTitle'
import Scrollbar from '@/components/Scrollbar'
import React from 'react'

const Contact = () => {
  return (
    <>
     <Navbar hclass={'header-style-2'}/>
            <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'}/>
            <Contactpage/>
            <Footer/>
            <Scrollbar/>
    </>
  )
}

export default Contact