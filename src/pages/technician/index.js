import React, { useEffect, useState } from 'react'
import Link from 'next/link'

// ** Import Translation
import { useTranslation } from 'react-i18next'

// ** Import course section
import CourseDeskSingle from 'src/views/swiper/courseDeskSingle'
import CourseMobileSingle from 'src/views/swiper/courseMobileSingle'

// ** Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

const Index = () => {
  const [courses, setCourses] = useState([])

  //Hooks
  const router = useRouter()
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const courseData = useSelector(state => state.course)

  // Check website lang
  useEffect(() => {
    const lng = window.localStorage.getItem('i18nextLng')
    if (lng == 'fa') {
      router.push('/technician/fa')
    }
  }, [])

  useEffect(() => {
    if (courseData?.data) {
      setCourses(courseData?.data?.data)
    }
  }, [courseData])

  const addToCart = id => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
    const existInCart = cartItems.includes(id)
    router.push('/cart')

    if (existInCart) {
      window.alert('Item is already in cart!')
      router.push('/cart')
    } else {
      cartItems.push(id)
    }

    const updatedCartItems = [...cartItems]
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
  }

  return (
    <section className='FNV-SinglePage'>
      <div className='container'>
        <div className='row FNV-Header'>
          <h1>Technician</h1>
        </div>

        <div className='row'>
          <div className='col-12'>
            <p>
              Architecture is a regulated profession in Canada, and the title of Architect cannot be used by just
              anyone. This regulation is similar to that of the engineering field in Canada. Architects are highly
              skilled professionals who must obtain a license from the architectural association of one or more
              provinces in order to engage in architectural activities. In Canada, architecture encompasses the
              creation, design, and implementation of plans for constructing or renovating commercial, residential, and
              institutional buildings.
            </p>
            <p>Table of contents:</p>
            <ol>
              <li>
                <a href='#P1'>Career Prospects And Status Of Architecture In Canada</a>
              </li>
              <li>
                <a href='#P2'>Job Description of Architects In Canada</a>
              </li>
              <li>
                <a href='#P3'>Examination For Architects In Canada (Exac)</a>
              </li>
              <li>
                <a href='#P4'>What Are The Benefits Of An Architecture Designation In Canada?</a>
              </li>
              <li>
                <a href='#P5'>Architecture In The Province Of Ontario; Where Is The Oaa Organization?</a>
              </li>
              <li>
                <a href='#P6'>
                  How To Get An Oaa Architecture Degree For People Who Have Studied Or Worked Outside Of Canada
                </a>
              </li>
              <li>
                <a href='#P7'>Internship In Architecture Program (Iap)</a>
              </li>
              <li>
                <a href='#P8'>Approval Of Architecture Degree In Canada</a>
              </li>
              <li>
                <a href='#P9'>Steps To BEFA</a>
              </li>
              <li>
                <a href='#FAQ'>FAQs</a>
              </li>
            </ol>
            <p>
              In Canada, architects have a wide range of employment opportunities available to them, including
              architectural firms, private companies, and public sectors. Additionally, architects have the option to
              work as self-employed professionals.
            </p>
            <p>
              As registered members of Canadian architectural societies, architects are obligated to adhere to the
              Architects Act and provincial regulations, while also upholding their association's code of ethics. Once
              licensed, it is imperative for architects to actively maintain their membership within their respective
              province.
            </p>
          </div>
        </div>

        <div className='row'>
          <h3>Before you start</h3>
          <div className='col-12'>
            <iframe
              style={{ height: '700px' }}
              src='https://www.youtube.com/embed/0Qy2IcqiC4I'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div id='P1' className='row'>
          <h3>Career Prospects And Status Of Architecture In Canada</h3>

          <div className='col-12'>
            <p>
              In Canada, there are several essential steps that individuals must fulfill in order to be officially
              recognized as architects and obtain a professional work permit. While possessing an educational
              qualification is of great significance, Canada distinguishes itself as a country that does not solely rely
              on a degree in architecture or engineering as a sufficient qualification for working in these fields.
              Generally, those aspiring to work in this profession should:
            </p>
            <ul>
              <li>Have a background in architecture studies.</li>
              <li>Acquire substantial work experience.</li>
              <li>Successfully pass the Examination for Architects in Canada (ExAC).</li>
            </ul>
            <p>
              It is worth noting that the process of completing these steps may vary across provinces. For more detailed
              information regarding the specific requirements and procedures for each province, please consult the
              official website of the respective Provincial Architects Association.
            </p>
            <p>Ontario</p>
            <p>Alberta</p>
            <p>British Columbia</p>
            <p>Nova Scotia</p>
            <p>Saskatchewan</p>
            <p>New Brunswick</p>
            <p>Prince Edward Island</p>
            <p>Manitoba</p>
            <p>Newfoundland and Labrador</p>
            <p>Quebec</p>
            <p>
              Fanavaran has not offered any services pertaining to the province of Quebec and does not possess any
              information regarding this particular province.
            </p>
          </div>
        </div>

        <div id='P2' className='row'>
          <h3>Job Description of Architects In Canada</h3>

          <div className='col-12'>
            <ul>
              <li>
                Engage in consultations with clients to determine the nature, style, and purpose of building renovations
                in Canada.
              </li>
              <li>
                Conceptualize and design buildings, providing comprehensive building plans that include design details,
                building materials, costs, and construction plans, all in accordance with Canadian architectural
                standards.
              </li>
              <li>Prepare designs and models for their clients.</li>
              <li>
                Prepare or supervise the preparation of plans, specifications, and other construction documents that
                will be used by contractors and technicians.
              </li>
              <li>
                Prepare&nbsp; tender documents, participate in pre-contract negotiations, and oversee the awarding of
                construction contracts.
              </li>
              <li>
                Monitor activities on construction sites to ensure compliance with the overall plan is an important duty
                of architects.
              </li>
              <li>Carry out feasibility studies and conduct financial analyses of construction projects.</li>
            </ul>
            <p>
              Architects have the option to specialize in specific types of construction, such as residential,
              commercial, industrial, or institutional projects.
            </p>
          </div>
        </div>

        <div id='P3' className='row'>
          <h3>Examination for Architects in Canada (EXAC)</h3>

          <div className='col-12'>
            <p>
              The Canadian Provincial Associations of Architects have established multiple examinations for architect
              admission, which are designed to assess the qualifications of candidates. The latest examination is known
              as EXAC (Examination for Architects in Canada). EXAC is divided into four sections and encompasses various
              subject areas outlined in the Architectural Internship Program.
            </p>
            <ul>
              <li>Fore planning</li>
              <li>Site and environment analysis</li>
              <li>Cost management</li>
              <li>Coordination of engineering systems</li>
              <li>Designing maps</li>
              <li>Development of plans</li>
              <li>Project finalization</li>
              <li>The nobility of the rules</li>
              <li>Tenders and negotiations for contracts</li>
              <li>construction phase (office)</li>
              <li>construction phase (site)</li>
              <li>Project Management</li>
              <li>Law studies</li>
            </ul>
            <p>EXAC exam sources are:</p>
            <ul>
              <li>Internship in Architecture (IAP)</li>
              <li>Canadian Handbook of Practice for Architecture (CHOP)</li>
              <li>ExAC Website.</li>
              <li>National Building Code 2005 edition</li>
            </ul>
            <p>
              The primary reference for successfully completing the EXAC exam and practicing architecture in Canada is
              the National Building Code. This valuable resource provides applicants with a comprehensive understanding
              of the precise regulations and standards governing construction in the country. The National Building Code
              consists of 11 general sections, with particular emphasis placed on two crucial parts: Part 3, which
              addresses fire and safety principles, and Part 9, which pertains to residential buildings in Canada.
              Familiarizing oneself with these sections is essential for candidates aiming to pass the EXAC exam and
              effectively engage in architectural practice within the country.
            </p>
          </div>
        </div>

        <div id='P4' className='row'>
          <h3>What Are The Benefits Of An Architecture Designation In Canada?</h3>

          <div className='col-12'>
            <p>
              <strong>Working as an architect</strong>
            </p>
            <p>
              In accordance with Canadian laws and policies, only individuals holding an architectural degree from
              Canada are entitled to use the professional designation of "Architect." This certification signifies that
              the person possesses all the necessary qualifications to engage in various domains of architecture within
              Canada. Consequently, individuals are prohibited from practicing architecture unless they are members of a
              provincial architecture association.
            </p>
            <p>
              <strong>Enhancing business reputation</strong>
            </p>
            <p>
              Membership in provincial architecture associations is regarded as a prestigious occupation, allowing
              individuals to append the title of "Architect" to their name. This designation serves as a guarantee for a
              promising career trajectory.
            </p>
            <p>
              <strong>Job security and diverse opportunities</strong>
            </p>
            <p>
              During downsizing, organizations tend to retain individuals who possess an architectural license from a
              provincial architecture association. Moreover, those who aspire to establish their own architectural firm
              and capitalize on the opportunities available in Canada can greatly benefit from holding such a license,
              as it opens doors to a wider range of prospects compared to a conventional enterprise.
            </p>
            <p>
              <strong>Increased salary prospects</strong>
            </p>
            <p>
              The remuneration for officially licensed architects significantly surpasses that of unlicensed
              counterparts. Furthermore, those with an official license from their provincial association enjoy better
              prospects for career growth and advancement in their professional journey.
            </p>
            <p>
              <strong>Right to vote in provincial associations</strong>
            </p>
            <p>
              Following licensure, architects gain the privilege to vote at their association's annual general meeting.
              They also have the opportunity to participate in elections and contribute to the council's decision-making
              process. Provincially licensed architects can further volunteer for various committees and groups, playing
              a vital role in educating future architects.
            </p>
          </div>
        </div>

        <div id='P5' className='row'>
          <h3>Architecture In The Province Of Ontario; What Is The OAA Organization?</h3>

          <div className='col-12'>
            <p>
              The Ontario Association of Architects (OAA) is an independent entity committed to advancing the knowledge,
              skills, and competencies of its members, all while ensuring the public's best interests. This association
              holds the responsibility of certifying qualifications and providing official recognition for practicing
              architects within the province of Ontario.
            </p>
            <p>
              Individuals who have completed their education in the field of architecture in Canada and aspire to work
              as architects in Ontario must obtain membership in this organization. It is important to note that for
              individuals seeking employment in other provinces, they must consult the relevant organization specific to
              their desired province.
            </p>
            <p>Through a meticulous procedure, the OAA meticulously verifies the eligibility of its members:</p>
            <ul>
              <li>Meeting educational requirements</li>
              <li>Completing a professional internship</li>
              <li>Passing extensive exams</li>
              <li>Completion of the OAA admission course</li>
              <li>Having a professional personality</li>
            </ul>
            <p>
              Once a referral is made, the Experience Requirements Committee (ERC) assesses whether the applicant
              fulfills the experience criteria outlined in the regulations for obtaining an OAA license.
            </p>
            <p>
              In accordance with the Architects Act, the Architectural Association of Ontario is dedicated to upholding
              the professional standards of individuals who have successfully fulfilled all necessary requirements prior
              to obtaining their license. The OAA is obligated to consistently apply and update these requirements as
              mandated by section 31 of the Regulations, ensuring compliance with legal obligations.
            </p>
            <p>
              Licensed members of the Architectural Association of Ontario are required to utilize the official
              professional seal provided by the organization, adhering to the regulations outlined in section 27 of the
              Architects Act. The stamp and signature of an OAA member on a document signify that the document was
              meticulously prepared under the personal supervision and direction of one or more OAA members. Obtaining
              this seal, which validates architectural activities in Canada, necessitates successful completion of the
              EXAC exam.
            </p>
            <p>
              The presence of the OAA seal below a document serves as the sole confirmation that all legal requirements
              have been met. Such a document can be employed for the purposes of planning, designing, and making
              alterations to buildings, ensuring adherence to regulatory standards.
            </p>
          </div>
        </div>

        <div id='P6' className='row'>
          <h3>How To Get An Oaa Architecture Degree For People Who Have Studied Or Worked Outside Of Canada</h3>

          <div className='col-12'>
            <p>
              Internationally Trained Professionals (ITP) refer to professionals who have acquired their educational
              qualifications or work experience outside of Canada, the United States, New Zealand, Australia, and
              Mexico.
            </p>
            <p>
              For individuals belonging to this category, there are two distinct pathways available to pursue a career
              as an architect in Canada:
            </p>
            <ol>
              <li>Internship in Architecture Program (IAP)</li>
              <li>Broadly Experienced Foreign Architect (BEFA)</li>
            </ol>
            <p>
              In general, individuals falling into either of the aforementioned groups and seeking to obtain their
              architectural certification in Canada must successfully complete three main steps:
            </p>
            <ol>
              <li>Engage in studies within the field of architecture</li>
              <li>Accumulate sufficient work experience</li>
              <li>Pass the Examination for Architects in Canada (ExAC)</li>
            </ol>
            <p>
              Both the IAP and BEFA groups follow their respective processes and pathways to provide educational
              qualifications and work records, enabling them to practice architecture in Canada.
            </p>
          </div>
        </div>

        <div className='row FNV-Related-Course'>
          <h3>Related Architecture Courses</h3>

          {/* Courses Desktop */}
          <CourseDeskSingle courses={courses} addToCart={addToCart} />
          {/* Courses Mobile */}
          <CourseMobileSingle courses={courses} addToCart={addToCart} />
        </div>

        <div id='P7' className='row'>
          <h3>Internship in Architecture Program (IAP)</h3>

          <div className='col-12'>
            <p>To qualify as a trainee architect, an applicant must meet the following requirements:</p>
            <ul>
              <li>Hold a professional degree in architecture or have successfully completed the RAIC curriculum.</li>
              <li>Possess a scientific certificate issued by the Canadian Architectural Certification Board (CACB).</li>
              <li>Demonstrate a professional demeanor and character.</li>
              <li>Submit a completed application form.</li>
              <li>Fulfill the necessary fee payment.</li>
            </ul>
            <p>
              Aspiring apprentice architects can register and document their work experience using the Canadian
              Experience Record Book (CERB) online tool. Supervising architects and mentors can utilize this resource to
              review and digitally verify the activities of their trainees.
            </p>
            <p>
              The architectural internship holds a significant position within the Ontario Association of Architects
              (OAA). This designation indicates active participation in the Internship in Architecture Program (IAP) and
              reflects one's commitment to becoming a licensed professional architect in Canada.
            </p>
          </div>
        </div>

        <div id='P8' className='row'>
          <h3>Approval of Architecture Degree in Canada</h3>
          <div className='col-12'>
            <p>
              Prior to enrolling in the Internship in Architecture Program (IAP) to pursue a career in architecture in
              Canada, it is essential to hold a professional degree in architecture. Irrespective of the educational
              institution where the architecture degree was obtained, it must be officially recognized by the Canadian
              Architectural Certification Board (CACB). In Canada, the CACB assumes the responsibility of assessing the
              qualifications of all architecture graduates, serving as the authoritative body for verifying architecture
              degrees within the country. It is mandatory to consult the CACB to confirm the validity of an architecture
              degree in Canada. Obtaining academic certification from the CACB is a prerequisite for eligibility to
              apply for the IAP.
            </p>
          </div>
        </div>

        <div id='P9' className='row'>
          <h3>Broadly Experienced Foreign Architect (BEFA)</h3>
          <div className='col-12'>
            <p>
              The Broadly Experienced Foreign Architect (BEFA) program offers an alternative pathway for internationally
              licensed architects to qualify for licensure with the Ontario Association of Architects (OAA). This
              program assesses the experience of foreign architects against Canadian qualification standards. Eligible
              applicants can seek BEFA certification by undergoing an online demonstration of eligibility and
              participating in an interview with an evaluation panel consisting of Canadian architects. Successful
              candidates are granted the BEFA certificate, which attests to their adherence to Canadian standards and
              their competence to practice architecture professionally. Holding a BEFA certificate allows individuals to
              apply for OAA membership. Applicants with BEFA certification must satisfy the following requirements to be
              eligible for OAA membership:
            </p>
            <ul>
              <li>Demonstrate good character.</li>
              <li>Be at least 18 years of age.</li>
              <li>
                Possess Canadian citizenship or permanent residency, or be a member of one of the architectural
                organizations recognized by the council.
              </li>
            </ul>
          </div>
        </div>

        <div id='P10' className='row'>
          <h3>Steps to Acquiring BEFA</h3>
          <div className='col-12'>
            <p>
              <strong>There are four steps to get a BEFA certificate to practice architecture in Canada:</strong>
            </p>
            <ul>
              <li>Verification of Competency</li>
              <li>Proof of abilities and competence (sending documents and resume)</li>
              <li>interview</li>
              <li>Get a certificate</li>
            </ul>
            <p>
              <strong>Step 2: Proof of Competence</strong>
            </p>
            <p>
              Proof of competence is probably the hardest step when it comes to BEFA. The candidate must follow the
              steps below for this matter.
            </p>
            <p>
              During this stage, applicants must demonstrate their proficiency in twelve categories that encompass the
              responsibilities of an architect in a project. It is crucial to provide specific and well-documented
              examples to support their qualifications in each category.
            </p>
            <ul>
              <li>Planning: Understanding and articulating client requirements for a specific project.</li>
              <li>
                Site and Environment Analysis: Considering land planning, urban design, and environmental factors.
              </li>
              <li>Drawing and Mapping: Developing conceptual solutions aligned with the approved plan and budget.</li>
              <li>
                Engineering Designs: Coordinating and selecting building systems, including structural, mechanical,
                electrical, and civil engineering.
              </li>
              <li>Construction Cost Analysis: Estimating and evaluating potential construction costs.</li>
              <li>
                Knowledge of Laws: Familiarity with building construction regulations and their impact on design and
                construction.
              </li>
              <li>Plan Development: Expanding the approved schematic design to specify greater detail.</li>
              <li>
                Construction Documents: Describing materials, hardware, and equipment as depicted in the drawings.
              </li>
              <li>
                Tendering and Contract Negotiations: Managing bidding procedures, evaluating bids, and negotiating
                contracts.
              </li>
              <li>
                Construction Phase: Overseeing tasks such as processing payment requests, reviewing drawings, and
                managing change orders.
              </li>
              <li>
                Project Management: Creating and maintaining systems for the efficient delivery of architectural
                projects.
              </li>
              <li>
                Professional Behavior and Performance: Upholding obligations that prioritize the public interest and
                adhere to ethical standards.
              </li>
            </ul>
            <p>
              <strong>Step 3: Interview</strong>
            </p>
            <p>
              <strong>Step 4: Obtaining the BEFA Certificate</strong>
            </p>
            <p>
              After successfully completing the previous steps, applicants are awarded the BEFA certificate, which
              signifies their compliance with Canadian standards and their competence to practice architecture
              professionally. This certification can then be presented to the Ontario Association of Architects (OAA) to
              obtain official certification and commence architectural practice in Canada.
            </p>
          </div>
        </div>

        <div className='row'>
          <div className='col-12 col-md-6'>
            <iframe
              style={{ height: '350px' }}
              src='https://www.youtube.com/embed/CdndSIFbqHE'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></iframe>
          </div>

          <div className='col-12 col-md-6'>
            <iframe
              style={{ height: '350px' }}
              src='https://www.youtube.com/embed/OzWltvbcozQ'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div id='FAQ' className='row'>
          <h3>Frequently Asked Questions</h3>

          <div className='accordion p-0' id='FAQEngineering'>
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
                  Which universities in Montreal and Quebec provide architecture programs and what are the prevailing
                  educational approaches?
                </button>
              </h2>
              <div id='Question1' className='accordion-collapse collapse show' data-bs-parent='#FAQEngineering'>
                <div className='accordion-body'>
                  <p>
                    In Montreal, the Université de Montréal offers architecture programs in French, covering various
                    specializations. McGill University, on the other hand, offers a two-year Master of Architecture
                    program taught in English. Proficiency in the English language is required to enroll in this course,
                    but students have the opportunity to submit their className projects and theses in French.
                  </p>
                </div>
              </div>
            </div>

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
                  Which is more beneficial: emphasizing visualization software or acquiring proficiency in 3D MAX for
                  robust modeling? In Canada, what software do university professors and companies typically favor?
                </button>
              </h2>
              <div id='Question2' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                <div className='accordion-body'>
                  <p>
                    View and TradeMax are commonly utilized software tools by professionals, including university
                    professors and commercial entities. For efficient modeling, Sketchup is widely preferred by
                    individuals and organizations. In general, possessing proficiency in multiple software applications
                    can be regarded as a significant advantage for individuals.
                  </p>
                </div>
              </div>
            </div>

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
                  When does the new course for beginners in the new software begin?
                </button>
              </h2>
              <div id='Question3' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                <div className='accordion-body'>
                  <p>
                    For specific information about the course dates, please visit the individual course pages or reach
                    out to the website's support team.
                  </p>
                </div>
              </div>
            </div>

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
                  Is having a French language degree an advantage for universities in Montreal and Quebec, or is an
                  English language degree still necessary?
                </button>
              </h2>
              <div id='Question4' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                <div className='accordion-body'>
                  <p>
                    Proficiency in French is indeed considered an advantage as it enhances the prospects of securing
                    employment in the field of architecture in Montreal.
                  </p>
                </div>
              </div>
            </div>

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
                  Where can I find information about the process of obtaining an architectural license?
                </button>
              </h2>
              <div id='Question5' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                <div className='accordion-body'>
                  <p>
                    For details on the process of obtaining an architectural license in Canada and to learn about who
                    can become an architect, please refer to the architecture page on the Fanavaran website.
                  </p>
                </div>
              </div>
            </div>

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
                  Is it a requirement to complete the NBC Part 3 course in order to pass the BCIN Preparation Exam
                  course? I have already completed NBC Part 9.
                </button>
              </h2>
              <div id='Question6' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                <div className='accordion-body'>
                  <p>Yes, it is necessary to pass both courses.</p>
                </div>
              </div>
            </div>

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
                  If our goal is not to obtain an architectural license, would passing the building code courses be
                  sufficient?
                </button>
              </h2>
              <div id='Question7' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                <div className='accordion-body'>
                  <p>
                    In general, while these courses, such as building code and Revit, are necessary for securing a job,
                    they alone are not enough. It is important to complement them with networking efforts. It is worth
                    noting that the title of architect is exclusively reserved for individuals who hold a valid license.
                  </p>
                </div>
              </div>
            </div>

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
                  What courses do you recommend for aspiring architects to enhance their employability in the field?
                </button>
              </h2>
              <div id='Question8' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                <div className='accordion-body'>
                  <ol>
                    <li>
                      It is advisable to focus on mastering the correct application of the National Building Code (NBC)
                      and, if applicable to your location in Ontario, the Ontario Building Code (OBC) Part 3 and Part 9.
                    </li>
                    <li>
                      Concurrently, pursuing licensure through the Ontario Association of Architects (OAA) can
                      significantly boost your professional credentials.
                    </li>
                    <li>
                      If you intend to work on smaller projects, consider obtaining the Building Code Identification
                      Number (BCIN) certification.
                    </li>
                    <li>
                      Additionally, acquiring knowledge in Project Management Professional (PMP) principles can greatly
                      enhance your career prospects. In Canada, architects often take on project management roles, and
                      possessing PMP expertise is highly valued by employers and adds a strong highlight to your resume.
                    </li>
                  </ol>
                </div>
              </div>
            </div>

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
                  If I obtain a master's degree from a university that is not accredited by the Canadian Architectural
                  Certification Board (CACB), what is the procedure for obtaining CACB approval after completing my
                  master's degree?
                </button>
              </h2>
              <div id='Question9' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                <div className='accordion-body'>
                  <p>
                    To pursue CACB approval after obtaining a master's degree from a non-accredited university, you will
                    need to complete an accreditation application. The process is similar to that of foreign architects
                    seeking accreditation.
                  </p>
                </div>
              </div>
            </div>

            <div className='accordion-item'>
              <h2 className='accordion-header'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#Question10'
                  aria-expanded='false'
                  aria-controls='Question10'
                >
                  For individuals interested in taking the OBC exam, which chapters of the Building Code should they
                  focus on?
                </button>
              </h2>
              <div id='Question10' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                <div className='accordion-body'>
                  <p>
                    To prepare for the OBC exam, it is important to study Part 3 and Part 9 of the Building Code.
                    Initially, you will need to take the legal exam and register your BCIN score. Following that,
                    depending on the specific exam you are taking, you will need to familiarize yourself with different
                    sections of the first and second volumes of the code.
                  </p>
                </div>
              </div>
            </div>

            <div className='accordion-item'>
              <h2 className='accordion-header'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#Question11'
                  aria-expanded='false'
                  aria-controls='Question11'
                >
                  Which documents translated from Iran are required for obtaining a license?
                </button>
              </h2>
              <div id='Question11' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                <div className='accordion-body'>
                  <p>
                    Please refer to the following link for information regarding degree/diploma accreditation by CACB:{' '}
                    <a href='https://cacb.ca/non-accredited-professional-degree/'>
                      Degree/Diploma not accredited by CACB.
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className='accordion-item'>
              <h2 className='accordion-header'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#Question12'
                  aria-expanded='false'
                  aria-controls='Question12'
                >
                  In relation to the Building Code of Canada, is it feasible to study and train in our spare time before
                  immigrating, considering its significance in securing employment?
                </button>
              </h2>
              <div id='Question12' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                <div className='accordion-body'>
                  <ol>
                    <li>
                      Architectural mentoring sessions in Canada: These sessions take place every two weeks on
                      Wednesdays and are also conducted as workshops.
                    </li>
                    <li>
                      CV writing and job search: Several workshops have been conducted, and weekly meetings are held
                      every Wednesday to assist with CV writing and job search.
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div className='accordion-item'>
              <h2 className='accordion-header'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#Question13'
                  aria-expanded='false'
                  aria-controls='Question13'
                >
                  Does Fanavaran carry out the LEED exam?
                </button>
              </h2>
              <div id='Question13' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                <div className='accordion-body'>
                  <p>
                    No, the LEED exam is administered by the company that holds the American concession at specific
                    centers, and it is not within the scope of work for Fanavaran.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
Index.guestGuard = true

export default Index
