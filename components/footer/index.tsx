import React from 'react'
import Link from 'next/link'
import Lightbox from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'
// import Bg from '../../images/footer.png'
// import pImg1 from '../../images/instagram/instagram1.png'
// import pImg2 from '../../images/instagram/instagram2.png'
// import pImg3 from '../../images/instagram/instagram3.png'
// import pImg4 from '../../images/instagram/instagram4.png'
// import pImg5 from '../../images/instagram/instagram5.png'
// import pImg6 from '../../images/instagram/instagram6.png'
import CtaSection from '../CtaSection/CtaSection'
import { useTranslation } from 'react-i18next'

const images = [
  '/images/instagram/instagram1.png',
  '/images/instagram/instagram1.png',
  '/images/instagram/instagram1.png',
  '/images/instagram/instagram1.png',
  '/images/instagram/instagram1.png',
  '/images/instagram/instagram1.png',
]

const Footer = (props: any) => {
  const { t } = useTranslation('common')

  const ClickHandler = () => {
    window.scrollTo(10, 0)
  }

  const [open, setOpen] = React.useState(false)

  return (
    <div>
      {/* <CtaSection/> */}
      <footer
        className="footer-section pt-220"
        style={{ backgroundImage: `url('/images/footer.png')` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-8">
              <div className="instagram-posts">
                {images.map((item: any, pitem: any) => (
                  <div className="instagram-item" key={pitem}>
                    <img
                      src={item}
                      alt="Instagram"
                      onClick={() => setOpen(true)}
                    />
                    <div className="instagram-overlay">
                      <span onClick={() => setOpen(true)}>
                        <i className="fa fa-instagram"></i>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xl-6 col-lg-4">
              <div className="contact-widget">
                <h3>{t('nav_contact')}</h3>
                <h6>{t('footer_title')}</h6>
                <Link href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3638.549237048117!2d55.7793789!3d24.222561799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8ab71b2e43795f%3A0xf2eb30e22f455392!2z2KfZhNil2YXYp9ix2KfYqiDZhNin2YrZhiDZhNmE2YXZgtin2YjZhNin2Kog2Ygg2KfZhNi12YrYp9mG2Kkg2KfZhNi52KfZhdip!5e0!3m2!1sar!2sae!4v1719985705785!5m2!1sar!2sae">
                  <h6> {t('footer_map')} </h6>
                </Link>
                <Link href="mailto:emiratesline.cont@outlook.com">
                  <h6
                    style={{
                      color: '#ca9c6a',
                    }}
                  >
                    emiratesline.cont@outlook.com
                  </h6>
                </Link>
                <Link href="tel:0565111809">
                  <h6
                    style={{
                      color: '#ca9c6a',
                    }}
                  >
                    0565111809
                  </h6>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom mt-55">
          <div className="container">
            <div className="bottom-inner">
              <div className="social-icons">
                <Link onClick={ClickHandler} href="/">
                  <i className="fa fa-twitter"></i>
                </Link>
                <Link onClick={ClickHandler} href="/">
                  <i className="fa fa-facebook"></i>
                </Link>
                <Link onClick={ClickHandler} href="/">
                  <i className="fa fa-instagram"></i>
                </Link>
                <Link onClick={ClickHandler} href="/">
                  <i className="fa fa-pinterest"></i>
                </Link>
              </div>
              <div className="copyright">
                <p>
                  © Copyright 2024 ALEMARAT LINE by{' '}
                  <Link onClick={ClickHandler} href="https://qurashi.xyz">
                    QURASHI
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={[
                        { src: pImg1 },
                        { src: pImg2 },
                        { src: pImg3 },
                        { src: pImg4 },
                        { src: pImg5 },
                        { src: pImg6 },
                    ]}
                    plugins={[Zoom]}
                /> */}
      </footer>
    </div>
  )
}

export default Footer
