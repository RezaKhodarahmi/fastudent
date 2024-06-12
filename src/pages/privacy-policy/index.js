import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useRouter } from 'next/router'

// ** Import Translation
import { useTranslation } from 'react-i18next'

function Index() {
  //Hooks
  const router = useRouter()
  const { t } = useTranslation()

  // Check website lang
  useEffect(() => {
    const lng = window.localStorage.getItem('i18nextLng')
    if (lng == 'fa') {
      router.push('/privacy-policy/fa')
    }
  }, [])

  return (
    <>
      <div className='container py-5'>
        <div className='row'>
          <h1>Privacy Policy</h1>
          <p>
            <strong>Effective Date: June 7, 2024</strong>
          </p>

          <h2>Introduction</h2>
          <p>
            Welcome to Fanavaran - Institute of Technology and Engineering. Your privacy is important to us. This
            Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our
            website <a href='https://fanavaran.ca'>https://fanavaran.ca</a> or contact us through other means. Please
            read this policy carefully to understand our views and practices regarding your personal data and how we
            will treat it.
          </p>

          <h2>Information We Collect</h2>
          <p>We may collect and process the following data about you:</p>

          <h3>Personal Identification Information</h3>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Mailing address</li>
            <li>Educational background</li>
            <li>Payment information (when you enroll in our courses)</li>
            <li>Any other information you voluntarily provide</li>
          </ul>

          <h3>Non-Personal Identification Information</h3>
          <ul>
            <li>Browser type</li>
            <li>Operating system</li>
            <li>Internet Protocol (IP) address</li>
            <li>Internet service provider (ISP)</li>
            <li>Date and time of visits</li>
            <li>Referring/exit pages</li>
            <li>Number of clicks</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect in the following ways:</p>
          <ul>
            <li>To provide and maintain our website</li>
            <li>To deliver our online courses and educational services</li>
            <li>To process transactions</li>
            <li>To improve our website and services</li>
            <li>To understand and analyze how you use our website</li>
            <li>To develop new products, services, features, and functionality</li>
            <li>To communicate with you, including for customer service, updates, and promotional purposes</li>
            <li>To send you emails related to your course progress, updates, or other services</li>
            <li>To protect our website and services from abuse or illegal activities</li>
          </ul>

          <h2>How We Share Your Information</h2>
          <p>
            We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information
            unless we provide users with advance notice. This does not include website hosting partners and other
            parties who assist us in operating our website, conducting our business, or serving our users, so long as
            those parties agree to keep this information confidential. We may also release information when it's release
            is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights,
            property or safety.
          </p>

          <h2>Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information.
            While we have taken reasonable steps to secure the personal information you provide to us, please be aware
            that despite our efforts, no security measures are perfect or impenetrable, and no method of data
            transmission can be guaranteed against any interception or other type of misuse.
          </p>

          <h2>Your Data Protection Rights</h2>
          <p>Depending on your location, you may have the following rights regarding your personal information:</p>
          <ul>
            <li>The right to access – You have the right to request copies of your personal data.</li>
            <li>
              The right to rectification – You have the right to request that we correct any information you believe is
              inaccurate or complete information you believe is incomplete.
            </li>
          </ul>

          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p>
            Email: <a href='mailto:info@fanavaran.ca'>info@fanavaran.ca</a>
          </p>
          <p>Phone: (905) 505-2323 and (672) 399-6600</p>
        </div>
      </div>
    </>
  )
}

Index.guestGuard = true

export default Index
