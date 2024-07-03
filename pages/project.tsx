import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import Seo from '@/components/Seo'
import ProjectDetails from '@/components/PagesDetails/ProjectDetails'

const Project = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Seo title={t('nav_projects')} url="/projects" />

      <ProjectDetails />
    </>
  )
}
export const getServerSideProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || '', ['common'])),
    },
    // revalidate: 20,
  }
}
export default Project
