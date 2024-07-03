import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import SimpleReactValidator from 'simple-react-validator'
// import Bg from '../../images/contact/contact-section.png'

const ContactSection = () => {
  const { t } = useTranslation('common')

  const [forms, setForms] = useState({
    name: '',
    email: '',
    date: '',
    phone: '',
    message: '',
  })
  const [validator] = useState(
    new SimpleReactValidator({
      className: 'errorMessage',
    })
  )
  const changeHandler = (e: any) => {
    setForms({ ...forms, [e.target.name]: e.target.value })
    if (validator.allValid()) {
      validator.hideMessages()
    } else {
      validator.showMessages()
    }
  }

  const submitHandler = (e: any) => {
    e.preventDefault()
    if (validator.allValid()) {
      validator.hideMessages()
      setForms({
        name: '',
        email: '',
        date: '',
        phone: '',
        message: '',
      })
    } else {
      validator.showMessages()
    }
  }

  return (
    <section
      className="contact-section mb-250"
      style={{ backgroundImage: `url('/images/contact/contact-section.png')` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <form
              className="contact-form bg-white mt-100 rmt-0"
              onSubmit={(e) => submitHandler(e)}
            >
              <div className="section-title text-center mb-40">
                <h2>{t('contact_title')}</h2>
              </div>
              <div className="row clearfix">
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      className="form-control"
                      value={forms.name}
                      type="text"
                      name="name"
                      onBlur={(e) => changeHandler(e)}
                      onChange={(e) => changeHandler(e)}
                      placeholder={`${t('contact_name')}`}
                    />
                    {validator.message(
                      'name',
                      forms.name,
                      'required|alpha_space'
                    )}
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      className="form-control"
                      value={forms.email}
                      type="email"
                      name="email"
                      onBlur={(e) => changeHandler(e)}
                      onChange={(e) => changeHandler(e)}
                      placeholder={`${t('contact_email')}`}
                    />
                    {validator.message('email', forms.email, 'required|email')}
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      className="form-control"
                      value={forms.email}
                      type="number"
                      name="phone"
                      onBlur={(e) => changeHandler(e)}
                      onChange={(e) => changeHandler(e)}
                      placeholder={`${t('contact_phone')}`}
                    />
                    {validator.message('email', forms.phone, 'required|phone')}
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      rows={4}
                      onBlur={(e) => changeHandler(e)}
                      onChange={(e) => changeHandler(e)}
                      value={forms.message}
                      name="message"
                      placeholder={`${t('contact_message')}`}
                    ></textarea>
                    {validator.message('message', forms.message, 'required')}
                  </div>
                </div>
                <div className="col-md-12">
                  <button type="submit" className="theme-btn mt-40">
                    {t('contact_send')}
                  </button>
                </div>
              </div>
              <div className="title-rotated">{t('nav_contact')}</div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
