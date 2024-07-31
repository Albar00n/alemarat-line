import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import Seo from '@/components/Seo'
import ProjectDetails from '@/components/PagesDetails/ProjectDetails'

const Project = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Seo title="Project" url="/projects" />

      <ProjectDetails />
    </>
  )
}
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || '', ['common'])),
    },
    // revalidate: 20,
  }
}
export default Project
