import { useTranslation } from 'react-i18next'

const ServiceSection = () => {
  const { t } = useTranslation('common')

  const data = [
    {
      id: '1',
      title: 'services_one_title',
      desc: 'services_one_desc',
      img: '/images/global/services_one_one.jpeg',
    },
    {
      id: '2',
      title: 'services_two_title',
      desc: 'services_two_desc',
      img: '/images/global/services_two_one.jpeg',
    },
    {
      id: '3',
      title: 'services_three_title',
      desc: 'services_three_desc',
      img: '/images/global/services_three_one.jpeg',
    },
    {
      id: '4',
      title: 'services_four_title',
      desc: 'services_four_desc',
      img: '/images/global/services_four_one.jpeg',
    },
    {
      id: '5',
      title: 'services_five_title',
      desc: 'services_five_desc',
      img: '/images/global/services_five_one.jpeg',
    },
    {
      id: '6',
      title: 'services_six_title',
      desc: 'services_six_desc',
      img: '/images/global/services_six_one.jpeg',
    },
  ]

  return (
    <section
      className="team-section mb-240"
      style={{ backgroundImage: `url('/images/team/team-bg.png')` }}
    >
      <div className="team-wrap">
        <div className="container">
          <div className="section-title text-white text-center mb-55">
            <h2>{t('nav_services')}</h2>
            {/* <h6>our team members</h6> */}
          </div>
          <div className="row">
            {data.map((item) => (
              <div className="col-lg-6 col-xl-4 col-md-6 " key={item.id}>
                <div className="team-item">
                  <img
                    src={item.img}
                    style={{
                      width: '100%',
                      height: '400px',
                      objectFit: 'cover',
                    }}
                    alt="Team"
                  />
                  <div className="team-des">
                    <h3>{t(item.title)}</h3>
                    <p
                      style={{
                        height: '150px',
                      }}
                    >
                      {t(item.desc)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceSection
