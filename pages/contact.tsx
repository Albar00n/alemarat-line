import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import Seo from '@/components/Seo'
import ContactDetails from '@/components/PagesDetails/ContactDetails'
const Contact = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Seo title={`${t('nav_contact')}`} url="/contact" />

      <ContactDetails />
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
export default Contact
