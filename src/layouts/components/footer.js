import React, { useEffect } from 'react'
import Input from '@mui/material/Input'
import feather from 'feather-icons'
import Logo from 'src/views/logo.js'

// ** Hook Imports
import Link from 'next/link'

const Footer = props => {
  useEffect(() => {
    feather.replace()
  })

  return (
    <>
      {/* Fixed Social */}
      <div className='FNV-FixedSocial'>
        <Link href='https://www.instagram.com/fanavaran_ca/' className='FNV-Instagram'>
          <i data-feather='instagram'></i>
        </Link>
        <Link href='https://www.facebook.com/fanavaran.ca' className='FNV-Facebook'>
          <i data-feather='facebook'></i>
        </Link>
        <Link href='https://www.linkedin.com/company/fanavaran-ca/' className='FNV-Linkedin'>
          <i data-feather='linkedin'></i>
        </Link>
        <Link href='https://www.youtube.com/channel/UCKbfvGZBXPn2Y3LGb9YDiIA' className='FNV-Youtube'>
          <i data-feather='youtube'></i>
        </Link>
        <Link href='https://fanavaran.ca/telegram-groups/' className='FNV-Telegram'>
          <i data-feather='send'></i>
        </Link>
      </div>

      {/* NewsLetter */}
      <newsletter>
          <div class="container">
              <div class="row">
                  <div class="col-12 col-md-6">
                      <h3>Fanavaran Newsletter</h3>
                      <p>To know about the latest courses, webinars ..., become a member of the Fanavaran newsletter.</p>
                  </div>
                  <div class="col-12 col-md-6">
                      <div class='FNV-Newsletter input-group mb-3'>
                          <Input type='text' placeholder='Enter your email address' class='form-control FNV-NewsletterInput' aria-describedby='button-addon1' fullWidth />
                          <button class='FNV-Btn BtnMedium PrimaryColor' type='button' id='button-addon1'>
                              <i data-feather='corner-up-left'></i>
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </newsletter>

      {/* Footer content */}
      <footer>
        {/* Footer Content */}
        <div className='container'>
          <div className='row'>
            {/* First Section */}
            <div className='col-12 col-sm-4 col-md-3'>
              <Logo />
              <h4 className='my-4'>Contact Us</h4>
              <ul className='list-group'>
                <li className='list-group-item'>
                  <Link href='https://t.me/Fanavaran_support'>
                    <i data-feather='send'></i> Fanavaran Telegram Support
                  </Link>
                </li>
                <li className='list-group-item'>
                  <Link href='mailto:info@fanavaran.ca'>
                    <i data-feather='mail'></i> info[at]fanavaran.ca
                  </Link>
                </li>
                <li className='list-group-item'>
                  <Link href='tel:+19055052323'>
                    <i data-feather='phone'></i> +1 905 505 2323
                  </Link>
                </li>
              </ul>
              <h4 className='my-4'>Stay Connected</h4>
              <div className='FNV-Social'>
                <Link href='https://www.instagram.com/fanavaran_ca/' className='FNV-Instagram'>
                  <i data-feather='instagram'></i>
                </Link>
                <Link href='https://www.facebook.com/fanavaran.ca' className='FNV-Facebook'>
                  <i data-feather='facebook'></i>
                </Link>
                <Link href='https://www.linkedin.com/company/fanavaran-ca/' className='FNV-Linkedin'>
                  <i data-feather='linkedin'></i>
                </Link>
                <Link href='https://www.youtube.com/channel/UCKbfvGZBXPn2Y3LGb9YDiIA' className='FNV-Youtube'>
                  <i data-feather='youtube'></i>
                </Link>
                <Link href='https://fanavaran.ca/telegram-groups/' className='FNV-Telegram'>
                  <i data-feather='send'></i>
                </Link>
              </div>
            </div>

            {/* Second Section */}
            <div className='col-6 col-sm-4 col-md-3'>
              <h4>Quick Access</h4>
              <ul className='list-group'>
                <li className='list-group-item'>
                  <Link href='#'>About Fanavaran</Link>
                </li>
                <li className='list-group-item'>
                  <Link href='#'>Contact Fanavaran</Link>
                </li>
                <li className='list-group-item'>
                  <Link href='#'>Profile Account</Link>
                </li>
                <li className='list-group-item'>
                  <Link href='#'>Blog</Link>
                </li>
                <li className='list-group-item'>
                  <Link href='#'>Training Calendar</Link>
                </li>
                <li className='list-group-item'>
                  <Link href='#'>Fanavaran Instructors</Link>
                </li>
                <li className='list-group-item'>
                  <Link href='#'>Fanavaran Webinars</Link>
                </li>
                <li className='list-group-item'>
                  <Link href='#'>Newcomers</Link>
                </li>
                <li className='list-group-item'>
                  <Link href='#'>Fanavaran Brochure</Link>
                </li>
              </ul>
            </div>

            {/* Third Section */}
            <div className='col-6 col-sm-4 col-md-3'>
              <h4>Courses Category</h4>
              <ul className='list-group'>
                <li className='list-group-item'>
                  <Link href='/engineering/'>Engineering</Link>
                </li>
                <li className='list-group-item'>
                  <Link href='/project-management/'>Project Management</Link>
                </li>
                <li className='list-group-item'>
                  <Link href='/architecture/'>Architect</Link>
                </li>
                <li className='list-group-item'>
                  <Link href='/technician/'>Technician</Link>
                </li>
                <li className='list-group-item'>
                  <Link href='/Job-Seeking/'>Job Seeker</Link>
                </li>
                <li className='list-group-item'>
                  <Link href='/technical-self-employment/'>Technical Self Employee</Link>
                </li>
                <li className='list-group-item'>
                  <Link href='/plumbing/'>Plumbing</Link>
                </li>
                <li className='list-group-item'>
                  <Link href='/electrician/'>Electrician</Link>
                </li>
              </ul>
            </div>

            {/* Fourth Section */}
            <div className='col-12 col-sm-4 col-md-3'>
              <h4>Guide</h4>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>
                  <Link href='#'>Registration</Link>
                </li>
                <li className='list-group-item'>
                  <Link href='#'>Watching Recorded Courses</Link>
                </li>
                <li className='list-group-item'>
                  <Link href='#'>Mock Exam Tutorials</Link>
                </li>
                <li className='list-group-item'>
                  <Link href='#'>Fanavaran Certificate</Link>
                </li>
                <li className='list-group-item'>
                  <Link href='#'>Privacy Policy</Link>
                </li>
                <li className='list-group-item'>
                  <Link href='#'>Frequently Asked Questions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className='container FNV-Copyright'>
          <div className='row'>
            <div className='col-12'>
              <small>Copyright © 2015-2023 Fanavaran. All rights reserved.</small>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export async function getStaticProps() {
  return { props: {} }
}

export default Footer
