import React, { useEffect, useState, useRef } from 'react';

// ** Hook Imports
import Link from 'next/link';

// ** Import translation
import { useTranslation } from 'react-i18next';

// ** Format ISO date
import DateFormat from 'src/utils/isoDateToReadble';

import { fetchBlogData } from 'src/store/apps/blog';
import { useDispatch, useSelector } from 'react-redux';

const SingleDeskPost = () => {
  // state
  const [posts, setPosts] = useState([]);

  // Hooks
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const blogData = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(fetchBlogData());
  }, [dispatch]);

  useEffect(() => {
    if (blogData?.data) {
      setPosts(blogData?.data?.data);
    }
  }, [blogData]);

  useEffect(() => {
    const lazyLoadImages = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src; // Load the image
          img.removeAttribute('data-src'); // Remove the data-src attribute once loaded
          observer.unobserve(img); // Stop observing the image
        }
      });
    };

    const observer = new IntersectionObserver(lazyLoadImages, {
      rootMargin: '0px 0px 200px 0px', // Adjust margin to trigger earlier if desired
      threshold: 0.1, // Trigger when at least 10% of the image is visible
    });

    const images = document.querySelectorAll('img[data-src]');
    images.forEach((img) => observer.observe(img));

    return () => {
      if (observer && images) {
        images.forEach((img) => observer.unobserve(img));
      }
    };
  }, [posts]);

  return (
    <>
      <div className="row">
        {Array.isArray(posts) &&
          posts.slice(0, 3).map((post, index) => (
            <article className="col-12 col-md-4" key={index}>
              <Link className="FNV-Blog" href={`/blog/${post.slug}`}>
                <figure>
                  {/* Render the image */}
                  {post.image && (
                    <img
                      data-src={post.image}
                      src="images/placeholder.jpg"
                      alt={post.title}
                      className="FNV-Blog-Image"
                      onError={(e) => (e.target.src = "fallback.jpg")} // Fallback image
                    />
                  )}
                  <figcaption>{post.title}</figcaption>
                </figure>

                <header>
                  <h3>{post.title}</h3>
                </header>

                <footer>
                  <DateFormat date={post.createdAt} />
                </footer>
              </Link>
            </article>
          ))}
      </div>
    </>
  );
};

export default SingleDeskPost;
