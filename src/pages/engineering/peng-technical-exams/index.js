import React, { useEffect } from 'react'
import feather from 'feather-icons'
import { appConfig } from 'src/configs/appConfig'

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
            <h1>Technical Engineering Exams in Canada</h1>
            <h2 className='text-center'>(A P.Eng Requirement)</h2>
            <p className='mt-4'>Many engineers seeking an engineering license in Canada (especially in the provinces of Ontario and British Columbia) are required to pass technical exams. The Fanavaran Institute conducts preparatory courses for these technical engineering exams in collaboration with Farsi-speaking professors from York University. These courses are held in Farsi and last for 16 hours, focusing on reviewing previous exam questions to help candidates successfully pass their desired exams.</p>
          </div>
        </div>
      </div>
    </section>

    <section className='FNV-SinglePage FNV-ContentList'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <p>Table of Contents:</p>
            <ol>
              <li>
                <Link href='#P1'>Mechanical Engineering</Link>
              </li>
              <li>
                <Link href='#P2'>Civil Engineering</Link>
              </li>
              <li>
                <Link href='#P3'>Electrical Engineering</Link>
              </li>
              <li>
                <Link href='#P4'>Materials Engineering</Link>
              </li>
              <li>
                <Link href='#P5'>CS Group Exams</Link>
              </li>
              <li>
                <Link href='#P6'>What are Technical Engineering Exams?</Link>
              </li>
              <li>
                <Link href='#P7'>Time Limits for Participating in PEO Technical Exams</Link>
              </li>
              <li>
                <Link href='#FAQ'>Frequently Asked Questions</Link>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section className='FNV-SinglePage FNV-GrayBG'>
      <div className='container pt-0'>
        <div className='row pt-0'>
          <div className='col-12'>
            <caption id='P1'>Mechanical Engineering</caption>
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
                    <p><Link href="/courses/peng-applied-thermodynamics-and-heat-transfer">A | 16-Mec-A1</Link></p>
                  </td>
                  <td>
                    <p><Link href="/courses/peng-applied-thermodynamics-and-heat-transfer">Applied Thermodynamics and Heat Transfer</Link></p>
                  </td>
                  <td>
                    <p>August-19-2024</p>
                  </td>
                  <td>
                    <p>Mondays</p>
                  </td>
                  <td>
                    <p>20:00 EST</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p><Link href="/courses/peng-advanced-fluid-mechanics">A | 16-Mec-A6</Link></p>
                  </td>
                  <td>
                    <p><Link href="/courses/peng-advanced-fluid-mechanics">Advanced Fluid Mechanics</Link></p>
                  </td>
                  <td>
                    <p>August-20-2024</p>
                  </td>
                  <td>
                    <p>Tuesdays</p>
                  </td>
                  <td>
                    <p>20:00 EST</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p><Link href="/courses/peng-advanced-strength-of-materials">A | 16-Mec-A7</Link></p>
                  </td>
                  <td>
                    <p><Link href="/courses/peng-advanced-strength-of-materials">Advanced Strength of Materials</Link></p>
                  </td>
                  <td>
                    <p>August-21-2024</p>
                  </td>
                  <td>
                    <p>Wednesdays</p>
                  </td>
                  <td>
                    <p>20:00 EST</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p><Link href="/courses/peng-engineering-materials">B | 16-Mec-B8</Link></p>
                  </td>
                  <td>
                    <p><Link href="/courses/peng-engineering-materials">Engineering Materials</Link></p>
                  </td>
                  <td>
                    <p>August-22-2024</p>
                  </td>
                  <td>
                    <p>Thursdays</p>
                  </td>
                  <td>
                    <p>20:00 EST</p>
                  </td>
                </tr>
              </tbody>
            </table>

            <caption id='P2'>Civil Engineering</caption>
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
                    <p><Link href="/courses/peng-elementary-structural-analysis">A | 16-Civ-A1</Link></p>
                  </td>
                  <td>
                    <p><Link href="/courses/peng-elementary-structural-analysis">Elementary Structural Analysis</Link></p>
                  </td>
                  <td>
                    <p>August-19-2024</p>
                  </td>
                  <td>
                    <p>Mondays</p>
                  </td>
                  <td>
                    <p>20:00 EST</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p><Link href="/courses/peng-hydraulic-engineering">A | 16-Civ-A5</Link></p>
                  </td>
                  <td>
                    <p><Link href="/courses/peng-hydraulic-engineering">Hydraulic Engineering</Link></p>
                  </td>
                  <td>
                    <p>August-20-2024</p>
                  </td>
                  <td>
                    <p>Tuesdays</p>
                  </td>
                  <td>
                    <p>20:00 EST</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p><Link href="/courses/peng-transportation-planning-and-engineering">B | 16-Civ-B7</Link></p>
                  </td>
                  <td>
                    <p><Link href="/courses/peng-transportation-planning-and-engineering">Transportation Planning and Engineering</Link></p>
                  </td>
                  <td>
                    <p>August-21-2024</p>
                  </td>
                  <td>
                    <p>Wednesdays</p>
                  </td>
                  <td>
                    <p>20:00 EST</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p><Link href="/courses/peng-traffic-engineering">B | 16-Civ-B10</Link></p>
                  </td>
                  <td>
                    <p><Link href="/courses/peng-traffic-engineering">Traffic Engineering</Link></p>
                  </td>
                  <td>
                    <p>August-22-2024</p>
                  </td>
                  <td>
                    <p>Thursdays</p>
                  </td>
                  <td>
                    <p>20:00 EST</p>
                  </td>
                </tr>
              </tbody>
            </table>

            <caption id='P3'>Electrical Engineering</caption>
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
                    <p><Link href="/courses/peng-circuits">A | 16-Elec-A1</Link></p>
                  </td>
                  <td>
                    <p><Link href="/courses/peng-circuits">Circuits</Link></p>
                  </td>
                  <td>
                    <p>August-19-2024</p>
                  </td>
                  <td>
                    <p>Mondays</p>
                  </td>
                  <td>
                    <p>20:00 EST</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p><Link href="/courses/peng-signals-and-communications">A | 16-Elec-A3</Link></p>
                  </td>
                  <td>
                    <p><Link href="/courses/peng-signals-and-communications">Signals and Communications</Link></p>
                  </td>
                  <td>
                    <p>August-20-2024</p>
                  </td>
                  <td>
                    <p>Tuesdays</p>
                  </td>
                  <td>
                    <p>20:00 EST</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p><Link href="/courses/peng-digital-communications-systems">B | 16-Elec-B3</Link></p>
                  </td>
                  <td>
                    <p><Link href="/courses/peng-digital-communications-systems">Digital Communications Systems</Link></p>
                  </td>
                  <td>
                    <p>August-21-2024</p>
                  </td>
                  <td>
                    <p>Wednesdays</p>
                  </td>
                  <td>
                    <p>20:00 EST</p>
                  </td>
                </tr>
              </tbody>
            </table>

            <caption id='P4'>Materials Engineering</caption>
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
                    <p><Link href="/courses/peng-structure-and-characterization-of-materials">A | 21‐Mat‐A3</Link></p>
                  </td>
                  <td>
                    <p><Link href="/courses/peng-structure-and-characterization-of-materials">Structure and Characterization of Materials</Link></p>
                  </td>
                  <td>
                    <p>August-19-2024</p>
                  </td>
                  <td>
                    <p>Mondays</p>
                  </td>
                  <td>
                    <p>20:00 EST</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p><Link href="/courses/peng-deformation-behaviour-and-properties-of-materials">A |21‐Mat‐A4</Link></p>
                  </td>
                  <td>
                    <p><Link href="/courses/peng-deformation-behaviour-and-properties-of-materials">Deformation Behaviour and Properties of Materials</Link></p>
                  </td>
                  <td>
                    <p>August-20-2024</p>
                  </td>
                  <td>
                    <p>Tuesdays</p>
                  </td>
                  <td>
                    <p>20:00 EST</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p><Link href="/courses/peng-phase-transformations-and-thermal-treatment">B | 21‐Mat‐A5</Link></p>
                  </td>
                  <td>
                    <p><Link href="/courses/peng-phase-transformations-and-thermal-treatment">Phase Transformations and Thermal Treatment</Link></p>
                  </td>
                  <td>
                    <p>August-21-2024</p>
                  </td>
                  <td>
                    <p>Wednesdays</p>
                  </td>
                  <td>
                    <p>20:00 EST</p>
                  </td>
                </tr>
              </tbody>
            </table>

            <caption id='P5'>CS Group Exams</caption>
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
                    <p><Link href="/courses/peng-engineering-economics">CS | 11-CS-1</Link></p>
                  </td>
                  <td>
                    <p><Link href="/courses/peng-engineering-economics">Engineering Economics</Link></p>
                  </td>
                  <td>
                    <p>August-22-2024</p>
                  </td>
                  <td>
                    <p>Thursdays</p>
                  </td>
                  <td>
                    <p>20:00 EST</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p><Link href="/courses/peng-engineering-in-society-health-safety">CS | 11-CS-2</Link></p>
                  </td>
                  <td>
                    <p><Link href="/courses/peng-engineering-in-society-health-safety">Engineering in Society - Health &amp; Safety</Link></p>
                  </td>
                  <td>
                    <p>August-23-2024</p>
                  </td>
                  <td>
                    <p>Fridays</p>
                  </td>
                  <td>
                    <p>20:00 EST</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <section className='FNV-SinglePage FNV-WhiteBG' id='P6'>
      <div className='container'>
        <img src={appConfig.appUrl + '/images/pages/engineering/peng-road-map.jpg'} className='img-fluid' />

        <div className='row'>
          <h3>What are Technical Engineering Exams?</h3>

          <div className='col-12'>
            <p>Candidates who obtained their bachelor's degree in engineering outside of Canada and the USA are required to pass one of two technical engineering exam programs to receive their engineering license (P.Eng).</p>
            <ul>
              <li>Confirmatory Exam Program (CEP)</li>
              <li>Specific Exam Program (SEP)</li>
            </ul>

            <h4>Confirmatory Exam Program (CEP)</h4>
            <p>Candidates who obtained their bachelor's degree in engineering from a program considered similar to a CEAB-approved program usually receive four technical exams. The purpose of these exams is to give candidates the opportunity to demonstrate their academic readiness equivalent to graduates of CEAB-approved programs.</p>
            <p>Candidates assigned to the CEP who have acquired at least 5 years of engineering experience since obtaining their bachelor's degree may have their application referred to the PEO Experience Assessment Committee for review.</p>
            <p>This committee can decide whether the candidate's technical exams can be waived or reduced; otherwise, the exams remain mandatory. (Based on past experience, the likelihood of having the technical exams waived is very low.)</p>
            <ul>
              <li>Candidates referred to the PEO Experience Assessment Committee must submit their experience documents in the required formats by the specified deadline.</li>
              <li>Those who fail to submit the required documents by the deadline will lose the opportunity to have their experience assessed and must begin their exam program by the specified deadline. </li>
              <li>Candidates who do not start their exam program by the deadline will have their current P.Eng application canceled.</li>
              <li>Candidates assigned to the CEP may receive exemptions for part of their assigned exams, provided they meet the Good Performance Criteria.</li>
            </ul>
            <p>Candidates who fail two exams will be assigned the Failed-to-Confirm (FTC) exam program. The FTC exam program is a type of SEP, so candidates can still receive exemptions for good performance. However, if they fail two exams, a more challenging exam program awaits them</p>

            <h4>Specific Exam Program (SEP)</h4>
            <p>If the PEO assessment indicates that the applicant's academic credentials are below the accepted Canadian standard, they will be given a specific exam program to address the identified weaknesses. The specific exam program may include the following:</p>
            <ul>
              <li>Basic Studies exams</li>
              <li>Discipline-specific exams</li>
              <li>Complementary Studies exams</li>
              <li>Thesis</li>
            </ul>
            <p>The Basic Studies exams are prerequisites and must be completed first. After successfully passing all the Basic Studies exams, the PEO will reassess the candidate's file and may adjust the main exam program, informing the candidate of the available options for completing the remaining exams.</p>

            <h5>Generally, the technical exams include four exams:</h5>
            <ul>
              <li>Two exams from Group A in engineering discipline</li>
              <li>One exam from Group B in engineering disciplines</li>
              <li>One exam from Complementary Studies (CS Group)</li>
            </ul>
            <p>The passing score for all PEO exams is 50%. When the average score of the applicant in the technical exams is 55%, the applicant has successfully completed the program.</p>
          </div>
        </div>
      </div>
    </section>

    <section className='FNV-SinglePage FNV-GreyBG mb-5' id='P7'>
      <div className='container'>
        <div className='row'>
          <h3>Time Limits for Participating in PEO Technical Exams:</h3>

          <div className='col-12'>
            <ul>
              <li>PEO technical exams are held twice a year.</li>
              <li>Candidates must participate in at least one technical exam within two academic years of receiving their exam program.</li>
              <li>After starting the exam program, the candidate must take at least one exam each academic year; otherwise, their file will be closed</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className='FNV-SinglePage FNV-WhiteBG' id='FAQ'>
      <div className='container'>
        <div className='row'>
          <h3>FAQs</h3>

          <div className='accordion p-0' id='FAQEngineering'>
            {/* Question & Answer */}
            <div className='accordion-item'>
              <h2 className='accordion-header'>
                <button
                  className='accordion-button'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#Question1'
                  aria-expanded='true'
                  aria-controls='Question1'
                >
                  Is it mandatory to match the type of discipline with our chosen technical exams?
                </button>
              </h2>
              <div id='Question1' className='accordion-collapse collapse show' data-bs-parent='#FAQEngineering'>
                <div className='accordion-body'>
                  <p>No; you can choose your desired exam from any discipline. Generally, you must select two exams from Group A, one exam from Group B, and one exam from Complementary Studies (CS Group).</p>
                </div>
              </div>
            </div>

            {/* Question & Answer */}
            <div className='accordion-item'>
              <h2 className='accordion-header'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#Question2'
                  aria-expanded='false'
                  aria-controls='Question2'
                >
                  Can I change the courses I selected after registration?
                </button>
              </h2>
              <div id='Question2' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                <div className='accordion-body'>Candidates can change their selected courses before registration. After registration, changes are not possible, and the type of exams cannot be altered.</div>
              </div>
            </div>

            {/* Question & Answer */}
            <div className='accordion-item'>
              <h2 className='accordion-header'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#Question3'
                  aria-expanded='false'
                  aria-controls='Question3'
                >
                  How can I register for exams that are not listed in the portal?
                </button>
              </h2>
              <div id='Question3' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                <div className='accordion-body'>
                  <p>If the exams that candidates intend to take are not listed in the portal, they can email apply@peo.on.ca to inform about the issue; it may be possible to register for the desired exam in the next cycle.</p>
                </div>
              </div>
            </div>

            {/* Question & Answer */}
            <div className='accordion-item'>
              <h2 className='accordion-header'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#Question4'
                  aria-expanded='false'
                  aria-controls='Question4'
                >
                  How many times can candidates fail a technical exam?
                </button>
              </h2>
              <div id='Question4' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                <div className='accordion-body'>
                  <p>
                    Candidates can retake the technical exams an unlimited number of times until they meet the required number of technical exams needed to obtain the desired license.
                  </p>
                </div>
              </div>
            </div>

            {/* Question & Answer */}
            <div className='accordion-item'>
              <h2 className='accordion-header'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#Question5'
                  aria-expanded='false'
                  aria-controls='Question5'
                >
                  What is the next step after passing the technical exams?
                </button>
              </h2>
              <div id='Question5' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                <div className='accordion-body'>
                  <p>Candidates must mark the "Academics" section in the license application portal as "Complete</p>
                </div>
              </div>
            </div>

            {/* Question & Answer */}
            <div className='accordion-item'>
              <h2 className='accordion-header'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#Question6'
                  aria-expanded='false'
                  aria-controls='Question6'
                >
                  How will we be informed of the exam results?
                </button>
              </h2>
              <div id='Question6' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                <div className='accordion-body'>
                  <p>You will receive an email indicating the result of each exam.</p>
                </div>
              </div>
            </div>

            {/* Question & Answer */}
            <div className='accordion-item'>
              <h2 className='accordion-header'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#Question7'
                  aria-expanded='false'
                  aria-controls='Question7'
                >
                  How many times a year are the exams held?
                </button>
              </h2>
              <div id='Question7' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                <div className='accordion-body'>
                  <ul>
                    <li>The exams are held twice a year.</li>
                    <li>Registration for the Spring/Summer session begins in January.</li>
                    <li>Registration for the Fall/Winter session begins in July.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Question & Answer */}
            <div className='accordion-item'>
              <h2 className='accordion-header'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#Question8'
                  aria-expanded='false'
                  aria-controls='Question8'
                >
                   How should I prepare for the technical exams?
                </button>
              </h2>
              <div id='Question8' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                <div className='accordion-body'>
                  <p>To prepare for the exams, you can attend classes and training courses or study educational books related to your discipline and the specific exam. The Fanavaran Institute periodically offers preparatory courses for technical exams.</p>
                </div>
              </div>
            </div>

            {/* Question & Answer */}
            <div className='accordion-item'>
              <h2 className='accordion-header'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#Question9'
                  aria-expanded='false'
                  aria-controls='Question9'
                >
                   Can I take the technical exam outside of Canada?
                </button>
              </h2>
              <div id='Question9' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                <div className='accordion-body'>
                  <p>Yes; the technical exams are conducted online. Therefore, candidates can take the technical exams outside of Canada if they have access to high-speed internet and a webcam.</p>
                </div>
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
