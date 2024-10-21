import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import feather from 'feather-icons';

// ** Format ISO date
import DateFormat from 'src/utils/isoDateToReadble';

// Import Translation
import { useTranslation } from 'react-i18next';

const SinglePost = ({ post }) => {
  const { t } = useTranslation();
  const imgRef = useRef(null); // Ref for the image element
  const [isInView, setIsInView] = useState(false); // State to track if the image is in the viewport

  // Intersection Observer logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect(); // Stop observing after the image has loaded
          }
        });
      },
      {
        threshold: 0.1, // Image should be at least 10% visible to trigger
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  // Modify the image URL to request a smaller size (max width of 280px)
  const getSmallImageUrl = (url) => {
    // Example: Modify the image URL to request a smaller image.
    // This is assuming your image service supports size parameters. Adapt to your actual URL structure.
    return `${url}?w=365`; // Add a query parameter to limit the width to 280px
  };

  return (
    <article className="col-12 col-md-4">
      <Link className="FNV-Blog" href={`/blog/${post.slug}`}>
        {/* Image loading when in viewport */}
        <figure>
          <img
            ref={imgRef}
            src={isInView ? getSmallImageUrl(post.image) : ''} // Load smaller image when in view
            alt={post.title}
            data-src={post.image} // Optionally store the original image URL for lazy loading
          />
          <figcaption>{post.title}</figcaption>
        </figure>

        <header>
          <h3>{post.title}</h3>
        </header>

        <div className="post-meta">

        </div>

        <footer>
          <DateFormat date={post.createdAt} />
        </footer>
      </Link>
    </article>
  );
};

export default SinglePost;
