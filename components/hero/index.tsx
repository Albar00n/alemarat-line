import 'swiper/css'
import 'swiper/css/navigation'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t } = useTranslation('common')

  return (
    <section className="hero-slider hero-style-4">
      <div
        className="slide-inner slide-bg-image"
        style={{
          backgroundImage: `url('/images/global/services_one_six.jpeg')`,
        }}
      >
        <div className="container-fluid">
          <div className="slide-content">
            <div data-swiper-parallax="300" className="slide-title">
              <h2>{t('header_home_title')}</h2>
            </div>
            <div data-swiper-parallax="400" className="slide-text">
              <p> {t('header_home_desc')} </p>
            </div>
            <div className="clearfix"></div>
            <div data-swiper-parallax="500" className="slide-btns">
              <Link href="/about" className="theme-btn">
                {t('header_home_button')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
