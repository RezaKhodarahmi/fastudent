import React from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import SingleDeskBlog from 'src/views/blog/singleDeskPost'
import SingleMobileBlog from 'src/views/blog/singleMobileBlog'
import Head from 'next/head'

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

      <section className='FNV-Single-Post' style={{ direction: 'rtl' }}>
        <div className='container'>
          <div className='row'>
            <div className='col-12 FNV-FeatureImage'>
              <img src={post.image || '/default-image.jpg'} alt={post.title || 'Default Title'} />
              <div className='FNV-Meta'>
                <div className='FNV-Meta-Title'>
                  <h1>{post.title || 'Default Title'}</h1>
                </div>
                <span className='FNV-Author'>
                  <div className='FNV-Author-Image'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='icon icon-tabler icon-tabler-user-pentagon'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                      <path d='M13.163 2.168l8.021 5.828c.694 .504 .984 1.397 .719 2.212l-3.064 9.43a1.978 1.978 0 0 1 -1.881 1.367h-9.916a1.978 1.978 0 0 1 -1.881 -1.367l-3.064 -9.43a1.978 1.978 0 0 1 .719 -2.212l8.021 -5.828a1.978 1.978 0 0 1 2.326 0z' />
                      <path d='M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z' />
                      <path d='M6 20.703v-.703a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v.707' />
                    </svg>
                  </div>
                  <div className='FNV-Author-Name'>
                    <span>
                      Author: <strong>{post.author || 'Unknown'}</strong>
                    </span>
                  </div>
                  <div className='FNV-Author-Image'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='icon icon-tabler icon-tabler-calendar-time'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                      <path d='M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4' />
                      <path d='M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0' />
                      <path d='M15 3v4' />
                      <path d='M7 3v4' />
                      <path d='M3 11h16' />
                      <path d='M18 16.496v1.504l1 1' />
                    </svg>
                  </div>
                  <div className='FNV-Author-Name'>
                    <span>
                      Date: <strong>{new Date(post.createdAt).toLocaleDateString() || 'Unknown'}</strong>
                    </span>
                  </div>
                  <div className='FNV-Author-Image'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='icon icon-tabler icon-tabler-message-circle-2'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                      <path d='M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1' />
                    </svg>
                  </div>
                  <div className='FNV-Author-Name'>
                    <span>
                      Comments: <strong>{post.commentsCount || '0'}</strong>
                    </span>
                  </div>
                </span>
              </div>
            </div>
            <div className='col-12 FNV-Content'>
              <div dangerouslySetInnerHTML={{ __html: post.description || '<p>No content available</p>' }} />
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-Blog-Related'>
        <h3>{t('continue-reading')}</h3>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <SingleDeskBlog />
              <SingleMobileBlog />
            </div>
          </div>
        </div>
      </section>
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
