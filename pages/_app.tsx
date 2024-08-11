import '@/styles/globals.css'
import '@/public/css/font-awesome.min.css'
import '@/public/css/themify-icons.css'
import '@/public/css/flaticon.css'
import '@/public/css/animate.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/public/css/spacing.min.css'
import '@/public/css/leaflet.css'
import '@/public/css/menu.css'
import '@/public/css/style.css'
import '@/public/css/responsive.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'

import { appWithTranslation, useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import Seo from '@/components/Seo'

function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter()
  const isRTL = locale === 'ar'
  const { t } = useTranslation('common')
  return (
    <>
      <Seo title="Home" url="/" />
      <div dir={isRTL ? 'rtl' : 'ltr'}>
        {/* <Layout>
          <Component {...pageProps} />
        </Layout> */}
      </div>
    </>
  )
}
export default appWithTranslation(App)
