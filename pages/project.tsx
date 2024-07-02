import Footer from '@/components/footer'
import Navbar from '@/components/Navbar'
import PageTitle from '@/components/PageTitle'
import Scrollbar from '@/components/Scrollbar'
import ProjectSection from "@/components/ProjectSection"
import React from 'react'

const Project = () => {
  return (
    <>
            <Navbar/>
            <PageTitle pageTitle={'Projects'} pagesub={'Project'}/>
            <ProjectSection/>

            <Footer/>
            <Scrollbar/>


    </>
  )
}

export default Project