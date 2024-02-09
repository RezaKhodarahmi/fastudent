import React, { useEffect, useState } from 'react'

// ** Import Translation
import { useTranslation } from 'react-i18next'

// ** Import course section
import CourseDeskSingle from 'src/views/swiper/courseDeskSingle'
import CourseMobileSingle from 'src/views/swiper/courseMobileSingle'

// ** Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

import { fetchCourseData } from 'src/store/apps/course'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

const Index = () => {

  const [courses, setCourses] = useState([])

  //Hooks
  const router = useRouter()
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const courseData = useSelector(state => state.course)

  useEffect(() => {
    dispatch(fetchCourseData())
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
    <>
      <section className='FNV-SinglePage'>
        <div className='container'>
          <div className='row FNV-Header'>
            <h1>Engineering in Canada</h1>
          </div>

          <div className='row'>
            <div className='col-12'>
              <p>
                Engineering in Canada is regarded as a highly structured profession, necessitating individuals to
                acquire a professional engineer license (referred to as a Professional Engineer or P.Eng) to engage in
                professional endeavors within this domain.
              </p>
              <p>
                To attain the esteemed title of an engineer, individuals must fulfill the prescribed prerequisites as
                mandated by one of the provincial engineering organizations in Canada. These organizations consist of
                the most proficient and skilled engineers in the country.
              </p>
              <p>Table of contents:</p>
              <ol>
                <li>
                  <a href='#P1'>Who can get a P.Eng designation?</a>
                </li>
                <li>
                  <a href='#P2'>Advantages of P.Eng designation</a>
                </li>
                <li>
                  <a href='#P3'>Registering in Canadian engineering organizations</a>
                </li>
                <li>
                  <a href='#P4'>P.Eng Requirements</a>
                </li>
                <li>
                  <a href='#P5'>What is the NPPE Exam?</a>
                </li>
                <li>
                  <a href='#FAQ'>FAQs</a>
                </li>
              </ol>
              <p>
                The formation of this organization aims to safeguard the interests and welfare of the public in
                engineering-related affairs. Individuals who have obtained their engineering degrees are eligible to
                become members of this organization and assume accountability for engineering projects. In essence, only
                those who hold membership in Canadian engineering organizations and have been granted the P.Eng
                designation possess the authority to endorse, sign, and authorize engineering drawings.
              </p>
            </div>
          </div>

          <div className='row'>
            <h3>Before you start</h3>
            <div className='col-12'>
              <iframe
                src='https://www.youtube.com/embed/BVqmL9g3_eA'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <div id='P1' className='row'>
            <h3>Who can get a P.Eng designation?</h3>

            <div className='col-12'>
              <p>
                Individuals who have graduated from one of the various engineering disciplines and aspire to work as
                consultants, quality control engineers, or in computing departments are required to obtain membership in
                this organization. However, those who are selected for project management or engineering site
                supervision roles are not obligated to become members of this organization.
              </p>
              <p>
                It is important to note that graduates in engineering fields in Canada are specifically referred to as
                "engineering graduates." In actuality, these individuals cannot enter the job market with the
                professional designation of an engineer unless they acquire an engineering license in Canada.
              </p>

              <p>
                <mark>
                  For further information on obtaining an engineering license in Canada (P.Eng), we recommend referring
                  to the article dedicated to this topic.
                </mark>
              </p>
            </div>
          </div>

          <div id='P2' className='row'>
            <h3>Advantages of P.Eng Designation</h3>

            <div className='col-12'>
              <h4>The Influence and Authority of P.Eng</h4>
              <p>
                Membership in the Canadian Engineering Department elevates the authority and influence of engineers
                within this organization, granting them greater responsibilities in various job roles.
              </p>
              <p>
                &nbsp;&nbsp;fact, only engineers with a valid P.Eng license possess the legal authority to endorse and
                approve project drawings and plans, as well as oversee the project implementation process. They are also
                recognized as expert witnesses in legal proceedings related to projects. The significance of P.Eng
                accreditation is acknowledged by government entities and academic institutions throughout Canada.
              </p>
              <h4>Job Title</h4>
              <p>
                Legally, one cannot assume the title of an engineer unless they are a member of a provincial engineering
                department and possess a P.Eng license. Even for consultancy positions, holding a P.Eng license is a
                prerequisite.
              </p>
              <h4>Job Security and Career Diversity</h4>
              <p>
                During downsizing within an industry or organization, individuals with a P.Eng designation are more
                likely to retain their positions. Moreover, for those aspiring to establish their own company and
                leverage opportunities in a growing market, having a P.Eng license can significantly broaden horizons
                compared to operating as a regular company. Even for roles as supervising engineers or consultants, a
                P.Eng license is required.
              </p>
              <h4>Membership in a Professional Association</h4>
              <p>
                The Canadian Provincial Engineering Association holds a reputable standing as a professional and
                exclusive association among individuals. Members of this association even have the opportunity to
                participate in local elections as candidates.
              </p>
              <h4>Higher Salaries</h4>
              <p>
                Under equal circumstances, licensed engineers with a P.Eng designation command higher salaries compared
                to their unlicensed counterparts. Furthermore, those holding a P.Eng license enjoy enhanced prospects
                for career advancement and promotion.
              </p>
            </div>
          </div>

          <div id='P2' className='row'>
            <h3>Students in this Course</h3>

            <div className='col-12 col-md-3 ps-0'>
              <iframe
                src='https://www.youtube.com/embed/BVqmL9g3_eA'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowfullscreen
              ></iframe>
            </div>

            <div className='col-12 col-md-3'>
              <iframe
                src='https://www.youtube.com/embed/BVqmL9g3_eA'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowfullscreen
              ></iframe>
            </div>

            <div className='col-12 col-md-3'>
              <iframe
                  src='https://www.youtube.com/embed/BVqmL9g3_eA'
                  title='YouTube video player'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  allowfullscreen
                ></iframe>
            </div>

            <div className='col-12 col-md-3 pe-0'>
              <iframe
                src='https://www.youtube.com/embed/BVqmL9g3_eA'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <div id='P3' className='row'>
            <h3>Registering in Canadian engineering organizations</h3>

            <div className='col-12'>
              <p>
                Before sending your documents and records to the engineering organization of your province, it is
                crucial to familiarize yourself with the entire process and proceed with caution by following the
                necessary steps meticulously.
              </p>
              <p>
                Fanavaran advises all P.Eng aspirants to begin their journey by acquiring comprehensive information
                about engineering in Canada. The initial step involves completing the application forms provided by the
                Engineering Department of their respective province of residence. These forms are regularly updated and
                can be obtained directly from the designated authorities in each province.
              </p>
              <ol>
                <li>
                  <a href='https://www.peo.on.ca/'>Engineering in Ontario</a>
                </li>
                <li>
                  <a href='https://engineersnovascotia.ca/'>Engineering in Nova Scotia</a>
                </li>
                <li>
                  <a href='https://www.apega.ca/'>Engineering in Alberta&nbsp;</a>
                </li>
                <li>
                  <a href='https://www.egbc.ca/'>Engineering British Columbia&nbsp;</a>
                </li>
              </ol>
              <p>There are two methods for submitting academic documents:</p>
              <ol>
                <li>
                  Translated documents should be sent directly from your university in a sealed form to the provincial
                  engineering department. If you have translated diplomas, these documents need to be verified by a
                  P.Eng engineer before being submitted to the engineering department of your province.
                </li>
                <li>
                  If you do not have access to a P.Eng engineer to authenticate your translated documents for Canada,
                  Fanavaran can provide this service. Make sure to include your desired statements in both Persian and
                  English on your documents (as indicated below) and send them to info@fanavaran.ca. Please note that
                  this service is exclusively available to members of Fanavaran. (Click{' '}
                  <a href='https://fanavaran.ca/membership-account/membership-levels/'>here </a>to become a member of
                  Fanavaran)
                </li>
              </ol>
              <p>
                Professional Engineers Ontario (PEO) states that:
                <br />
                &ldquo;Please note that PEO only accepts translations done by a certified translator of ATIO or by a
                Canadian P.Eng. fluent in both languages.&nbsp; The P.Eng. must state that they are fluent in both
                languages and that this is an accurate translation, provide their membership number and sign and date
                each page. We will require your transcript in the original language. We need your bachelor&rsquo;s and
                master&rsquo;s transcript of marks in the original language, not the degree certificates.&nbsp; Also,
                the P.Eng. only certified your bachelor&rsquo;s degree certificate.&nbsp; You need the master&rsquo;s
                degree translated as well.
              </p>
              <p>And we will need your resume in a PDF document&rdquo;</p>
              <ul>
                <li>
                  If you wish to have your engineering documents reviewed and approved by technicians, kindly adhere to{' '}
                  <a href='https://fanavaran.ca/wp-content/uploads/2022/07/2746566a-c838-4feb-8204-a0bf3ab04f66.pdf'>
                    this{' '}
                  </a>
                  template.
                </li>
              </ul>
              <ul>
                <li>
                  In certain cases, individuals may be required to undertake technical courses prior to attaining EIT
                  certification. These courses are conducted in English within Canada, and some individuals may
                  encounter challenges in successfully completing the final exams. Fanavaran offers private and
                  semi-private <a href='https://fanavaran.ca/p-eng-courses/'>technical courses</a> led by experienced
                  and academic professors to assist you in overcoming these hurdles. You can register for these courses
                  by clicking <a href='https://fanavaran.ca/p-eng-courses/'>here</a>.
                </li>
              </ul>
              <p>
                Please note that in addition to providing the course descriptions, it is essential to include the
                grading rubric table to align grades accordingly.
              </p>
              <p>Here are some examples:</p>
              <ul>
                <li>
                  <a href='https://fanavaran.ca/wp-content/uploads/2022/05/Civil-Engineering.pdf'>Civil Engineer</a>
                </li>
                <li>
                  <a href='https://fanavaran.ca/wp-content/uploads/2022/05/Electrical-Engineering.pdf'>
                    Electrical Engineering
                  </a>
                </li>
                <li>
                  <a href='https://fanavaran.ca/wp-content/uploads/2022/05/Mechanical-eng-University-of-Tehran.pdf'>
                    Mechanical eng (01)
                  </a>
                </li>
                <li>
                  <a href='https://fanavaran.ca/wp-content/uploads/2022/09/course.doc'>Mechanical eng (02)</a>
                </li>
                <li>
                  <a href='https://fanavaran.ca/wp-content/uploads/2022/05/Civil-and-Environmental-Engineering-Babol.pdf'>
                    Civil and Environmental Engineering
                  </a>
                </li>
                <li>
                  <a href='https://fanavaran.ca/wp-content/uploads/2022/09/PEO-FAQ-for-Experience-Documentation.pdf'>
                    Irrigation Engineering
                  </a>
                </li>
              </ul>
              <p>
                Create your updated resume in PDF format by utilizing the engineering resume template provided for{' '}
                <a href='https://fanavaran.ca/wp-content/uploads/2022/08/Resume-temp.docx'>download</a>. If you have
                inquiries or uncertainties regarding resume writing, we highly recommend enrolling in our resume writing
                and job seeking course. It is worth noting that this course is offered free of charge to all VIP members
                of the Fanavaran.
              </p>
              <p>
                Compiling a work experience report (although not mandatory, it is advisable for volunteers to include
                these reports along with other documents) is an integral part of the process. It is important to note
                that in addition to the overarching legislation, each Canadian province has its own set of regulations.
                To familiarize oneself with these specific rules, it is recommended to consult the official websites of
                the respective engineering organizations in different cities.
              </p>
              <p>Here is a list of Provincial Engineering Organizations along with their websites:</p>
              <ul>
                <li>
                  <a href='https://www.apega.ca/'>Alberta&nbsp;</a>
                </li>
                <li>
                  <a href='https://www.peo.on.ca/'>Ontario</a>
                </li>
                <li>
                  <a href='https://www.egbc.ca/'>British Columbia</a>
                </li>
                <li>
                  <a href='https://www.apegs.ca/'>Saskatchewan</a>
                </li>
                <li>
                  <a href='http://www.enggeomb.ca/'>Manitoba</a>
                </li>
                <li>
                  <a href='https://engineersnovascotia.ca/'>Nova Scotia</a>
                </li>
                <li>
                  <a href='http://www.pegnl.ca/'>Newfoundland and Labrador</a>
                </li>
                <li>
                  <a href='https://www.napeg.nt.ca/'>Northwest Territories and Nunavut</a>
                </li>
                <li>
                  <a href='https://www.apey.yk.ca/'>Yukon&nbsp;</a>
                </li>
                <li>
                  <a href='http://www.engineerspei.com/'>Prince Edward Island</a>
                </li>
                <li>
                  <a href='https://www.apegnb.com/'>New Brunswick</a>
                </li>
                <li>
                  <a href='http://oiq.qc.ca/'>Quebec</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
              <div className='col-12'>
                <iframe
                  src='https://www.youtube.com/embed/3tyedNWUwZs'
                  title='YouTube video player'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  allowfullscreen
                ></iframe>
              </div>
          </div>

          <div id='P4' className='row'>
            <h3>P.Eng Requirements</h3>
            <div className='col-12'>
              <ol>
                <li>
                  <strong>Possessing an Engineering Education</strong>
                  <br />
                  Individuals holding a bachelor's degree in engineering are eligible to apply for membership in this
                  organization. Obtaining a license for non-engineering fields is considerably challenging. Candidates
                  with a master's or doctoral degree must apply using their bachelor's degree for licensing purposes.
                  While having a master's or doctoral degree is regarded as an advantage within the organization, it
                  does not offer any specific privileges. In essence, the primary criterion for obtaining a license is
                  holding a bachelor's degree in engineering.
                </li>
                <br />
                <li>
                  <strong>Demonstrating Practical Experience</strong>
                  <br /> Membership in this organization generally requires a minimum of four years of professional
                  experience in the field of engineering, with at least one year being supervised by a licensed engineer
                  in Canada.
                </li>
                <br />
                <li>
                  <strong>Language Proficiency</strong>
                  <br />
                  Proficiency in English is a prerequisite for obtaining a Canadian engineering license. During
                  projects, effective verbal communication skills are essential. However, possessing professional
                  language qualifications such as IELTS is not mandatory.
                </li>
                <br />
                <li>
                  <strong>Exhibiting Good Character</strong>
                  <br /> According to the standards set by the Canadian Engineering Organization, the endorsement of two
                  licensed engineers is necessary to confirm the candidate's qualifications and approve them for
                  licensure.
                </li>
                <br />
                <li>
                  <strong>Embodying Ethics and Professional Knowledge</strong>
                  <br /> Applicants seeking a license from the engineering department must pass the NPPE or PPE exam,
                  which evaluates their understanding of legal and ethical principles.
                </li>
                <br />
                <li>
                  <strong>Four Years of Work Experience</strong>
                  <br />
                  As previously mentioned, candidates must have worked as an assistant to a licensed engineer for at
                  least one year in Canada, along with a minimum of three years of engineering experience anywhere in
                  the world. The total required experience amounts to at least four years.
                </li>
              </ol>
              <p>The Approved Work Experience by Engineering Departments must satisfy the following five conditions:</p>
              <ul>
                <li>
                  <strong>Application of Theoretical Knowledge</strong>
                  <br />
                  Applicants are required to document and describe their four years of professional activities while
                  highlighting their connection to engineering academic topics. These concepts should encompass
                  analysis, design, testing, and implementation methodologies and be presented in the form of a
                  comprehensive report.
                </li>
              </ul>
              <ul>
                <li>
                  <strong>Practical Experience</strong>
                  <br /> This section demonstrates the candidate's experience working within a project-based
                  environment, including knowledge of codes, regulations, standards, and the significance of effective
                  project time management.
                </li>
              </ul>
              <ul>
                <li>
                  <strong>Engineering Management</strong>
                  <br />
                  Proficiency in accurate planning, project scheduling, budgeting, monitoring, controlling project
                  execution, and assessing risks are essential aspects considered for engineering positions in Canada.
                  For reliable certifications in risk management, the RMP (Risk Management Professional) certification
                  is highly recommended. Completing a Risk Management Course (RMP) can greatly enhance your skills in
                  this area.
                </li>
              </ul>
              <ul>
                <li>
                  <strong>Communication Skills</strong>
                  <br />
                  The ability to effectively present written and oral work reports is crucial in engineering roles.
                  Candidates should showcase their communication proficiency in these areas.
                </li>
              </ul>
              <p>
                <strong>Understanding the Social Implications of Engineering</strong>
              </p>
              <p>
                Exploring the social impact of a project, effective interpersonal communication skills, ensuring safety
                and implementing necessary safeguards, as well as establishing productive relationships with regulatory
                bodies to drive project advancement, are identified as integral components of this requirement.
              </p>
            </div>
          </div>

          <div id='P5' className='row'>
            <h3>What is the NPPE Exam?</h3>

            <div className='col-12'>
              <p>
                To gain membership in the Canadian Engineering Department and join this organization, successfully
                passing the NPPE (National Professional Practice Examination) is a requirement. Fanavaran offers a
                comprehensive NPPE exam preparation course with a proven track record of nearly 100% success. If you are
                unable to attend the live online courses, you can access the recorded NPPE exam preparation course.
              </p>
              <p>Some of the characteristics of the NPPE exams are as follows:</p>
              <ul>
                <li>
                  Answering 110 multiple-choice questions within a time frame of two and a half hours (in Ontario, the
                  number of questions is 120).
                </li>
                <li>Each correct answer earns you one point, while there are no penalties for incorrect answers.</li>
                <li>
                  To pass the exam, you need to answer at least 65% of the questions correctly, which equates to a
                  minimum of 72 correct answers.
                </li>
              </ul>
              <p>The questions cover various topics as follows:</p>
              <ul>
                <li>Professionalism: Approximately 7 to 10 questions.</li>
                <li>Ethics: Around 17 to 20 questions.</li>
                <li>Field-specific questions related to your career: Between 27 and 32 questions.</li>
                <li>Employment laws: Approximately 23 to 28 questions.</li>
                <li>Legal matters pertaining to business activities: Around 7 to 10 questions.</li>
                <li>Organization regulations and disciplinary processes: Approximately 7 to 10 questions.</li>
                <li>
                  Province-specific questions relevant to each profession (only applicable in Ontario): 10 questions.
                </li>
              </ul>
              <p>
                It is important to note that passing the NPPE exam is a prerequisite for obtaining an engineering
                license in Canada.
              </p>
            </div>
          </div>

          <div className='row FNV-Related-Course'>
            <h3>Related Engineering Courses</h3>

            {/* Courses Desktop */}
            <CourseDeskSingle courses={courses} addToCart={addToCart} />
            {/* Courses Mobile */}
            <CourseMobileSingle courses={courses} addToCart={addToCart} />
          </div>

          <div id='P6' className='row'>
            <h3>The duration of time required to obtain a license from the Engineering Administration of Canada</h3>

            <div className='col-12'>
              <p>
                If you have successfully completed a four-year university program in Canada, you will need to acquire
                four years of relevant work experience in order to obtain a professional engineering license. To fulfill
                this requirement, you can register as an Engineer-in-Training (EIT) and gain Canadian work experience by
                working under the supervision of a licensed engineer (P.Eng).
              </p>
              <p>
                Similarly, if you have graduated from a university outside of Canada, you will need a total of four
                years of work experience, with at least one year obtained within Canada, to be eligible to apply for a
                P.Eng license. However, it is important to note that the evaluation process of your documents by the
                Canadian Engineering Department may take approximately 12 to 24 months.
              </p>
            </div>
          </div>

          <div id='P7' className='row'>
            <h3>Perks of EIT (Engineer-in-Training) </h3>
            <div className='col-12'>
              <p>
                Holding the EIT title demonstrates your professionalism and dedication to the engineering profession, as
                recognized by the Engineering System Organization. This designation opens doors to engage in local
                activities and projects, allowing you to actively contribute to the engineering community.
              </p>
              <p>
                Moreover, being an EIT grants you access to a range of services, including insurance and investment
                plans, designed to support your professional growth and development. Additionally, as an EIT pursuing
                engineering in Canada, you can benefit from valuable tips on obtaining individual licenses, reviewing
                your work history, and even gaining subscriptions to engineering journals, providing you with valuable
                resources to enhance your knowledge and stay updated in the field.
              </p>
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
                    Is it mandatory to obtain WES (World Education Services) approval in all provinces of Canada?
                  </button>
                </h2>
                <div id='Question1' className='accordion-collapse collapse show' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      No, WES (World Education Services) confirmation is only required in certain provinces of Canada,
                      such as Saskatchewan. It's important to note that WES does not forward your original documents
                      to any other organization; they only provide confirmation of document authenticity.
                    </p>
                    <p>
                      For instance, if you have already submitted a transcript version to WES, it will remain with the
                      organization. However, for other situations, you may need to prepare a new version of the
                      document.
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
                    Can one apply for a P.Eng license in a province other than their current province of residence?
                  </button>
                </h2>
                <div id='Question2' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>Yes.</div>
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
                    If we hold a P.Eng license in one province, are we eligible to apply for P.Eng licensure in
                    another province?
                  </button>
                </h2>
                <div id='Question3' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      It is possible to apply for P.Eng licensure in another province by fulfilling the requirement of
                      paying the annual membership fees for both provinces.
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
                    Is it required to submit the Experience Record during the initial stage?
                  </button>
                </h2>
                <div id='Question4' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      No, it is not obligatory. However, it is advisable to prepare and submit the Experience Record
                      after sending the initial set of documents. It is important to note that this document can be
                      modified if necessary, even after it has been submitted.
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
                    Is it required to submit the Experience Record during the initial stage?
                  </button>
                </h2>
                <div id='Question5' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      No, it is not a compulsory requirement. However, it is recommended to prepare and submit the
                      Experience Record after sending the initial set of documents. It is important to note that this
                      document can be revised or updated if necessary, even after it has been submitted.
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
                    Is it mandatory to include general courses in the course description?
                  </button>
                </h2>
                <div id='Question6' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>No.</p>
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
                    Is it required to have expert certificates, transcripts, and course descriptions stamped by a
                    P.Eng?
                  </button>
                </h2>
                <div id='Question7' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      No, it is not necessary. Simply including the desired statement along with your name, P.Eng
                      license number, and signature is sufficient.
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
                    Is it necessary to have the diploma and transcripts translated by a translation agency in Canada?
                  </button>
                </h2>
                <div id='Question8' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      No, it is not mandatory. Translations from translation agencies of other countries are also
                      accepted.
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
                    data-bs-target='#Question9'
                    aria-expanded='false'
                    aria-controls='Question9'
                  >
                    Is it possible to apply for EIT prior to applying for a P.Eng?
                  </button>
                </h2>
                <div id='Question9' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>Yes.</p>
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
                    Does obtaining a master's degree in Canada count as Canadian work experience?
                  </button>
                </h2>
                <div id='Question10' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      Yes, the MASc degree is recognized as one year of Canadian work experience. However, the M.Eng
                      degree is not regarded as Canadian work experience.
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
                    Does work experience prior to graduation count as acceptable experience that can be submitted for
                    P.Eng?
                  </button>
                </h2>
                <div id='Question11' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>No.</p>
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
                    Is engineering work experience in Iran considered acceptable for submission to P.Eng?
                  </button>
                </h2>
                <div id='Question12' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      Yes, engineering work experience in Iran is accepted. If you have a minimum of 5 years of work
                      experience in Iran, 3 out of the 4 required years of work experience for P.Eng can be covered.
                      Additionally, you must have at least one year of Canadian work experience under the supervision
                      of a licensed engineer. It should be noted that work experience outside of Canada is acceptable
                      as long as it meets Canadian standards.
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
                    data-bs-target='#Question13'
                    aria-expanded='false'
                    aria-controls='Question13'
                  >
                    In addition to the bachelor's degree and transcript, which must be from Iran and signed by a P.Eng
                    individual, is it permissible to upload the Canadian master's degree ourselves, or does it need to
                    be sent directly by the university?
                  </button>
                </h2>
                <div id='Question13' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>Yes it is.</p>
                  </div>
                </div>
              </div>

              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question14'
                    aria-expanded='false'
                    aria-controls='Question14'
                  >
                    Do the grading scales used by the Iranian Engineering System Organization, such as grades 3, 2,
                    and 1, have relevance in the process of obtaining a P.Eng?
                  </button>
                </h2>
                <div id='Question14' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>No, they do not.</p>
                  </div>
                </div>
              </div>

              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question15'
                    aria-expanded='false'
                    aria-controls='Question15'
                  >
                    Does holding a P.Eng provide advantages for teaching positions in Canadian universities?
                  </button>
                </h2>
                <div id='Question15' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      Possessing this certification is a requirement for teaching engineering courses that involve
                      design at Canadian universities.
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
                    data-bs-target='#Question16'
                    aria-expanded='false'
                    aria-controls='Question16'
                  >
                    What is the recommended approach for drafting an Experience Record?
                  </button>
                </h2>
                <div id='Question16' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      When writing an ER as an engineer, it is important to begin by clearly outlining the problem and
                      demonstrating how your engineering expertise was applied to solve it. It is essential to provide
                      a clear description of the outcomes of your work. Additionally, it is advisable to follow the
                      guidelines provided, which include five key sections for the report. It is worth noting that
                      engineering encompasses more than just design, and experiences related to project implementation
                      can also be documented in the ER.
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
                    data-bs-target='#Question17'
                    aria-expanded='false'
                    aria-controls='Question17'
                  >
                    Is it necessary to select the EIT option when completing the Application Form?
                  </button>
                </h2>
                <div id='Question17' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      If you possess a minimum of 5 years of engineering work experience in Iran, this requirement
                      will be deemed equivalent to 3 years of work experience. Moreover, if you also have at least one
                      year of Canadian work experience, you are eligible to directly apply for P.Eng without selecting
                      the EIT option. However, if you do not meet these criteria, you will initially become an EIT
                      before progressing to the P.Eng designation, in which case you should select the EIT option on
                      the form.
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
                    data-bs-target='#Question18'
                    aria-expanded='false'
                    aria-controls='Question18'
                  >
                    Is it necessary to include details about working with engineering software in the Experience
                    Record?
                  </button>
                </h2>
                <div id='Question18' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      The matter of software usage is quite intricate. While utilizing engineering software can
                      simplify tasks, it's important to note that you remain accountable for validating the results.
                      Therefore, if you have utilized software in your work, it is crucial to explain how you ensured
                      the accuracy of the outcomes obtained through the software.
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
                    data-bs-target='#Question19'
                    aria-expanded='false'
                    aria-controls='Question19'
                  >
                    Which documents are required to be submitted when completing the Application Form?
                  </button>
                </h2>
                <div id='Question19' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>The required documents at this stage are as follows:</p>
                    <ul>
                      <li>Completed P.Eng. Application Form (the form can be found at the end of this post)</li>
                      <li>Proof of Age and Identity</li>
                      <li>Academic credentials for the master's degree</li>
                      <li>Translation of academic credentials</li>
                      <li>Master's degree and transcripts</li>
                      <li>Transcript</li>
                      <li>Course List and Description</li>
                      <li>Resume</li>
                      <li>Current Employment details</li>
                      <li>Course grading system (Grading Rubric / Grading System)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question20'
                    aria-expanded='false'
                    aria-controls='Question20'
                  >
                    Does completing a PhD program under the guidance of a PEng professor count as one year of Canadian
                    work experience?
                  </button>
                </h2>
                <div id='Question20' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      If your research is purely academic in nature and lacks industry relevance, it will not be
                      considered acceptable. However, if you can establish a connection to the industry through your
                      doctoral studies or develop practical applications through laboratory work, it can be considered
                      as eligible experience.
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
                    data-bs-target='#Question21'
                    aria-expanded='false'
                    aria-controls='Question21'
                  >
                    Is there a discount for new cameras?
                  </button>
                </h2>
                <div id='Question21' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      Yes, if you apply within 6 months after the first entry to Canada and become a PR at the time of
                      entry, the discount will be included, and in this case, you must pay the Application Fee first,
                      and after receiving the P.Eng license, the amount Paid will be returned to you and the first
                      year of membership is free. This discount is not considered for those who have a Study Permit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className='offcanvas offcanvas-start'
        tabIndex='-1'
        id='offcanvasExample'
        aria-labelledby='offcanvasExampleLabel'
      >
        <div className='offcanvas-header'>
          <a className='navbar-brand' href='#'>
            <img src='/img/MainLogo.png' className='img-fluid' />
          </a>
          <button type='button' className='btn-close' data-bs-dismiss='offcanvas' aria-label='Close'></button>
        </div>
        <div className='offcanvas-body'>
          <h5>Fanavaran Sections</h5>

          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>Engineering</li>
            <li className='list-group-item'>Project Management</li>
            <li className='list-group-item'>Architect</li>
            <li className='list-group-item'>Technician</li>
            <li className='list-group-item'>Job Seeker</li>
            <li className='list-group-item'>Freelancer</li>
            <li className='list-group-item'>Plumbing</li>
            <li className='list-group-item'>Electrician</li>
          </ul>
        </div>
      </div>
    </>
  )
}

Index.guestGuard = true

export default Index
