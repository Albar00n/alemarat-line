import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './footer'
import Scrollbar from './Scrollbar'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Scrollbar />
      <Footer />
    </>
  )
}

export default Layout
