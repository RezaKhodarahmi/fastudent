import React from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import SingleDeskBlog from 'src/views/blog/singleDeskPost'
import SingleMobileBlog from 'src/views/blog/singleMobileBlog'
import Head from 'next/head'
import Link from 'next/link';

const SinglePost = ({ pageProps }) => {
  const { post } = pageProps
  const { t } = useTranslation()
  const router = useRouter()

  if (router.isFallback || !post) {
    return <div>Loading...</div>
  }

  return (
    <>

      <Head>
        <title>{post.metaTitle || 'Default Title'}</title>
        <meta name='description' content={post.metaDescription || 'Default description'} />
        <meta name='keywords' content={post.keywords || 'default, keywords'} />

        {/* Open Graph / Facebook */}
        <meta property='og:title' content={post.metaTitle || 'Default Title'} />
        <meta property='og:description' content={post.metaDescription || 'Default description'} />
        <meta property='og:image' content={post.image || '/default-image.jpg'} />
        <meta property='og:url' content={`https://fanavaran.ca/blog/${post.slug}`} />
        <meta property='og:type' content='article' />
        <meta property='og:site_name' content='Fanavaran' />
        <meta property='og:image:alt' content={post.metaTitle || 'Default Title'} />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={post.metaTitle || 'Default Title'} />
        <meta name='twitter:description' content={post.metaDescription || 'Default description'} />
        <meta name='twitter:image' content={post.image || '/default-image.jpg'} />

        {/* Additional tags for other platforms */}
        <meta name='author' content={post.author || 'Unknown'} />
        <meta property='article:published_time' content={post.createdAt} />
        <meta property='article:modified_time' content={post.updatedAt} />
        <meta property='article:author' content={post.author || 'Unknown'} />
      </Head>

      <article className="FNV-Blog-Single" style={{ direction: 'rtl' }}>
        <div className="container">
          <div className="row">
            <aside className="col-md-3">
              {post.slug === 'Renewing-Iranian-passport-in-Canada' || post.slug === 'renewing-iranian-passport-in-canada' ? (
                <Link href="https://mikhak.mfa.gov.ir/" target='_blank'>
                  <img
                    src="/images/ads/mikhak.webp"
                    alt={post.title}
                  />
                </Link>
              ) : (
                <Link href="#">
                  <span>{t('fanavaran-ads')}</span>
                  <span>370 x 424</span>
                </Link>
              )}
            </aside>

            <main className="col-md-9">
              <figure>
                {/* Using Next.js Image component for optimization */}
                <img
                  src={post.image || '/default-image.jpg'}
                  alt={post.title || 'Default Title'}
                  layout="responsive"
                />

                <figcaption>{post.title}</figcaption>
              </figure>

              <header>
                <h1>{post.title || 'Default Title'}</h1>

                <span><strong>{new Date(post.createdAt).toLocaleDateString() || 'Unknown'}</strong></span>
              </header>

              <div className='FNV-Blog-Single-Content' dangerouslySetInnerHTML={{ __html: post.description || '<p>No content available</p>' }} />

              <div className="col-md-12">
                <h3>
                  {t('continue-reading')}

                  <Link href="/blog/">
                    {t('blogs-section-button')}

                    <svg
                      width="23"
                      height="22"
                      viewBox="0 0 23 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 2L2 11L11 20"
                        stroke="#223885"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13 11H21"
                        stroke="#223885"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </h3>

                <SingleDeskBlog />
              </div>
            </main>
          </div>
        </div>
      </article>
    </>
  )
}

export async function getServerSideProps(context) {
  const { slug } = context.params
  try {
    const response = await fetch(`https://fanavaran.ca:3200/api/v1/student/blog/${slug}`)
    if (!response.ok) {
      throw new Error('Failed to fetch post data')
    }

    const data = await response.json()

    // Set cache-control header for the response
    context.res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=60, stale-while-revalidate=59')

    return {
      props: {
        post: data.data
      }
    }
  } catch (error) {
    return {
      props: {
        post: null
      }
    }
  }
}


SinglePost.guestGuard = true

export default SinglePost
