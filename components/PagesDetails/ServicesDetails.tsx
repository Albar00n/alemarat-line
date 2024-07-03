import ContactSection from '@/components/ContactSection'
import PageTitle from '@/components/PageTitle'
import FaqSection from '@/components/FaqSection'
import ServiceSection from '@/components/ServiceSection'
import ProjectSection from '@/components/ProjectSection'

const ServicesDetails = () => {
  return (
    <>
      <PageTitle pageTitle={'Services'} pagesub={'Service'} />
      <FaqSection />
      <ServiceSection />
      <ProjectSection />
      <ContactSection />
    </>
  )
}

export default ServicesDetails
