import React from 'react'
import ContactForm from './ContactForm'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

const Contactpage = () => {
  const { t } = useTranslation('common')

  return (
    <div>
      <div className="contact-map" id="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3638.549237048117!2d55.7793789!3d24.222561799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8ab71b2e43795f%3A0xf2eb30e22f455392!2z2KfZhNil2YXYp9ix2KfYqiDZhNin2YrZhiDZhNmE2YXZgtin2YjZhNin2Kog2Ygg2KfZhNi12YrYp9mG2Kkg2KfZhNi52KfZhdip!5e0!3m2!1sar!2sae!4v1719985705785!5m2!1sar!2sae"></iframe>
      </div>
      <div className="contact-info text-center mb-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="info-item">
                <img src={'/images/contact/icon1.png'} alt="Icon" />
                <h6
                  style={{
                    color: '#ca9c6a',
                  }}
                >
                  {t('footer_map')}
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="info-item">
                <img src={'/images/contact/icon2.png'} alt="Icon" />
                <Link href="mailto:emiratesline.cont@outlook.com">
                  <h6
                    style={{
                      color: '#ca9c6a',
                    }}
                  >
                    emiratesline.cont@outlook.com
                  </h6>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="info-item">
                <img src={'/images/contact/icon3.png'} alt="Icon" />
                <Link href="tel:0565111809">
                  <h6
                    style={{
                      color: '#ca9c6a',
                    }}
                  >
                    00971565111809
                  </h6>
                </Link>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  )
}

export default Contactpage
