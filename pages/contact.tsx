// import { GetStaticProps } from 'next'
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
// import { useTranslation } from 'react-i18next'
// import Seo from '@/components/Seo'
// import ContactDetails from '@/components/PagesDetails/ContactDetails'
// const Contact = () => {
//   const { t } = useTranslation('common')

//   return (
//     <>
//       <Seo title="Contact Us" url="/contact" />

//       <ContactDetails />
//     </>
//   )
// }
// export const getStaticProps: GetStaticProps = async ({ locale }) => {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale || '', ['common'])),
//     },
//     // revalidate: 20,
//   }
// }
// export default Contact

import React from 'react'

const HomeW = () => {
  return (
    <div>HomeW</div>
  )
}

export default HomeW