import React, { useEffect } from 'react'
import feather from 'feather-icons'

// ** Import Translation
import { useTranslation } from 'react-i18next'

import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'

const Index = () => {
  //Hooks
  const router = useRouter()
  const { t } = useTranslation()
  const dispatch = useDispatch()

  // Check website lang
  useEffect(() => {
    const lng = window.localStorage.getItem('i18nextLng')
    if (lng == 'fa') {
      router.push('/engineering/peng-technical-exams/fa')
    }
  }, [router])

  // Feathericon
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof feather !== 'undefined' && feather !== null) {
        feather.replace()
      }
    }, 1000) // 1 second delay

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <section className='FNV-SinglePage FNV-SinglePage-Header' >
        <div className='container'>
          <div className='row FNV-Header'>
            <div className='col-12 FNV-Content-White'>
              <h1>P.Eng Technical Exams</h1>
              <h2>
                Technical Examinations on the Path to Obtaining a Professional Engineering License in Canada (P.Eng)
              </h2>
              <p>
                Technical engineering exams are a crucial step in the journey to obtain a Professional Engineering
                License (P.Eng) in Canada, particularly in Ontario and British Columbia. Applicants who earned their
                academic credentials outside of Canada are required to pass these technical exams. Students must choose
                three out of four exams, with two from Group A, one from Group B, and one from Group CS. The passing
                mark for all PEO exams is 50%.
              </p>
              <p>PEO’s technical exams are offered twice a year, in May and December. </p>
              <p>
                At Fanavaran, we offer preparatory courses for these technical engineering exams in collaboration with
                professors and postdoctoral from York University, Canada. Our courses are designed to assist
                Internationally Educated Engineers in preparing for their Confirmatory Professional Engineering Exams
                (also known as technical exams) and obtaining their Professional Engineering Licenses (P.Eng) in Canada.
                Our courses also include a comprehensive review of past exams, ensuring that you’re well-prepared for
                success.
              </p>
              <p>
                Classes are scheduled to commence in the first week of February 2024 and will be conducted online via the Zoom platform. Each class is 2 hours long, and the entire course comprises 16 hours of instruction.{' '}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GrayBG'>
        <div className='container pt-0'>
          <div className='row pt-0'>
            <div className='col-12'>
              <caption>Mechanical Engineering</caption>
              <table className='table table-striped table-hover'>
                <tbody>
                  <tr>
                    <td>
                      <p>Group | Code</p>
                    </td>
                    <td>
                      <p>Course</p>
                    </td>
                    <td>
                      <p>Dates</p>
                    </td>
                    <td>
                      <p>Days of the Week</p>
                    </td>
                    <td>
                      <p>Time</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>A | 16-Mec-A1</p>
                    </td>
                    <td>
                      <p>Applied Thermodynamics and Heat Transfer</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>A | 16-Mec-A6</p>
                    </td>
                    <td>
                      <p>Advanced Fluid Mechanics</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>A | 16-Mec-A7</p>
                    </td>
                    <td>
                      <p>Advanced Strength of Materials</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>B | 16-Mec-B8</p>
                    </td>
                    <td>
                      <p>Engineering Materials</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>&nbsp;</p>

              <caption>Civil Engineering</caption>
              <table className='table table-striped table-hover'>
                <tbody>
                  <tr>
                    <td>
                      <p>Group | Code</p>
                    </td>
                    <td>
                      <p>Course</p>
                    </td>
                    <td>
                      <p>Dates</p>
                    </td>
                    <td>
                      <p>Days of the Week</p>
                    </td>
                    <td>
                      <p>Time</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>A | 16-Civ-A1</p>
                    </td>
                    <td>
                      <p>Elementary Structural Analysis</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>A | 16-Civ-A5</p>
                    </td>
                    <td>
                      <p>Hydraulic Engineering</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>B | 16-Civ-B7</p>
                    </td>
                    <td>
                      <p>Transportation Planning and Engineering</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>B | 16-Civ-B10</p>
                    </td>
                    <td>
                      <p>Traffic Engineering</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                  </tr>
                </tbody>
              </table>

              <caption>Electrical Engineering</caption>
              <table className='table table-striped table-hover'>
                <tbody>
                  <tr>
                    <td>
                      <p>Group | Code</p>
                    </td>
                    <td>
                      <p>Course</p>
                    </td>
                    <td>
                      <p>Dates</p>
                    </td>
                    <td>
                      <p>Days of the Week</p>
                    </td>
                    <td>
                      <p>Time</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>A | 16-Elec-A1</p>
                    </td>
                    <td>
                      <p>Circuits</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>A | 16-Elec-A3</p>
                    </td>
                    <td>
                      <p>Signals and Communications</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>B | 16-Elec-B3</p>
                    </td>
                    <td>
                      <p>Digital Communications Systems</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                  </tr>
                </tbody>
              </table>

              <caption>CS Group Exams</caption>
              <table className='table table-striped table-hover'>
                <tbody>
                  <tr>
                    <td>
                      <p>Group | Code</p>
                    </td>
                    <td>
                      <p>Course</p>
                    </td>
                    <td>
                      <p>Dates</p>
                    </td>
                    <td>
                      <p>Days of the Week</p>
                    </td>
                    <td>
                      <p>Time</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>CS | 11-CS-1</p>
                    </td>
                    <td>
                      <p>Engineering Economics</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>CS | 11-CS-2</p>
                    </td>
                    <td>
                      <p>Engineering in Society - Health &amp; Safety</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-WhiteBG'>
        <div className='container'>
          <div className='row'>
            <h3>Time Constraints for Participating in PEO Technical Examinations</h3>

            <div className='col-12'>
              <ul>
                <li>PEO Technical Examinations are held twice annually (in the months of May and December).</li>
                <li>
                  Candidates must participate in at least one Technical Examination within two academic years after
                  receiving their examination program.
                </li>
                <li>
                  After commencing the examination program, candidates are required to participate in at least one
                  examination every academic year; otherwise, their file will be closed.
                </li>
                <li>
                  All examination programs must be successfully completed within 8 academic years from the time the
                  examination program is declared to the candidate.
                </li>
                <li>Compliance with these time constraints is mandatory for candidates.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GrayBG'>
        <div className='container'>
          <div className='row'>
            <h3>Timing and Location of PEO Examinations</h3>

            <div className='col-12'>
              <p>
                PEO Technical Examinations are conducted in the months of May and December at 14 centers within the
                province of Ontario. Examinations typically span a 5-day period. Registration packages for the May
                session are sent out in January, and for the December session, they are sent out in July.
              </p>
              <ul>
                <li>
                  If candidates have not received their examination packages by the specified times, they should contact
                  the examination center
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

Index.guestGuard = true

export default Index
