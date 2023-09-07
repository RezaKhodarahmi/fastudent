import React, { useEffect } from 'react'
import feather from 'feather-icons'
import Logo from 'src/views/logo.js'
const Footer = props => {
  useEffect(() => {
    feather.replace()
  })
  return (
    <footer>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 col-sm-4 col-md-2'>
            <h6>Quick Links</h6>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <a href='#'>
                  An item <i data-feather='external-link'></i>
                </a>
              </li>
              <li className='list-group-item'>
                <a href='#'>
                  A second item <i data-feather='external-link'></i>
                </a>
              </li>
              <li className='list-group-item'>
                <a href='#'>
                  A third item <i data-feather='external-link'></i>
                </a>
              </li>
              <li className='list-group-item'>
                <a href='#'>
                  A fourth item <i data-feather='external-link'></i>
                </a>
              </li>
              <li className='list-group-item'>
                <a href='#'>
                  And a fifth one <i data-feather='external-link'></i>
                </a>
              </li>
            </ul>
          </div>

          <div className='col-12 col-sm-4 col-md-2'>
            <h6>Certifications</h6>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <a href='#'>
                  An item <i data-feather='external-link'></i>
                </a>
              </li>
              <li className='list-group-item'>
                <a href='#'>
                  A second item <i data-feather='external-link'></i>
                </a>
              </li>
              <li className='list-group-item'>
                <a href='#'>
                  A third item <i data-feather='external-link'></i>
                </a>
              </li>
              <li className='list-group-item'>
                <a href='#'>
                  A fourth item <i data-feather='external-link'></i>
                </a>
              </li>
              <li className='list-group-item'>
                <a href='#'>
                  And a fifth one <i data-feather='external-link'></i>
                </a>
              </li>
            </ul>
          </div>

          <div className='col-12 col-sm-4 col-md-2'>
            <h6>Community</h6>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <a href='#'>
                  An item <i data-feather='external-link'></i>
                </a>
              </li>
              <li className='list-group-item'>
                <a href='#'>
                  A second item <i data-feather='external-link'></i>
                </a>
              </li>
              <li className='list-group-item'>
                <a href='#'>
                  A third item <i data-feather='external-link'></i>
                </a>
              </li>
              <li className='list-group-item'>
                <a href='#'>
                  A fourth item <i data-feather='external-link'></i>
                </a>
              </li>
              <li className='list-group-item'>
                <a href='#'>
                  And a fifth one <i data-feather='external-link'></i>
                </a>
              </li>
            </ul>
          </div>

          <div className='col-12 col-sm-4 col-md-2'>
            <h6>Membership</h6>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <a href='#'>
                  An item <i data-feather='external-link'></i>
                </a>
              </li>
              <li className='list-group-item'>
                <a href='#'>
                  A second item <i data-feather='external-link'></i>
                </a>
              </li>
              <li className='list-group-item'>
                <a href='#'>
                  A third item <i data-feather='external-link'></i>
                </a>
              </li>
              <li className='list-group-item'>
                <a href='#'>
                  A fourth item <i data-feather='external-link'></i>
                </a>
              </li>
              <li className='list-group-item'>
                <a href='#'>
                  And a fifth one <i data-feather='external-link'></i>
                </a>
              </li>
            </ul>
          </div>

          <div className='col-12 col-sm-4 col-md-2'>
            <h6>Organization</h6>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <a href='#'>
                  An item <i data-feather='external-link'></i>
                </a>
              </li>
              <li className='list-group-item'>
                <a href='#'>
                  A second item <i data-feather='external-link'></i>
                </a>
              </li>
              <li className='list-group-item'>
                <a href='#'>
                  A third item <i data-feather='external-link'></i>
                </a>
              </li>
              <li className='list-group-item'>
                <a href='#'>
                  A fourth item <i data-feather='external-link'></i>
                </a>
              </li>
              <li className='list-group-item'>
                <a href='#'>
                  And a fifth one <i data-feather='external-link'></i>
                </a>
              </li>
            </ul>
          </div>

          <div className='col-12 col-sm-4 col-md-2'>
            <Logo />
            <h2 className='my-4'>Stay Connected</h2>
            <ul className='list-group list-group-horizontal d-flex justify-content-between FNV-Social'>
              <li className='list-group-item'>
                <a href='#'>
                  <i data-feather='twitter'></i>
                </a>
              </li>
              <li className='list-group-item'>
                <a href='#'>
                  <i data-feather='linkedin'></i>
                </a>
              </li>
              <li className='list-group-item'>
                <a href='#'>
                  <i data-feather='instagram'></i>
                </a>
              </li>
              <li className='list-group-item'>
                <a href='#'>
                  <i data-feather='facebook'></i>
                </a>
              </li>
              <li className='list-group-item'>
                <a href='#'>
                  <i data-feather='youtube'></i>
                </a>
              </li>
            </ul>

            <h2 className='my-4'>Support</h2>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <a href='#'>Contact Us</a>
              </li>
              <li className='list-group-item'>
                <a href='#'>Press and Media</a>
              </li>
              <li className='list-group-item'>
                <a href='#'>Store Help</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='container-fluid mt-3'>
        <div className='row'>
          <div className='col-6 col-md-6'></div>
          <div className='col-6 col-md-6 d-flex justify-content-end'>
            <small>© 2023 Fanavaran, Inc.</small>
          </div>
        </div>
      </div>
    </footer>
  )
}
export async function getStaticProps() {
  return { props: {} }
}
export default Footer
