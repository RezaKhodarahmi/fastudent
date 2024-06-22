import React, { useEffect } from 'react'
import feather from 'feather-icons'

import { useRouter } from 'next/router'
import Link from 'next/link'

const Index = () => {

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
      <section className='FNV-SinglePage' >
        <div className='FNV-BG'>
          <img src='/img/pattern-bg.jpg' className='img-fluid' alt='Engineering Background' />
        </div>
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
                Classes are scheduled to commence in the first week of February 2024 and will be conducted online via
                the Zoom platform. Each class is 2 hours long, and the entire course comprises 16 hours of instruction.{' '}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GrayBG'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <caption>Mechanical Engineering</caption>
              <table className='table table-striped table-hover'>
                <thead>
                  <tr>
                    <th>Group | Code</th>
                    <th>Course</th>
                    <th>Dates</th>
                    <th>Days of the Week</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>A | 16-Mec-A1</td>
                    <td>Applied Thermodynamics and Heat Transfer</td>
                    <td>
                      February: 19, 26
                      <br />
                      March: 4, 11, 18, 25
                      <br />
                      April: 1, 8
                    </td>
                    <td>Monday</td>
                    <td>19:30-21:30 EST</td>
                  </tr>
                  <tr>
                    <td>A | 16-Mec-A6</td>
                    <td>Advanced Fluid Mechanics</td>
                    <td>
                      February: 20, 27
                      <br />
                      March: 5, 12, 19, 26
                      <br />
                      April: 2, 9
                    </td>
                    <td>Tuesday</td>
                    <td>19:30-21:30 EST</td>
                  </tr>
                  <tr>
                    <td>A | 16-Mec-A7</td>
                    <td>Advanced Strength of Materials</td>
                    <td>
                      February: 21, 28
                      <br />
                      March: 6, 13, 20, 27
                      <br />
                      April: 3, 10
                    </td>
                    <td>Wednesday</td>
                    <td>19:30-21:30 EST</td>
                  </tr>
                  <tr>
                    <td>B | 16-Mec-B8</td>
                    <td>Engineering Materials</td>
                    <td>
                      February: 22, 29
                      <br />
                      March: 7, 14, 21, 28
                      <br />
                      April: 4, 11
                    </td>
                    <td>Thursday</td>
                    <td>19:30-21:30 EST</td>
                  </tr>
                </tbody>
              </table>

              <caption>Civil Engineering</caption>
              <table className='table table-striped table-hover'>
                <thead>
                  <tr>
                    <th>Group | Code</th>
                    <th>Course</th>
                    <th>Dates</th>
                    <th>Days of the Week</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>A | 16-Civ-A1</td>
                    <td>Elementary Structural Analysis</td>
                    <td>
                      February: 19, 26
                      <br />
                      March: 4, 11, 18, 25
                      <br />
                      April: 1, 8
                    </td>
                    <td>Monday</td>
                    <td>19:30-21:30 EST</td>
                  </tr>
                  <tr>
                    <td>A | 16-Civ-A5</td>
                    <td>Hydraulic Engineering</td>
                    <td>
                      February: 20, 27
                      <br />
                      March: 5, 12, 19, 26
                      <br />
                      April: 2, 9
                    </td>
                    <td>Tuesday</td>
                    <td>19:30-21:30 EST</td>
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
            <h3>Mechanical Engineering Technical Exams</h3>

            <div className='col-12'>
              <h4>Group A</h4>
              <h5>Choose a course</h5>
              <div class='d-flex align-items-start'>
                <div
                  class='nav flex-column nav-pills nav-fill'
                  id='group-a-tab'
                  role='tablist'
                  aria-orientation='vertical'
                >
                  <button
                    class='nav-link active'
                    id='course-1-tab'
                    data-bs-toggle='pill'
                    data-bs-target='#course-1'
                    type='button'
                    role='tab'
                    aria-controls='course-1'
                    aria-selected='true'
                  >
                    16-Mec-A1 -Applied Thermodynamics and Heat Transfer
                  </button>
                  <button
                    class='nav-link'
                    id='course-2-tab'
                    data-bs-toggle='pill'
                    data-bs-target='#course-2'
                    type='button'
                    role='tab'
                    aria-controls='course-2'
                    aria-selected='false'
                  >
                    16-Mec-A6 - Advanced Fluid Mechanics
                  </button>
                  <button
                    class='nav-link'
                    id='course-3-tab'
                    data-bs-toggle='pill'
                    data-bs-target='#course-3'
                    type='button'
                    role='tab'
                    aria-controls='course-3'
                    aria-selected='false'
                  >
                    16-Mec-A7 - Advanced Strength of Materials
                  </button>
                </div>
                <div class='tab-content' id='group-a-tabContent'>
                  <div
                    class='tab-pane fade show active'
                    id='course-1'
                    role='tabpanel'
                    aria-labelledby='course-1-tab'
                    tabindex='0'
                  >
                    <Link
                      href='https://buy.stripe.com/5kA5mLe6A5Zh3YY6ot'
                      className='FNV-Btn BtnPrimary BtnMedium me-3'
                    >
                      Enroll
                    </Link>
                    Duration: 16 Hours $420
                    <hr />
                    <p>Date of classes: Feb 19, 26 – Mar 4, 11, 18, 25 – Apr 1, 8</p>
                    <hr />
                    <p>
                      Computation of reactions, shearing forces, normal forces, bending moments, and deformations in
                      determinate structures. Inﬂuence lines for moving loads. Moment distribution, slope deﬂection, and
                      energy methods for indeterminate structures without sidesway.
                    </p>
                  </div>
                  <div class='tab-pane fade' id='course-2' role='tabpanel' aria-labelledby='course-2-tab' tabindex='0'>
                    <Link
                      href='https://buy.stripe.com/aEU16vbYs0EX1QQ14b'
                      className='FNV-Btn BtnPrimary BtnMedium me-3'
                    >
                      Enroll
                    </Link>
                    Duration: 16 Hours $420
                    <hr />
                    <p>Date of classes: Feb 20, 27 – Mar 5, 12, 19, 26 – Apr 2, 9</p>
                    <hr />
                    <p>
                      Review of basic concepts; elementary· two-dimensional potential flow, vorticity and circulation,
                      one­dimensional compressible flow of an inviscid perfect gas, isentropic flow through nozzles,
                      shock waves, frictional compressible flow in conduits, equations of viscous flow, laminar and
                      turbulent boundary layers. Bernoulli’s equation and Navier-Stokes equations. Dimensional analysis
                      and similitude.
                    </p>
                  </div>
                  <div class='tab-pane fade' id='course-3' role='tabpanel' aria-labelledby='course-3-tab' tabindex='0'>
                    <Link
                      href='https://buy.stripe.com/fZeaH53rW9bt5329AI'
                      className='FNV-Btn BtnPrimary BtnMedium me-3'
                    >
                      Enroll
                    </Link>
                    Duration: 16 Hours $420
                    <hr />
                    <p>Date of classes: Feb 21, 28 – Mar 6, 13, 20, 27 – Apr 3, 10</p>
                    <hr />
                    <p>
                      Stress-Strain Analysis: Stress and strain, transformations, principal stresses, graphical
                      representation by Mohr’s circles of biaxial and triaxial cases, generalized Hooke’s law including
                      thermal strains, equations of equilibrium and compatibility, plane strain and plane stress
                      problems. Failure theories and limit analysis. Euler critical loads for columns, curved beams,
                      thick-walled cylinders and rotating disks, contact stresses, strain gauges and their application,
                      stress concentrations, introductory fracture mechanics. Energy Methods: Strain energy principles,
                      virtual work, Castigliano’s theorem. Applications to cases of axial, bending, and torsional
                      loadings. Applications to statically indeterminate problems.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-12'>
              <h4>Group B</h4>
              <h5>Choose a course</h5>
              <div class='d-flex align-items-start'>
                <div
                  class='nav flex-column nav-pills nav-fill'
                  id='group-b-tab'
                  role='tablist'
                  aria-orientation='vertical'
                >
                  <button
                    class='nav-link active'
                    id='course-4-tab'
                    data-bs-toggle='pill'
                    data-bs-target='#course-4'
                    type='button'
                    role='tab'
                    aria-controls='course-4'
                    aria-selected='true'
                  >
                    16-Mec-B8 - Engineering Materials
                  </button>
                </div>
                <div class='tab-content' id='group-b-tabContent'>
                  <div
                    class='tab-pane fade show active'
                    id='course-4'
                    role='tabpanel'
                    aria-labelledby='course-4-tab'
                    tabindex='0'
                  >
                    <Link
                      href='https://buy.stripe.com/aEU7uTgeIgDV7ba28h'
                      className='FNV-Btn BtnPrimary BtnMedium me-3'
                    >
                      Enroll
                    </Link>
                    Duration: 16 Hours $420
                    <hr />
                    <p>Date of classes: Feb 22, 29 – Mar 7, 14, 21, 28 – Apr 4, 11</p>
                    <hr />
                    <p>
                      Working properties of steel, aluminum, magnesium, and titanium light alloys, superalloys and metal
                      matrix composites. High temperature materials, metallic foams and other cellular materials,
                      precursor-derived ceramics, corrosion of materials, intermetallics, multicomponent alloys,
                      biomedical materials, polymeric composites as structural materials, ultrafine and nano structured
                      materials. Microscale and nanoscale mechanisms responsible for their unique properties, such as
                      molecular mobility and phase transitions. Working properties of polymers, shape memory alloys,
                      piezoelectric materials, electro-rheological fluids, magnetostrictive materials, and
                      fibre-reinforced composites. Selection of materials. Testing of engineering materials. Emphasis on
                      those used in aircraft, high-speed ground transportation vehicles, underwater, and space
                      applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GrayBG'>
        <div className='container'>
          <div className='row'>
            <h3>Civil Engineering Technical Exams</h3>

            <div className='col-12'>
              <h4>Group A</h4>
              <h5>Choose a course</h5>
              <div class='d-flex align-items-start'>
                <div
                  class='nav flex-column nav-pills nav-fill'
                  id='group-a-civil-tab'
                  role='tablist'
                  aria-orientation='vertical'
                >
                  <button
                    class='nav-link active'
                    id='course-5-tab'
                    data-bs-toggle='pill'
                    data-bs-target='#course-5'
                    type='button'
                    role='tab'
                    aria-controls='course-5'
                    aria-selected='true'
                  >
                    16-Civ-A1 - Elementary Structural Analysis
                  </button>
                  <button
                    class='nav-link'
                    id='course-6-tab'
                    data-bs-toggle='pill'
                    data-bs-target='#course-6'
                    type='button'
                    role='tab'
                    aria-controls='course-6'
                    aria-selected='false'
                  >
                    16-Civ-A5 - Hydraulic Engineering
                  </button>
                </div>
                <div class='tab-content' id='group-a-civil-tabContent'>
                  <div
                    class='tab-pane fade show active'
                    id='course-5'
                    role='tabpanel'
                    aria-labelledby='course-5-tab'
                    tabindex='0'
                  >
                    <Link
                      href='https://buy.stripe.com/14k9D19QkfzR0MM28i'
                      className='FNV-Btn BtnPrimary BtnMedium me-3'
                    >
                      Enroll
                    </Link>
                    Duration: 16 Hours $420
                    <hr />
                    <p>Date of classes: Feb 19, 26 – Mar 4, 11, 18, 25 – Apr 1, 8</p>
                    <hr />
                    <p>
                      Computation of reactions, shearing forces, normal forces, bending moments, and deformations in
                      determinate structures. Inﬂuence lines for moving loads. Moment distribution, slope deﬂection, and
                      energy methods for indeterminate structures without sidesway.
                    </p>
                  </div>
                  <div class='tab-pane fade' id='course-6' role='tabpanel' aria-labelledby='course-6-tab' tabindex='0'>
                    <Link
                      href='https://buy.stripe.com/fZe2az1jOcnF7baeV5'
                      className='FNV-Btn BtnPrimary BtnMedium me-3'
                    >
                      Enroll
                    </Link>
                    Duration: 16 Hours $420
                    <hr />
                    <p>Date of classes: Feb 20, 27 – Mar 5, 12, 19, 26 – Apr 2, 9</p>
                    <hr />
                    <p>
                      Dimensional analysis and hydraulic models. Application of continuity, momentum and energy
                      principles. Steady, closed conduit flow in single pipes and pipe networks. Steady, open-channel
                      flow under uniform and gradually varied conditions, control sections, hydraulic jumps, and energy
                      dissipaters. Hydraulic transients; surges and water hammer in closed conduits, surface waves in
                      open channels. Concepts and principles of turbo machinery, especially centrifugal pumps;
                      similarity relations and cavitation; operation of pump-and-pipe systems. Introductory concepts of
                      hydraulic structures, including environmental aspects of hydraulic works and water quality
                      management.
                    </p>
                  </div>
                </div>
              </div>

              <p>
                The academic prerequisite for obtaining a professional engineering license in the provinces of Ontario
                and British Columbia (P.Eng) is to hold a Bachelor of Engineering degree (a 4-year program) from an
                accredited program at one of the Canadian universities or recognized international universities.
              </p>
              <p>
                The Canadian Engineering Accreditation Board (CEAB), representing provincial engineering associations
                and bodies in Canada, including PEO, approves engineering bachelor’s programs.
              </p>
              <p>
                Applicants who have not obtained their Bachelor of Engineering degree from a CEAB-accredited program
                (universities outside of North America) may be required to take one of two examination programs offered
                by PEO to demonstrate their equivalent scientific knowledge for licensure:
              </p>
              <ol>
                <li>Confirmatory Exam Program (CEP)</li>
                <li>Specific Exam Program (SEP)</li>
              </ol>

              <h4>Confirmatory Exam Program (CEP)</h4>
              <p>
                Applicants who have obtained their Bachelor of Engineering degree through a program deemed similar to a
                CEAB-approved program typically undergo four technical examinations. The purpose of these exams is to
                provide candidates with the opportunity to demonstrate their academic preparedness equivalent to
                graduates of CEAB-approved programs.
              </p>
              <p>
                Candidates assigned to the CEP, who have also acquired a minimum of 5 years of engineering experience
                from the date of receiving their bachelor’s degree, may have their application referred to PEO’s Work
                Experience Assessment section for evaluation.
              </p>
              <p>
                This section may decide whether to exempt or reduce the number of technical examinations for the
                applicant. Otherwise, the examinations remain in effect.
              </p>
              <ul>
                <li>
                  Candidates referred to PEO’s Work Experience Assessment section must submit their experience documents
                  and records in the required formats within the specified deadline. Failure to do so within the
                  deadline results in the forfeiture of the experience assessment opportunity, and candidates must
                  commence their examination program within the set timeframe.
                </li>
                <li>
                  Candidates who fail to initiate their examination program within the specified timeframe will have
                  their current P.Eng application canceled.
                </li>
              </ul>

              <p>
                Candidates assigned to the CEP may potentially receive exemptions for a portion of their designated
                examination, provided they meet the Good Performance Criteria.
              </p>
              <p>
                Candidates who fail two exams will be assigned the Failed-to-Confirm (FTC) examination program. The FTC
                examination program is considered a type of SEP program.
              </p>
              <p>
                Therefore, candidates with good performance can potentially receive exemptions. However, in case of
                failure in two exams, a more challenging examination program awaits them.
              </p>
              <p>The technical examination program consists of four exams:</p>
              <ul>
                <li>Two Group A exams from any engineering discipline,</li>
                <li>One Group B exam from any engineering discipline, and</li>
                <li>One Complimentary Studies (CS) exam.</li>
                <li>The pass mark for all PEO exams is 50%.</li>
              </ul>
              <p>
                An applicant will be considered to have successfully completed the technical examination program if the
                average of the technical exam marks is at least 55%.
              </p>
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
