import Contactpage from '@/components/Contactpage'
import Footer from '@/components/footer'
import Navbar from '@/components/Navbar'
import PageTitle from '@/components/PageTitle'
import ProjectSection from '@/components/ProjectSection'

const ContactDetails = () => {
  return (
    <>
      <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'} />
      <Contactpage />
      <ProjectSection />
    </>
  )
}

export default ContactDetails
