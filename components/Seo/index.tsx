import Head from 'next/head'
import { useTranslation } from 'react-i18next'

const Seo = ({ title, url }: any) => {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>ALEMARAT LINE | {title}</title>
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#000000" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="HandheldFriendly" content="true" />
        <link
          rel="image_src"
          type="image/png"
          href="https://alemarat-line.vercel.app/logo.png"
        />
        <link
          rel="shortcut icon"
          href="https://alemarat-line.vercel.app/logo.png"
        />
        <link rel="publisher" href="https://alemarat-line.vercel.app/" />
        <meta name="author" content="https://qurashi.xyz" />
        <meta name="copyright" content="https://qurashi.xyz" />
        <link rel="icon" href="https://alemarat-line.vercel.app/logo.png" />
        <meta name="og:locale" content="ar" />
        <meta
          name="og:url"
          content={`https://alemarat-line.vercel.app/${url}`}
        />
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content={`ALEMARAT LINE ${title}`} />
        <meta name="og:title" content={`ALEMARAT LINE ${title}`} />
        <meta
          name="og:description"
          content="It is a company specialized in the field of contracting and general maintenance. It was established to provide integrated services in the construction and maintenance sector in the Al Ain region. We are committed to providing high-quality services, and we ensure that our customers’ requirements are met accurately and effectively. Emirates Contracting and General Maintenance Company is your ideal choice for your projects in the United Arab Emirates."
        />
        <meta
          name="description"
          content="It is a company specialized in the field of contracting and general maintenance. It was established to provide integrated services in the construction and maintenance sector in the Al Ain region. We are committed to providing high-quality services, and we ensure that our customers’ requirements are met accurately and effectively. Emirates Contracting and General Maintenance Company is your ideal choice for your projects in the United Arab Emirates."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`ALEMARAT LINE ${title}`} />
        <meta
          name="twitter:description"
          content="It is a company specialized in the field of contracting and general maintenance. It was established to provide integrated services in the construction and maintenance sector in the Al Ain region. We are committed to providing high-quality services, and we ensure that our customers’ requirements are met accurately and effectively. Emirates Contracting and General Maintenance Company is your ideal choice for your projects in the United Arab Emirates."
        />
        <meta
          name="twitter:image"
          content="https://alemarat-line.vercel.app/logo.png"
        />

        <meta
          name="og:image"
          content="https://alemarat-line.vercel.app/logo.png"
        />
        <link rel="apple-touch-icon" href="/pwd/apple-touch-icon.png" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/pwd/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/pwd/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/pwd/favicon-16x16.png"
        />
        <link rel="apple-touch-icon" href="/pwd/apple-touch-icon.png" />
        <link rel="manifest" href="/pwd/manifest.json" />
        <link
          rel="mask-icon"
          href="/pwd/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
    </>
  )
}

export default Seo
