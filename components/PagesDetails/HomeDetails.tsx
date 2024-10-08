import Navbar from '@/components/Navbar'
import Hero from '@/components/hero'
import ServiceSection from '@/components/ServiceSection'
import VideoSection from '@/components/VideoSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/footer'
import Scrollbar from '@/components/Scrollbar'
import ProjectSection from '../ProjectSection'

const HomeDetails = () => {
  return (
    <>
      <Hero />
      <ServiceSection />
      <VideoSection vclass={'pb-120'} />
      <ProjectSection />
      <ContactSection />
    </>
  )
}

export default HomeDetails
