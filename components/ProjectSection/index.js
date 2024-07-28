import React, { useState } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const ProjectSection = (props) => {
  const { t } = useTranslation('common')

  const [visibleProjects, setVisibleProjects] = useState(6)

  const handleShowMore = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 6)
  }
  const ClickHandler = () => {
    window.scrollTo(10, 0)
  }
  const Projects = [
    {
      Id: '1',
      pImg: '/images/global/services_one_one.jpeg',
    },
    {
      Id: '2',
      pImg: '/images/global/services_one_two.jpeg',
    },
    {
      Id: '3',
      pImg: '/images/global/services_one_three.jpeg',
    },
    {
      Id: '4',
      pImg: '/images/global/services_one_four.jpeg',
    },
    {
      Id: '5',
      pImg: '/images/global/services_one_five.jpeg',
    },
    {
      Id: '6',
      pImg: '/images/global/services_one_six.jpeg',
    },
    {
      Id: '7',
      pImg: '/images/global/services_two_one.jpeg',
    },
    {
      Id: '8',
      pImg: '/images/global/services_two_two.jpeg',
    },
    {
      Id: '9',
      pImg: '/images/global/services_two_three.jpeg',
    },
    {
      Id: '10',
      pImg: '/images/global/services_four_one.jpeg',
    },
    {
      Id: '11',
      pImg: '/images/global/services_four_two.jpeg',
    },
    {
      Id: '12',
      pImg: '/images/global/services_four_three.jpeg',
    },
    {
      Id: '13',
      pImg: '/images/global/services_four_four.jpeg',
    },
    {
      Id: '14',
      pImg: '/images/global/services_four_five.jpeg',
    },
    {
      Id: '15',
      pImg: '/images/global/services_four_six.jpeg',
    },
    {
      Id: '16',
      pImg: '/images/global/services_five_one.jpeg',
    },
    {
      Id: '17',
      pImg: '/images/global/services_five_two.jpeg',
    },
    {
      Id: '18',
      pImg: '/images/global/services_five_three.jpeg',
    },
    {
      Id: '19',
      pImg: '/images/global/services_six_one.jpeg',
    },
    {
      Id: '20',
      pImg: '/images/global/one.jpeg',
    },
    {
      Id: '21',
      pImg: '/images/global/two.jpeg',
    },
    {
      Id: '22',
      pImg: '/images/global/three.jpeg',
    },
    {
      Id: '23',
      pImg: '/images/global/four.jpeg',
    },
    {
      Id: '24',
      pImg: '/images/global/five.jpeg',
    },
    {
      Id: '25',
      pImg: '/images/global/six.jpeg',
    },
    {
      Id: '26',
      pImg: '/images/global/seven.jpeg',
    },
    {
      Id: '27',
      pImg: '/images/global/eight.jpeg',
    },
    {
      Id: '28',
      pImg: '/images/global/nine.jpeg',
    },
    {
      Id: '29',
      pImg: '/images/global/ten.jpeg',
    },
    {
      Id: '30',
      pImg: '/images/global/ten_one.jpeg',
    },
    {
      Id: '31',
      pImg: '/images/global/ten_two.jpeg',
    },
    {
      Id: '32',
      pImg: '/images/global/ten_three.jpeg',
    },
    {
      Id: '33',
      pImg: '/images/global/ten_four.jpeg',
    },
    {
      Id: '34',
      pImg: '/images/global/IMG-20240727-WA0025.png',
    },
    //
    {
      Id: '35',
      pImg: '/images/global/IMG-20240727-WA0026.png',
    },
    {
      Id: '36',
      pImg: '/images/global/IMG-20240727-WA0027.png',
    },
    {
      Id: '34',
      pImg: '/images/global/IMG-20240727-WA0028.png',
    },
    {
      Id: '34',
      pImg: '/images/global/IMG-20240727-WA0029.png',
    },
    {
      Id: '34',
      pImg: '/images/global/IMG-20240727-WA0030.png',
    },
    {
      Id: '34',
      pImg: '/images/global/IMG-20240727-WA0031.png',
    },
    {
      Id: '34',
      pImg: '/images/global/IMG-20240727-WA0032.png',
    },
    {
      Id: '34',
      pImg: '/images/global/IMG-20240727-WA0033.png',
    },
    {
      Id: '34',
      pImg: '/images/global/IMG-20240727-WA0101.png',
    },
    {
      Id: '34',
      pImg: '/images/global/IMG-20240727-WA0040.png',
    },
    {
      Id: '34',
      pImg: '/images/global/IMG-20240727-WA0041.png',
    },
    {
      Id: '34',
      pImg: '/images/global/IMG-20240727-WA0046.png',
    },
    {
      Id: '34',
      pImg: '/images/global/IMG-20240727-WA0047.png',
    },
    {
      Id: '34',
      pImg: '/images/global/IMG-20240727-WA0073.png',
    },
    {
      Id: '34',
      pImg: '/images/global/IMG-20240727-WA0091.png',
    },
    {
      Id: '34',
      pImg: '/images/global/IMG-20240727-WA0074.png',
    },
    {
      Id: '34',
      pImg: '/images/global/IMG-20240727-WA0093.png',
    },
    {
      Id: '34',
      pImg: '/images/global/IMG-20240727-WA0092.png',
    },
    {
      Id: '34',
      pImg: '/images/global/IMG-20240727-WA0095.png',
    },
    {
      Id: '34',
      pImg: '/images/global/IMG-20240727-WA0098.png',
    },
    {
      Id: '34',
      pImg: '/images/global/IMG-20240727-WA0074.png',
    },
  ]

  return (
    <section className="apartment-section s2 text-center">
      <div className="container">
        <div className="section-title mb-75">
          <h2>
            {t('choose')} <span className="thin">{t('best')}</span>
          </h2>
          {/* <p>At vero eos et accusamus et iusto odio</p> */}
        </div>
        <div className="apartment-carousel">
          <div className="row">
            {Projects.slice(0, visibleProjects).map((project, i) => (
              <div className="col col-lg-4 col-md-6 col-12" key={i}>
                <div className="apartment-item">
                  <div className="apartment-img">
                    <img
                      src={project.pImg}
                      style={{
                        height: '300px',
                        objectFit: 'cover',
                      }}
                      alt="Apartment"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          {visibleProjects < Projects.length && (
            <button className="theme-btn my-4" onClick={handleShowMore}>
              {t('header_home_button')}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

export default ProjectSection
