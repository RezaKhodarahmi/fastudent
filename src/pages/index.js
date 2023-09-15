// ** React Imports
import { useEffect } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Hook Imports
import { useAuth } from 'src/hooks/useAuth'
import Link from 'next/link'
import { appConfig } from 'src/configs/appConfig'

/**
 *  Set Home URL based on User Roles
 */
const Home = () => {
  return (
    <>
      <section className='FNV-Header'>
        <div className='container d-flex align-items-center h-100'>
          <div className='row'>
            <div className='col-12 col-md-6 FNV-HCard'>
              <h2>Activate Your Future</h2>
              <p>
                Up skill with live instructor-led training from our Fanavaran Authorized Training Partners. Prepare for
                your certification exam or maintain your certification with PDUs.
              </p>
              <Link href={`${appConfig.appUrl}/courses`} className='FNV-Btn BtnPrimary BtnLarge'>
                Find a Course
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-Top_Categories'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-2 d-flex justify-content-center align-items-center'>
              <Link href='/engineering'>
                <img src='/img/engineering.png' className='img-fluid' />
                <h3>Engineering</h3>
              </Link>
            </div>
            <div className='col-12 col-sm-12 col-md-2 d-flex justify-content-center align-items-center'>
              <Link href='/project-management'>
                <img src='/img/Project-Management.png' className='img-fluid' />
                <h3>Project Management</h3>
              </Link>
            </div>
            <div className='col-12 col-sm-12 col-md-2 d-flex justify-content-center align-items-center'>
              <Link href='/architecture'>
                <img src='/img/Architect.png' className='img-fluid' />
                <h3>Architect</h3>
              </Link>
            </div>
            <div className='col-12 col-sm-12 col-md-2 d-flex justify-content-center align-items-center'>
              <Link href='/technician'>
                <img src='/img/Technician.png' className='img-fluid' />
                <h3>Technician</h3>
              </Link>
            </div>
            <div className='col-12 col-sm-12 col-md-2 d-flex justify-content-center align-items-center'>
              <Link href='/Job-Seeking'>
                <img src='/img/Job-Seeker.png' className='img-fluid' />
                <h3>Job Seeker</h3>
              </Link>
            </div>
            <div className='col-12 col-sm-12 col-md-2 d-flex justify-content-center align-items-center'>
              <Link href='/technical-self-employment'>
                <img src='/img/Self-Emplyee.png' className='img-fluid' />
                <h3>Self Employed</h3>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-Membership'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-4'>
              <h3>Membership</h3>
              <p>
                Join Fanavaran, the world’s leading project management organization with almost 5,000 Global Members and
                over 300 Local Chapters Internationally.
              </p>
              <a href='#' className='d-block my-4'>
                FIND LOCAL CHAPTERS
              </a>
              <a href='#' className='d-block my-4'>
                EXPLORE MEMBERSHIP OPTIONS
              </a>
            </div>
            <div className='col-12 col-sm-12 col-md-4'>
              <h4>What is Fanavaran Membership?</h4>
              <p>
                In a word, dedication. Fanavaran membership signifies that you’re serious about your project management
                career and your professional development. It highlights this dedication to employers, colleagues and
                stakeholders, giving you an edge in the job market. It also provides you with access to valuable
                knowledge, networks and resources.
              </p>
            </div>
            <div className='col-12 col-sm-12 col-md-4 bg-primary d-flex justify-content-center align-items-center'>
              Advertising Section
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-Certification'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-4 d-flex flex-column justify-content-center'>
              <h3>Certifications</h3>
              <p>
                <strong>You, certified.</strong> The recognition you deserve; the credibility you need. PMI
                certification is a mark of excellence — in any location, in any industry.
              </p>
              <a href='#' className='d-block my-4'>
                Design Your Project Management Career
              </a>
            </div>
            <div className='col-12 col-sm-12 col-md-4 d-flex flex-column justify-content-center'>
              <h4>Explore Fanavaran Certifications</h4>
              <p>Which Fanavaran Certification Is Right For You?</p>
              <p>
                Show employers you have the practical knowledge, insights and professional expertise to meet
                increasingly complex project demands. Stand out with a Fanavaran certification.
              </p>
            </div>
            <div className='col-12 col-sm-12 col-md-4 d-flex justify-content-center align-items-center'>
              <img
                src='https://marketplace.canva.com/EAFIEvneNCM/1/0/1600w/canva-golden-elegant-certificate-of-appreciation-0bN-aLORS9U.jpg'
                className='img-fluid'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-Events'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-4 d-flex flex-column justify-content-center'>
              <h3>Events</h3>
              <p>
                Sign up for a PMI event to build your skills, develop lasting relationships and engage with experts.
                Share best practices and gain practical insights.
              </p>
              <a href='#' className='d-block my-4'>
                Explore Events
              </a>
            </div>
            <div className='col-12 col-sm-12 col-md-4 d-flex flex-column justify-content-center'>
              <h4>Promoted Event Title</h4>
              <h5>Empowering Your Future – Register Today!</h5>
              <p>
                The project management landscape is changing fast. Join us to learn the key power skills you need to
                succeed.
              </p>
            </div>
            <div className='col-12 col-sm-12 col-md-4 d-flex justify-content-center align-items-center'>
              <img
                src='https://fanavaran.ca/wp-content/uploads/2023/04/LIVE-POSTER-persian-01.jpg'
                className='img-fluid'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-Youtube2'>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <h3>Events</h3>
            </div>
            <div className='col-6'>
              <a href='#'>
                <i data-feather='menu'></i> SEE MORE
              </a>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-3 d-flex flex-column justify-content-center'>
              <a href='#'>
                <img src='/img/webinar1.jpg' className='img-fluid' />
                <i data-feather='play'></i>
              </a>
            </div>

            <div className='col-12 col-sm-12 col-md-3 d-flex flex-column justify-content-center'>
              <a href='#'>
                <img src='/img/webinar2.jpg' className='img-fluid' />
                <i data-feather='play'></i>
              </a>
            </div>

            <div className='col-12 col-sm-12 col-md-3 d-flex flex-column justify-content-center'>
              <a href='#'>
                <img src='/img/webinar3.jpg' className='img-fluid' />
                <i data-feather='play'></i>
              </a>
            </div>

            <div className='col-12 col-sm-12 col-md-3 d-flex flex-column justify-content-center'>
              <a href='#'>
                <img src='/img/webinar1.jpg' className='img-fluid' />
                <i data-feather='play'></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-Youtube'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-3 d-flex flex-column justify-content-center'>
              <a href='#'>
                <i data-feather='play'></i>
              </a>
            </div>

            <div className='col-12 col-sm-12 col-md-3 d-flex flex-column justify-content-center'>
              <a href='#'>
                <i data-feather='play'></i>
              </a>
            </div>

            <div className='col-12 col-sm-12 col-md-3 d-flex flex-column justify-content-center'>
              <a href='#'>
                <i data-feather='play'></i>
              </a>
            </div>

            <div className='col-12 col-sm-12 col-md-3 d-flex flex-column justify-content-center'>
              <a href='#'>
                <i data-feather='play'></i>
              </a>
            </div>

            <div className='col-12 col-sm-12 col-md-3 d-flex flex-column justify-content-center'>
              <a href='#'>
                <i data-feather='play'></i>
              </a>
            </div>

            <div className='col-12 col-sm-12 col-md-3 d-flex flex-column justify-content-center'>
              <a href='#'>
                <i data-feather='play'></i>
              </a>
            </div>

            <div className='col-12 col-sm-12 col-md-3 d-flex flex-column justify-content-center'>
              <a href='#'>
                <i data-feather='play'></i>
              </a>
            </div>

            <div className='col-12 col-sm-12 col-md-3 d-flex flex-column justify-content-center'>
              <a href='#'>
                <i data-feather='menu'></i> See More
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className='FNV-FixedSocial'>
        <a href='https://www.instagram.com/fanavaran_ca/' className='FNV-Instagram'>
          <i data-feather='instagram'></i>
        </a>
        <a href='https://www.facebook.com/fanavaran.ca' className='FNV-Facebook'>
          <i data-feather='facebook'></i>
        </a>
        <a href='https://www.linkedin.com/company/fanavaran-ca/' className='FNV-Linkedin'>
          <i data-feather='linkedin'></i>
        </a>
        <a href='https://www.youtube.com/channel/UCKbfvGZBXPn2Y3LGb9YDiIA' className='FNV-Youtube'>
          <i data-feather='youtube'></i>
        </a>
        <a href='https://fanavaran.ca/telegram-groups/' className='FNV-Telegram'>
          <i data-feather='send'></i>
        </a>
      </div>
    </>
  )
}

export default Home
