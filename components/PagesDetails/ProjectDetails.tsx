import PageTitle from '@/components/PageTitle'
import ProjectSection from '@/components/ProjectSection'
import { useTranslation } from 'react-i18next'

const ProjectDetails = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <PageTitle pageTitle={t('nav_projects')} pagesub={t('nav_projects')} />
      <ProjectSection />
    </>
  )
}

export default ProjectDetails
