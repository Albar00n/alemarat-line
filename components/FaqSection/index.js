import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
// import fImg from '../../images/faq/faq-right-bg.png'
// import fImg1 from '../../images/services/img1.png'
// import fImg2 from '../../images/services/img2.png'

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap'

const FaqSection = (props) => {
  const { t } = useTranslation('common')

  const [open, setOpen] = useState('1')
  const toggle = (id) => {
    if (open === id) {
      setOpen()
    } else {
      setOpen(id)
    }
  }

  return (
    <section className="faq-section mt-150">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 pr-125 rpr-15">
            <div class="service-page-images rmb-150">
              <img src={'/images/services/img1.png'} alt="Services" />
              <img src={'/images/services/img2.png'} alt="Service" />
            </div>
          </div>
          <div className="col-lg-6 pl-0">
            <div className="faq-accordion ras-content pt-95 pb-110 rpb-0 rmb-100">
              <div className="section-title mb-35">
                <h6>{t('about_sub_title')}</h6>
                <h2>
                  {t('about_title')}
                  {/* <span className="thin">strategist</span> */}
                </h2>
              </div>
              <div id="accordion">
                <Accordion open={open} toggle={toggle}>
                  <AccordionItem className="card">
                    <AccordionHeader targetId="1" className="card-header">
                      {t('nav_about')}
                    </AccordionHeader>
                    <AccordionBody accordionId="1">
                      {t('about_desc')}
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem className="card">
                    <AccordionHeader targetId="2" className="card-header">
                      {t('about_option_one_title')}
                    </AccordionHeader>
                    <AccordionBody accordionId="2">
                      {t('about_option_one_desc')}
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem className="card">
                    <AccordionHeader targetId="3" className="card-header">
                      {t('about_option_two_title')}
                    </AccordionHeader>
                    <AccordionBody accordionId="3">
                      {t('about_option_two_desc')}
                    </AccordionBody>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            <div className="faq-right-bg">
              <img src={'/images/faq/faq-right-bg.png'} alt="FAQ" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqSection
