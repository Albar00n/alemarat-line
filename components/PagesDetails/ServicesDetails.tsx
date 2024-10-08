import ContactSection from '@/components/ContactSection'
import PageTitle from '@/components/PageTitle'
import FaqSection from '@/components/FaqSection'
import ServiceSection from '@/components/ServiceSection'
import ProjectSection from '@/components/ProjectSection'
import { useTranslation } from 'react-i18next'

const ServicesDetails = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <PageTitle pageTitle={t('nav_services')} pagesub={t('nav_services')} />
      {/* <FaqSection /> */}
      <ServiceSection />
      <ProjectSection />
      <ContactSection />
    </>
  )
}

export default ServicesDetails
