import React from 'react'
import { Helmet } from 'react-helmet'

// ** Import Translation
import { useTranslation } from 'react-i18next'

const Index = () => {

  //Hooks
  const { t } = useTranslation()

  return (
    <>
        <Helmet><title>{t('About Fanavaran')}</title></Helmet>
        {/* Header */}
        <section className='FNV-About-Header'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 FNV-HCard'>
                <h1>About Fanavaran</h1>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className='FNV-About-Content'>
          <div className='container'>
            <div className='row'>
              <div className="col-12 p-0">
                <p>Fanavaran is a vocational educational institution in Canada that specializes in technical and engineering fields.</p>
                <p>The purpose of establishing the Fanavaran institute is to take a small step towards providing quality and affordable education to Persian-speaking immigrants who are prepared to challenge themselves for a new career or advance in their current profession; a goal that has been achieved through the collaboration of a group of experienced engineers, professionals, professors, and managers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className='FNV-About-Content FNV-BG-Highlight'>
          <div className='container'>
            <div className='row'>
              <h2 className='text-center'>The Founding story of the Fanavaran Institute of Technology and Engineering.</h2>
              <div className="col-12 col-md-6 ps-0 py-5">
                <img className='img-fluid' />
              </div>
              <div className="col-12 col-md-6 ps-5 py-5">
                <p>
                The idea of Fanavaran began to take shape in the mind of Mohammad Amani, the CEO of the organization, back in 2016. Despite inviting many engineers to join the project, initially, specialized individuals did not engage with this initiative. Fanavaran's goal was to facilitate the challenging path of obtaining Canadian licenses and certifications for newcomers and to serve as a guiding light for ambitious individuals who didn't know where to start. Eventually, the perseverance of the CEO of Fanavaran paid off, and by organizing voluntary courses completely free of charge in the initial days, Fanavaran officially began its work to support engineers and technical technicians towards success once again. In this video, hear the story of the founding of the Fanavaran Institute from the perspective of Mohammad Amani.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className='FNV-About-Team'>
          <h3>The purpose of establishing Fanavaran</h3>
          <div className='container'>
            <div className='row'>
              {/* Item */}
              <div className="col-12 col-md-6 p-0">
                <div className='row p-0'>
                  <div className='col-4'>
                    <img src='' className='img-fluid' />
                  </div>
                  <div className='col-8'>
                    <h4>Mo Amani</h4>
                    <span>CEO</span>
                  </div>
                </div>
              </div>

              {/* Item */}
              <div className="col-12 col-md-6 p-0">
                <div className='row p-0'>
                  <div className='col-4'>
                    <img src='' className='img-fluid' />
                  </div>
                  <div className='col-8'>
                    <h4>Babak Babaee</h4>
                    <span>COO</span>
                  </div>
                </div>
              </div>
              
              {/* Item */}
              <div className="col-12 col-md-6 p-0">
                <div className='row p-0'>
                  <div className='col-4'>
                    <img src='' className='img-fluid' />
                  </div>
                  <div className='col-8'>
                    <h4>Mona Dejban</h4>
                    <span>Marketing</span>
                  </div>
                </div>
              </div>

              {/* Item */}
              <div className="col-12 col-md-6 p-0">
                <div className='row p-0'>
                  <div className='col-4'>
                    <img src='' className='img-fluid' />
                  </div>
                  <div className='col-8'>
                    <h4>Reza KhodaRahmi</h4>
                    <span>Developer</span>
                  </div>
                </div>
              </div>

              {/* Item */}
              <div className="col-12 col-md-6 p-0">
                <div className='row p-0'>
                  <div className='col-4'>
                    <img src='' className='img-fluid' />
                  </div>
                  <div className='col-8'>
                    <h4>Khaled Hamidi</h4>
                    <span>Coordinator</span>
                  </div>
                </div>
              </div>

              {/* Item */}
              <div className="col-12 col-md-6 p-0">
                <div className='row p-0'>
                  <div className='col-4'>
                    <img src='' className='img-fluid' />
                  </div>
                  <div className='col-8'>
                    <h4>Roya Karami</h4>
                    <span>Sales</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

    </> 
  )
}

Index.guestGuard = true
export default Index
