import Contactpage from '@/components/Contactpage'
import Footer from '@/components/footer'
import Navbar from '@/components/Navbar'
import PageTitle from '@/components/PageTitle'
import ProjectSection from '@/components/ProjectSection'
import { useTranslation } from 'react-i18next'

const ContactDetails = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <PageTitle pageTitle={t('nav_contact')} pagesub={t('nav_contact')} />
      <Contactpage />
      <ProjectSection />
    </>
  )
}

export default ContactDetails
