import React, { Fragment } from 'react'

import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import Seo from '@/components/Seo'
import AboutDetails from '@/components/PagesDetails/AboutDetails'

const Home = () => {
  const { t } = useTranslation('common')

  return (
    <Fragment>
      <Seo title={t('nav_about')} url="/about" />

      <AboutDetails />
    </Fragment>
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
export default Home
