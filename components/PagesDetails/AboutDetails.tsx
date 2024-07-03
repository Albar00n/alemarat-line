import VideoSection from '@/components/VideoSection'
import ContactSection from '@/components/ContactSection'
import PageTitle from '@/components/PageTitle'
import FaqSection from '@/components/FaqSection'
import ProjectSection from '../ProjectSection'
import { useTranslation } from 'react-i18next'

const AboutDetails = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <PageTitle pageTitle={t('nav_about')} pagesub={t('nav_about')} />
      <FaqSection />
      <VideoSection vclass={'pb-120'} />
      <ProjectSection />
      <ContactSection />
    </>
  )
}

export default AboutDetails
