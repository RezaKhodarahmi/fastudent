import React, { useEffect } from 'react'
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
              <a href='tel:+19055052323'>
                <i data-feather='phone'></i> +1 905 505 2323
              </a>
            </li>
          </ul>
          <h4 className='my-4'>Stay Connected</h4>
          <div className='FNV-Social'>
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
        </div>

        {/* Second Section */}
        <div className='col-6 col-sm-4 col-md-3'>
          <h4>Quick Access</h4>
          <ul className='list-group'>
            <li className='list-group-item'><a href='#'>About Fanavaran</a></li>
            <li className='list-group-item'><a href='#'>Contact Fanavaran</a></li>
            <li className='list-group-item'><a href='#'>Profile Account</a></li>
            <li className='list-group-item'><a href='#'>Blog</a></li>
            <li className='list-group-item'><a href='#'>Training Calendar</a></li>
            <li className='list-group-item'><a href='#'>Fanavaran Instructors</a></li>
            <li className='list-group-item'><a href='#'>Fanavaran Webinars</a></li>
            <li className='list-group-item'><a href='#'>Newcomers</a></li>
            <li className='list-group-item'><a href='#'>Fanavaran Brochure</a></li>
          </ul>
        </div>

        {/* Third Section */}
        <div className='col-6 col-sm-4 col-md-3'>
          <h4>Courses Category</h4>
          <ul className='list-group'>
            <li className='list-group-item'><a href='/engineering/'>Engineering</a></li>
            <li className='list-group-item'><a href='/project-management/'>Project Management</a></li>
            <li className='list-group-item'><a href='/architecture/'>Architect</a></li>
            <li className='list-group-item'><a href='/technician/'>Technician</a></li>
            <li className='list-group-item'><a href='/Job-Seeking/'>Job Seeker</a></li>
            <li className='list-group-item'><a href='/technical-self-employment/'>Technical Self Employee</a></li>
            <li className='list-group-item'><a href='/plumbing/'>Plumbing</a></li>
            <li className='list-group-item'><a href='/electrician/'>Electrician</a></li>
          </ul>
        </div>

        {/* Fourth Section */}
        <div className='col-12 col-sm-4 col-md-3'>
          <h4>Guide</h4>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'><a href='#'>Registration</a></li>
            <li className='list-group-item'><a href='#'>Watching Recorded Courses</a></li>
            <li className='list-group-item'><a href='#'>Mock Exam Tutorials</a></li>
            <li className='list-group-item'><a href='#'>Fanavaran Certificate</a></li>
            <li className='list-group-item'><a href='#'>Privacy Policy</a></li>
            <li className='list-group-item'><a href='#'>Frequently Asked Questions</a></li>
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