import React from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const PageTitle = (props: any) => {
  const { t } = useTranslation('common')

  return (
    <section className="banner-section mt-110 rmt-70">
      <div className="container">
        <div className="banner-inner">
          <div className="page-title">
            <h2>{t(props.pageTitle)}</h2>
            {/* <span>{t(props.pagesub)}</span> */}
          </div>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-ite">
                <Link href="/">{t('nav_home')}</Link>
              </li>
              <span className="mx-2">/</span>
              <li className="breadcrumb-item active" aria-current="page">
                {t(props.pagesub)}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  )
}

export default PageTitle
