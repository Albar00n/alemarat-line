import React, { Fragment } from 'react'

import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import Seo from '@/components/Seo'
import HomeDetails from '@/components/PagesDetails/HomeDetails'

const Home = () => {
  const { t } = useTranslation('common')

  return (
    <Fragment>
      <Seo title="Home" url="/" />
      <HomeDetails />
    </Fragment>
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
export default Home