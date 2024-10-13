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
      router.push('/job-seeking/fa')
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
          <h1>Job Seeking in Canada</h1>
        </div>

        <div className='row'>
          <div className='col-12'>
            <p>
              Securing employment in Canada can pose a formidable challenge. Immigration stands as a momentous choice in
              an individual's life, and Canada ranks among the favored destinations for Iranians, particularly those
              from the engineering and technical background aiming to flourish once more in this nation. The pursuit of
              employment in Canada should be the foremost consideration for engineers and skilled technicians alike.
            </p>
            <p>Table of contents:</p>
            <ol>
              <li>
                <a href='#P1'>Job Seeking in Canada</a>
              </li>
              <li>
                <a href='#P2'>Immigration and living conditions in a new country</a>
              </li>
              <li>
                <a href='#P3'>Steps required to enter the Canadian labor market</a>
              </li>
              <li>
                <a href='#P4'>Mentorship</a>
              </li>
              <li>
                <a href='#P5'>Looking for a job in Canada</a>
              </li>
              <li>
                <a href='#P6'>Standard Canadian resume</a>
              </li>
              <li>
                <a href='#P7'>Important factors in resume writing</a>
              </li>
              <li>
                <a href='#P8'>Preparing for an interview (Job Interview)</a>
              </li>
              <li>
                <a href='#P9'>Professional qualifications for employment in Canada</a>
              </li>
              <li>
                <a href='#FAQ'>FAQs</a>
              </li>
            </ol>
            <p>
              Working and residing in a country such as Canada brings forth a multitude of prospects and hurdles for
              immigrants. Familiarizing oneself with the forthcoming experiences and discerning the disparities in
              lifestyle and employment within the host nation enables immigrants to embrace the new circumstances.
              Embracing these conditions will facilitate a swift integration into Canadian society for newcomers,
              allowing them to swiftly actualize their goals.
            </p>
          </div>
        </div>

        <div className='row'>
          <h3>Before you start</h3>
          <div className='col-12'>
            <iframe
              src='https://www.youtube.com/embed/W2rouB4h1cQ'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div id='P1' className='row'>
          <h3>Job Seeking in Canada</h3>

          <div className='col-12'>
            <p>
              Undoubtedly, upon arrival in Canada, the primary concern for every immigrant is to secure employment. To
              address the challenge of finding a job in Canada, it is essential to acquire a comprehensive understanding
              of the country's job market dynamics. The pursuit of employment in Canada entails certain standards that
              must be met. In this document, we will provide a comprehensive explanation of this process to assist you.
            </p>
          </div>
        </div>

        <div id='P2' className='row'>
          <h3>4 Key Factors To Find The Ideal Job In Canada</h3>

          <div className='col-12'>
            <p>
              <strong>Proficiency in the English language</strong>
            </p>
            <p>
              A crucial aspect to excel in your pursuit of an ideal job in Canada is a strong command of the English
              language. Your English proficiency should be at a level where you can readily comprehend others and
              respond appropriately. Generally, a score of IELTS 7.5 or above is considered favorable.
            </p>
            <p>
              <strong>Crafting an impressive resume based on North American standards</strong>
            </p>
            <p>
              An effectively tailored resume is your greatest asset when seeking employment in this country. There are
              specific tips and guidelines that must be adhered to when composing a resume.
            </p>
            <p>
              <strong>Establishing a robust network within reputable Canadian and American companies</strong>
            </p>
            <p>Fostering connections within respected Canadian and American companies is essential.&nbsp;</p>
            <p>
              <strong>Familiarity with the North American labor market is advantageous.</strong>
            </p>
            <p>
              Considering the challenges faced by Persian-speaking individuals within the Canadian community, including
              those from countries such as Iran, Afghanistan, and Tajikistan, besides cultural and linguistic barriers,
              accessing career opportunities can be arduous. Specialized institutions and communities, such as
              technologists, can significantly expedite their path to success. It is important not to overlook the
              support that such institutions can provide.
            </p>
            <p>
              To enhance the awareness of Farsi-speaking immigrants regarding the necessary pathways to secure an ideal
              job, technologists have organized numerous free webinars in collaboration with industry experts and
              experienced professionals in the fields of engineering and technology. Most of these informative sessions
              are available as recorded videos on Fanavaran's YouTube channel. By watching these videos, you can obtain
              precise answers to your inquiries regarding finding employment in Canada.
            </p>
          </div>
        </div>

        <div id='P3' className='row'>
          <h3>Immigration and Adjusting to a New Country</h3>

          <div className='col-12'>
            <p>
              Residing in a foreign land presents numerous challenges. Language, culture, climate, and unfamiliarity
              with societal norms and legal frameworks are among the primary aspects that often leave immigrants feeling
              bewildered and overwhelmed.
            </p>
            <p>Starting from Scratch</p>
            <p>
              First and foremost, it is crucial to embrace the notion of building a new life from the ground up in the
              host country. Learning the language, connecting with people, familiarizing oneself with the surroundings,
              understanding Canada's geography, and even mastering the pronunciation of unfamiliar street names in your
              city of residence are all obstacles that lie ahead. Additionally, the task of finding employment in Canada
              adds to these challenges.
            </p>
            <p>
              <strong>Showcasing Your Skills</strong>
            </p>
            <p>
              The next step in securing employment in Canada involves showcasing your capabilities and values. This can
              be accomplished by crafting a well-crafted and effective resume, participating in professional forums, and
              excelling in job interviews. It's worth noting that the Canadian government offers valuable and
              complimentary services in these areas for immigrants. Be sure to take advantage of these resources.
            </p>
            <p>
              <strong>A Fresh Start</strong>
            </p>
            <p>
              Migration offers an opportunity for rebirth. Have you ever longed for a chance to start anew? Now that you
              have immigrated to Canada, you have the opportunity to redefine yourself and become the person you aspire
              to be. The initial surge of motivation and energy during the early stages of migration can provide the
              momentum needed to achieve great success. Harness this force and direct it towards your goals. Remember
              that you are not obligated to continue in your previous profession or field of expertise.
            </p>
            <p>
              <strong>Embracing Differences</strong>
            </p>
            <p>
              In Canada, everything is as distinct as the dissimilarity between the Farsi and English scripts. Canadians
              tend to be reserved, cautious, and slow to trust. Building trust is paramount, as it directly impacts
              friendly communication and professional credibility. Canadian culture highly values responsibility and
              punctuality. To navigate the job market and find employment in Canada, it is essential to understand and
              adapt to these differences.
            </p>
            <p>
              <strong>Finding Common Ground</strong>
            </p>
            <p>
              Canadians generally shy away from contentious discussions and adopt a relaxed demeanor. Therefore, in work
              environments or social gatherings, it is advisable to focus on shared interests rather than highlighting
              cultural disparities. Maintaining composure and avoiding anger is crucial.
            </p>
            <p>
              <strong>Exercising Patience</strong>
            </p>
            <p>
              Resist the urge to complain! It is understandable that you may wish for things to progress more swiftly,
              but keep in mind that Canadian processes are typically slow and methodical. Patience is key.
            </p>
            <p>Enhancing Knowledge and Cultural Adaptation</p>
            <p>
              Knowledge is a valuable asset, so investing in improving your skills and knowledge base is essential.
              Canada operates on different standards and a unique style, necessitating the acceptance of this reality to
              find employment or enhance your current job position. Let go of attachment to past titles and designations
              (such as Mr., Mrs., Engineer, or Doctor), as it is customary in Canada to address one another by first
              names rather than using honorifics.
            </p>
          </div>
        </div>

        <div id='P4' className='row'>
          <h3>Steps to Enter the Canadian Job Market</h3>

          <div className='col-12'>
            <p>
              In this section, we will outline the necessary steps to enter the Canadian job market. Proficiency in the
              English language, resume writing, seeking guidance, and networking are the most crucial tools at your
              disposal as a newcomer seeking employment in Canada.
            </p>
            <p>
              <strong>English Language Proficiency</strong>
            </p>
            <p>
              The English language poses the most significant challenge for the Farsi-speaking community residing in
              Canada. If you find yourself in an area distant from the Iranian community, consider it an advantage, as
              the English-speaking community compels you to master the language professionally.
            </p>
            <p>
              The biggest mistake made by the Farsi-speaking community is failing to embrace a new culture and language,
              confining themselves to their language community. This oversight hinders success in job interviews, as it
              deprives individuals of the primary tool needed to present their abilities in a professional manner.
            </p>
            <p>
              Mere language proficiency without cultural familiarity will not enhance your communication skills,
              especially when it comes to finding employment in Canada. Even if you possess an outstanding IELTS or
              TOEFL score, strive to learn English from a Canadian to make significant strides in adopting the accent.
            </p>
            <p>
              <strong>Mentorship</strong>
            </p>
            <p>
              Prior to applying for a job, seek out a mentor and solicit their guidance. After language proficiency,
              mentorship ranks second in terms of importance. Without a mentor, you are left without guidance, and your
              path may veer off course.
            </p>
            <p>
              A personal mentor is an experienced expert who has worked at a senior level in Canada, preferably in the
              field that aligns with your career aspirations. They hold the key to your professional future and can
              guide you toward achieving your career goals. It is advisable to choose someone with whom you share a
              friendly rapport and who can spare time for regular interactions. LinkedIn is an excellent platform to
              find a suitable mentor.
            </p>
            <p>
              <strong>Enhancing Individual Knowledge and Building an Outstanding Resume</strong>
            </p>
            <p>
              Improving one's individual knowledge and crafting an exceptional resume require time and effort. With the
              guidance of a mentor, familiarize yourself with popular designations and licenses relevant to your field
              of expertise. Acquiring these licenses and designations will enhance your credibility in Canada, so invest
              the necessary time to obtain them, as they will open numerous doors for you in the future. Employers
              evaluate your specialized and technical knowledge based on these licenses.
            </p>
            <p>
              <strong>Networking</strong>
            </p>
            <p>
              In order to secure a suitable position in the engineering and technical fields, it is imperative to
              establish a strong and effective network comprising senior engineers and company managers. Networking
              enables you to gain visibility and showcase your abilities. Creating a specialized account on professional
              networks such as LinkedIn is particularly valuable in Canada. In the relatively close-knit Canadian work
              environment, managers and senior engineers are unlikely to endorse individuals they are not acquainted
              with.
            </p>
            <p>
              <strong>Volunteer Work</strong>
            </p>
            <p>
              Consider engaging in volunteer work, as it holds significant value in Canadian culture. Numerous benefits
              arise from volunteering. Immigrants can enhance their English language skills, acclimate to Canadian work
              culture, and establish connections by building self-confidence. Look for opportunities to volunteer in
              Canadian or international companies to expand your network and broaden your horizons.
            </p>
          </div>
        </div>

        <div id='P5' className='row'>
          <h3>Job Seeking in Canada</h3>

          <div className='col-12'>
            <p>
              The primary hurdle you will encounter when searching for employment in Canada is ensuring that your resume
              reaches the hands of recruiters. One of the most effective methods is to have your resume stored in the
              company's database. Utilizing job search websites and social networks can significantly enhance your
              chances.
            </p>
            <ul>
              <li>Take advantage of platforms like Indeed and Glassdoor to upload your resume.</li>
              <li>
                Enable the Job Alert feature for your target companies to receive updates on available job positions.
              </li>
              <li>Establish a professional LinkedIn profile and activate the Open to Opportunities feature.</li>
              <li>
                Utilize social networks to search for and follow desired companies and job roles. Many companies
                publicize job openings on platforms such as Instagram or Facebook.
              </li>
            </ul>
          </div>
        </div>

        <div className='row FNV-Related-Course'>
          <h3>Related Job Seeker Courses</h3>

          {/* Courses Desktop */}
          <CourseDeskSingle courses={courses} addToCart={addToCart} />
          {/* Courses Mobile */}
          <CourseMobileSingle courses={courses} addToCart={addToCart} />
        </div>

        <div id='P6' className='row'>
          <h3>Standard Canadian Resume</h3>

          <div className='col-12'>
            <p>
              As you have realized, your resume holds paramount importance when it comes to securing a job in Canada. To
              increase your chances, you should submit your resume to the human resources manager or HR personnel
              through existing employees of the company.
            </p>
            <p>
              <strong>Building Trust:</strong>
            </p>
            <p>
              Your resume should be credible. Including Canadian licenses, outlining your project involvements, and
              providing reliable references will significantly enhance its credibility.
            </p>
            <p>
              On average, hiring managers in Canada spend 6-10 seconds per resume, scanning for relevant keywords
              related to the desired job position. Therefore, it is crucial to highlight pertinent skills and keywords
              at the beginning of your resume.
            </p>
            <p>
              <strong>Skills and Keywords:</strong>
            </p>
            <p>
              Utilize your experience and skills to identify keywords sought by employers through a thorough examination
              of the job description. Once identified (typically mentioned in the "Your Responsibilities" section), make
              sure to incorporate them in your resume.
            </p>
            <p>
              <strong>Key Considerations for Resume Writing:</strong>
            </p>
            <ul>
              <li>
                Ensure that your resume is well-organized, clean, and free of spelling and grammar errors to avoid any
                hindrances in your job search in Canada.
              </li>
              <li>
                Include your city of residence in your resume. If you are willing to relocate, mention below your
                current address that you are open to relocating immediately (e.g., Open to Relocate to Toronto
                Immediately).
              </li>
              <li>
                List your previous job titles on your resume, aligning them with the position you are applying for.
              </li>
              <li>
                Clearly state the month and year of your employment start and end dates in the work history section.
              </li>
              <li>
                If you have worked on projects as an engineer, architect, project manager, or in any other technical
                role, mention the project name and provide details such as scope, duration, budget, and team size. This
                will bolster the credibility and strength of your resume.
              </li>
              <li>
                The number of projects mentioned in your work history indicates the scale of projects you have handled,
                so be precise in including these figures.
              </li>
              <li>
                Incorporate keywords from your previous responsibilities in your resume to capture the attention of
                recruiters.
              </li>
              <li>
                Each job position requires a tailored resume. Sending a generic resume for all positions is not
                recommended.
              </li>
            </ul>
            <p>
              <strong>Resume Length:</strong>
            </p>
            <p>
              Adhering to Canadian labor market standards is essential in your job search. This even extends to the
              length of your resume.
            </p>
            <p>
              <strong>Junior Category:</strong>
            </p>
            <p>Zero to three years of experience: Maximum of 1 page.</p>
            <p>
              <strong>Intermediate Category:</strong>
            </p>
            <p>Three to seven years of experience: Maximum of 2 pages.</p>
            <p>
              <strong>Senior and Lead Category:</strong>
            </p>
            <p>More than eight years of work experience: The number of resume pages can range from 2 to 3 pages.</p>
            <p>
              <strong>What NOT To Do In Your Resume:</strong>
            </p>
            <ul>
              <li>
                Avoid including a photograph, date of birth, marital status, religion, and similar personal information
                in a resume tailored for employment in Canada.
              </li>
              <li>While honesty is crucial, a slight exaggeration can be acceptable.</li>
              <li>
                Exclude irrelevant information and remove excessive formatting. For instance, if you have authored a
                children's book, mentioning it is irrelevant for a mechanical engineering position.
              </li>
              <li>
                Do not mention that you know Farsi and are bilingual, as in Canada, "bilingual" typically refers to
                proficiency in French and English.
              </li>
              <li>Emphasize technical abilities over soft skills in your resume.</li>
            </ul>
          </div>
        </div>

        <div id='P7' className='row'>
          <h3>Preparing for a Job Interview</h3>
          <div className='col-12'>
            <p>When getting ready for an interview, keep the following considerations in mind:</p>
            <p>
              <strong>Research the company</strong>: Take the time to thoroughly read the company's website and gather
              sufficient information about its activities and goals. This will demonstrate your knowledge and interest
              in the organization.
            </p>
            <p>
              <strong>Connect your achievements to the job responsibilities:</strong> Carefully analyze the job
              responsibilities outlined in the position description and draw connections to your own accomplishments.
              Highlight relevant experiences from your work history or university education that align with the
              requirements of the role.
            </p>
            <p>
              Don't hesitate to ask questions: Remember that an interview is a two-way conversation. Show your
              enthusiasm for the job and the company by asking thoughtful questions. This demonstrates your genuine
              interest and helps assess your soft skills. Keep in mind that your professional skills have already been
              presented in your resume and evaluated by the recruiter.
            </p>
            <p>If you have a long or difficult name:</p>
            <p>
              Consider shortening your name and surname to make them easier to read. Lengthy names can pose challenges
              for Canadian readers and increase the likelihood of spelling errors. These factors can hinder your job
              search in Canada. Alternatively, you may choose a nickname to alleviate this issue. You can use the
              nickname in your documents to address this matter.
            </p>
          </div>
        </div>

        <div id='P8' className='row'>
          <h3>Professional Qualifications for Employment in Canada:</h3>
          <div className='col-12'>
            <p>
              Acquiring specialized and professional licenses and credentials such as P.Eng., Red Seal, and PMP can
              significantly enhance your employment prospects and expedite your job search in Canada. Fanvaran offers
              various courses to prepare students for obtaining these licenses and credentials. Since the associated
              exams can be challenging, Fanvaran conducts preparation courses in Farsi to ensure students have a
              comprehensive understanding of the relevant topics.
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
                  When a company requests a resume and cover letter, is it considered unprofessional to include an
                  additional file showcasing projects? What is the impact, positive or negative, of including such a
                  file?
                </button>
              </h2>
              <div id='Question1' className='accordion-collapse collapse show' data-bs-parent='#FAQEngineering'>
                <div className='accordion-body'>
                  <p>
                    If the company does not explicitly ask for supporting documents, it is advisable not to send them.
                    While some individuals may choose to include additional files, it is crucial that these documents
                    are entirely relevant to the application.
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
                  In the upcoming semester, I will be pursuing a Master's degree in Project Management with a
                  specialization in Business Analysis. I'm curious to know if obtaining a PMP certification is necessary
                  for job opportunities, or if having a Master's degree alone is sufficient.
                </button>
              </h2>
              <div id='Question2' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                <div className='accordion-body'>
                  <p>
                    In terms of securing a job, licenses, such as the P.Eng certification, are the primary requirements.
                    No other certificate alone serves as a satisfactory condition. Regarding your inquiry, having a PMP
                    certification is considered a necessary condition, and in some cases, it may be an optional
                    requirement for project-related positions. However, it is important to note that possessing a PMP
                    certification alone is not sufficient for securing a job.
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
                  Do grade point averages (GPAs) impact acceptance into a program or the job application process?
                  Additionally, given the current challenges in obtaining an original Master's degree, would it be
                  possible to apply for a job requiring a Master's degree and explain the circumstances to the employer?
                </button>
              </h2>
              <div id='Question3' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                <div className='accordion-body'>
                  <p>
                    For many employers, the importance of GPA in both Bachelor's and Master's degrees is relatively low,
                    and they do not consider academic documents as strict prerequisites. They often do not differentiate
                    between universities, whether it's Payam Noor or the University of Tehran. What truly matters to
                    them is the practical experience and the work you can showcase, which can demonstrate your ability
                    to successfully complete courses and exams.
                  </p>
                  <p>
                    In terms of job applications, it may be possible to apply for a position that requires a Master's
                    degree even if you don't possess the original degree. However, it is crucial to communicate the
                    circumstances clearly to the employer and explain your qualifications and relevant experience.
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
