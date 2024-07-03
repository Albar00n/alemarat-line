import React, { useState } from 'react'
import Link from 'next/link'
import MobileMenu from './MobileMenu'
import { useTranslation } from 'react-i18next'

const Header = (props) => {
  const { t } = useTranslation('common')

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
    { id: '3', title: 'nav_projects', link: '/projects' },
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
                <MobileMenu />
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
              <div className="nav-search ml-15">
                <button onClick={() => setSearchState(!SearchActive)}>
                  <i
                    className={`fi ti-search ${
                      SearchActive ? 'ti-close' : 'fi '
                    }`}
                  ></i>
                </button>
                <form
                  onSubmit={SubmitHandler}
                  className={`hide ${SearchActive ? 'show' : ''}`}
                >
                  <input
                    type="text"
                    placeholder="Search"
                    className="searchbox"
                    required=""
                  />
                  <button
                    type="submit"
                    className="searchbutton fa fa-search"
                  ></button>
                </form>
              </div>

              <div className="menu-sidebar">
                <button onClick={() => setMenuState(!menuActive)}>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
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
              <Link href="/">
                <i className="fa fa-twitter"></i>
              </Link>
              <Link href="/">
                <i className="fa fa-facebook-f"></i>
              </Link>
              <Link href="/">
                <i className="fa fa-instagram"></i>
              </Link>
              <Link href="/">
                <i className="fa fa-pinterest-p"></i>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </header>
  )
}

export default Header
