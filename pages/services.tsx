import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import Seo from '@/components/Seo'
import ServicesDetails from '@/components/PagesDetails/ServicesDetails'

const Services = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Seo title={t('nav_services')} url="/services" />
      <ServicesDetails />
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
export default Services
