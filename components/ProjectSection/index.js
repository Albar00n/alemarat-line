import React from 'react'
import Link from 'next/link'

const ProjectSection = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0)
  }
  const Projects = [
    {
      Id: '1',
      pTitle: 'Architecture',
      slug: 'Architecture',
      pImg: '/images/apartment/apartment1.png',
      pSImg: '/images/apartment/apartment1.png',
      ssIcon: '/images/apartment/icon1.png',
      des: 'Aenean vehicula non mauris maximus elementum. Nulla facilisi.',
      width: '120',
    },
    {
      Id: '2',
      pTitle: 'Exterior Design',
      slug: 'Exterior-Design',
      pImg: '/images/apartment/apartment1.png',
      pSImg: '/images/apartment/apartment1.png',
      ssIcon: '/images/apartment/icon1.png',
      des: 'Aenean vehicula non mauris maximus elementum. Nulla facilisi.',
      width: '130',
    },
    {
      Id: '3',
      pTitle: 'Interior',
      slug: 'Interior',
      pImg: '/images/apartment/apartment1.png',
      pSImg: '/images/apartment/apartment1.png',
      ssIcon: '/images/apartment/icon1.png',
      des: 'Aenean vehicula non mauris maximus elementum. Nulla facilisi.',
      width: '140',
    },
    {
      Id: '4',
      pTitle: 'Furniture & Decor',
      slug: 'Furniture-&-Decor',
      pImg: '/images/apartment/apartment1.png',
      pSImg: '/images/apartment/apartment1.png',
      ssIcon: '/images/apartment/icon1.png',
      des: 'Aenean vehicula non mauris maximus elementum. Nulla facilisi.',
      width: '120',
    },
    {
      Id: '5',
      pTitle: 'Exclusive Home Decor',
      slug: 'Exclusive-Home-Decor',
      pImg: '/images/apartment/apartment1.png',
      pSImg: '/images/apartment/apartment1.png',
      ssIcon: '/images/apartment/icon1.png',
      des: 'Aenean vehicula non mauris maximus elementum. Nulla facilisi.',
      width: '130',
    },
    {
      Id: '6',
      pTitle: 'Modern Architecture',
      slug: 'Modern-Architecture',
      pImg: '/images/apartment/apartment1.png',
      pSImg: '/images/apartment/apartment1.png',
      ssIcon: '/images/apartment/icon1.png',
      des: 'Aenean vehicula non mauris maximus elementum. Nulla facilisi.',
      width: '140',
    },
  ]

  return (
    <section className="apartment-section s2 text-center">
      <div className="container">
        <div className="section-title mb-75">
          <h2>
            Choose an <span className="thin">Apartment</span>
          </h2>
          <p>At vero eos et accusamus et iusto odio</p>
        </div>
        <div className="apartment-carousel">
          <div className="row">
            {Projects.slice(0, 6).map((project, i) => (
              <div className="col col-lg-4 col-md-6 col-12" key={i}>
                <div className="apartment-item">
                  <div className="apartment-img">
                    <img src={project.pImg} alt="Apartment" />
                  </div>
                  <div className="apartment-content">
                    <img src={project.ssIcon} alt="Icon" />
                    <h3>
                      <Link
                        onClick={ClickHandler}
                        href={`/project-single/${project.slug}`}
                      >
                        {project.pTitle}
                      </Link>
                    </h3>
                    <span>from {project.width} m2</span>
                    <p>{project.des} </p>
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

export default ProjectSection
