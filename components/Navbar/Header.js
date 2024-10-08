import React, { useState } from 'react'
import Link from 'next/link'
import MobileMenu from './MobileMenu'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
const Header = (props) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { pathname, query, asPath, locale } = router
  const [menuActive, setMenuState] = useState(false)
  const [SearchActive, setSearchState] = useState(false)

  const SubmitHandler = (e) => {
    e.preventDefault()
  }

  const ClickHandler = () => {
    window.scrollTo(10, 0)
  }

  const data = [
    { id: '1', title: 'nav_home', link: '/' },
    { id: '2', title: 'nav_about', link: '/about' },
    { id: '3', title: 'nav_projects', link: '/project' },
    { id: '4', title: 'nav_services', link: '/services' },
    { id: '5', title: 'nav_contact', link: '/contact' },
  ]

  return (
    <header className="main-header s2">
      <div className="header-upper">
        <div className="container-fluid clearfix">
          <div className="header-inner">
            <div className="logo">
              <Link href="/">
                <img src="/logo.png" width={100} alt="" />
              </Link>
            </div>
            <div className="nav-outer clearfix">
              <nav className="main-menu navbar-expand-lg">
                {/* <MobileMenu /> */}
                <div className="navbar-collapse collapse clearfix">
                  <ul className="navigation clearfix">
                    {data.map((item) => (
                      <li key={item.id}>
                        <Link href={item.link} title={`${t(item.title)}`}>
                          {t(item.title)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </div>

            <div className="menu-icons">
              <Link
                href={asPath}
                locale={locale === 'en' ? 'ar' : 'en'}
                legacyBehavior
                title={locale === 'en' ? 'English' : 'عربي'}
              >
                <a
                  style={{
                    fontSize: '20px',
                    fontWeight: '500',
                    lineHeight: '30px',
                    display: 'flex',
                    alignItems: 'start',
                    gap: '.4rem',
                    color: '#1f1f1f',
                  }}
                  className="mx-2"
                  title={locale === 'en' ? 'English' : 'عربي'}
                >
                  {locale === 'en' ? 'AR' : 'EN'}
                  {locale == 'en' ? (
                    <img
                      src="/icons/ar.svg"
                      alt="Lang AR SPORTS ACADEMYE"
                      title="Lang AR SPORTS ACADEMYE"
                      width={30}
                      height={30}
                      loading="lazy"
                    />
                  ) : (
                    <img
                      src="/icons/en.svg"
                      alt="Lang EN SPORTS ACADEMYE"
                      title="Lang EN SPORTS ACADEMYE"
                      width={30}
                      height={30}
                      loading="lazy"
                    />
                  )}
                  {/* <IoFootball size="1rem" color="" /> */}
                </a>
              </Link>
              {/* <div className="menu-sidebar">
                <button onClick={() => setMenuState(!menuActive)}>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div> */}
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`sidebar-wrap ${menuActive ? 'side-content-visible' : ''}`}
      >
        <div
          className="form-back-drop"
          onClick={() => setMenuState(!menuActive)}
        ></div>
        <section className="hidden-bar">
          <div className="inner-box text-center">
            <div
              className="cross-icon"
              onClick={() => setMenuState(!menuActive)}
            >
              <span className="fa fa-times"></span>
            </div>
            <div className="title">
              <h3>{t('contact_title_nav')}</h3>
            </div>
            <div className="appointment-form">
              <form method="post" onSubmit={SubmitHandler}>
                <div className="form-group">
                  <input
                    type="text"
                    name="text"
                    value=""
                    placeholder={`${t('contact_name')}`}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value=""
                    placeholder={`${t('contact_email')}`}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="phone"
                    value=""
                    placeholder={`${t('contact_phone')}`}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    placeholder={`${t('contact_message')}`}
                    rows="5"
                  ></textarea>
                </div>
                <div className="form-group">
                  <button type="submit" className="theme-btn">
                    {t('contact_send')}
                  </button>
                </div>
              </form>
            </div>
            <div className="social-icons">
              {/* <Link href="/">
                <i className="fa fa-twitter"></i>
              </Link> */}
              <Link href="/">
                <i className="fa fa-facebook-f"></i>
              </Link>
              <Link href="/" className="mx-2">
                <i className="fa fa-instagram"></i>
              </Link>
              {/* <Link href="/">
                <i className="fa fa-pinterest-p"></i>
              </Link> */}
            </div>
          </div>
        </section>
      </div>
    </header>
  )
}

export default Header
