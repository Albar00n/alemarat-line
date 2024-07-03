import VideoSection from '@/components/VideoSection'
import ContactSection from '@/components/ContactSection'
import PageTitle from '@/components/PageTitle'
import FaqSection from '@/components/FaqSection'
import ProjectSection from '../ProjectSection'

const AboutDetails = () => {
  return (
    <>
      <PageTitle pageTitle={'Services'} pagesub={'Service'} />
      <FaqSection />
      <VideoSection vclass={'pb-120'} />
      <ProjectSection />
      <ContactSection />
    </>
  )
}

export default AboutDetails
