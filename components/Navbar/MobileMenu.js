import React, { Fragment, useState } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/List'
import Collapse from '@mui/material/Collapse'
import Link from 'next/link'

const menus = [
  {
    id: 1,
    title: 'Home',
    link: '/',
  },

  {
    id: 3,
    title: 'about',
    link: '/about',
  },

  {
    id: 6,
    title: 'Projects',
    link: '/project',
  },
  {
    id: 7,
    title: 'Service',
    link: '/services',
  },
  {
    id: 88,
    title: 'Contact',
    link: '/contact',
  },
]

const MobileMenu = () => {
  const [openId, setOpenId] = useState(0)
  const [menuActive, setMenuState] = useState(false)

  const ClickHandler = () => {
    window.scrollTo(10, 0)
  }

  return (
    <div>
      <div className={`mobileMenu ${menuActive ? 'show' : ''}`}>
        <div className="menu-close">
          <div className="close" onClick={() => setMenuState(!menuActive)}>
            <i className="ti-close"></i>
          </div>
        </div>

        <ul className="responsivemenu">
          {menus.map((item, mn) => {
            return (
              <ListItem
                className={item.id === openId ? 'active' : null}
                key={mn}
              >
                <Link
                  onClick={() => setMenuState(!menuActive)}
                  className="active"
                  href={item.link}
                >
                  {item.title}
                </Link>
              </ListItem>
            )
          })}
        </ul>
      </div>

      <div className="navbar-header clearfix">
        <button
          type="button"
          className="navbar-toggle"
          onClick={() => setMenuState(!menuActive)}
        >
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      </div>
    </div>
  )
}

export default MobileMenu
