import React, { useEffect } from 'react';
import Image from 'next/image';

const Hiking = () => {
  useEffect(() => {
    const mountainLeft = document.querySelector('#mountain_left');
    const mountainRight = document.querySelector('#mountain_right');
    const cloud1 = document.querySelector('#clouds_1');
    const cloud2 = document.querySelector('#clouds_2');
    const text = document.querySelector('#text');
    const man = document.querySelector('#man');

    const handleScroll = () => {
      let value = window.scrollY;
      if (mountainLeft) mountainLeft.style.left = `-${value / 0.7}px`;
      if (cloud2) cloud2.style.left = `-${value * 2}px`;
      if (mountainRight) mountainRight.style.left = `${value / 0.7}px`;
      if (cloud1) cloud1.style.left = `${value * 2}px`;
      if (text) text.style.bottom = `-${value}px`;
      if (man) man.style.height = `${window.innerHeight - value}px`;
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section className="FNV-Hike">
        <div className="FNV-Hike-Slider">
          <div id="bg" className="image-container">
            <Image
              src="/images/hike/bg.jpg"
              id='bg'
              alt="Background"
              layout="fill"
              objectFit="cover" // Ensures it covers the entire container
            />
          </div>
          <h2 id="text">HIKE</h2>
          <div id="man" className="image-container">
            <Image
              src="/images/hike/man.png"
              id='man'
              alt="Man"
              layout="fill"
              objectFit="contain" // Ensures it fits inside the container
            />
          </div>
          <div id="clouds_1" className="image-container">
            <Image
              src="/images/hike/clouds_1.png"
              id='clouds_1'
              alt="Cloud 1"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div id="clouds_2" className="image-container">
            <Image
              src="/images/hike/clouds_2.png"
              id='clouds_2'
              alt="Cloud 2"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div id="mountain_left" className="image-container">
            <Image
              src="/images/hike/mountain_left.png"
              id='mountain_left'
              alt="Mountain Left"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div id="mountain_right" className="image-container">
            <Image
              src="/images/hike/mountain_right.png"
              id='mountain_right'
              alt="Mountain Right"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        <section id="sec">
          <h2>Welcome to the Mountains</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A earum ipsam laboriosam mollitia, architecto esse voluptates eligendi provident soluta et cupiditate sit nisi at dolorum iure dignissimos cumque amet necessitatibus blanditiis? Earum assumenda soluta reiciendis recusandae, incidunt tenetur nihil adipisci corrupti, quibusdam ullam numquam iusto veritatis facilis ab dicta, nobis inventore eius magni eveniet quo? Repellat nobis quos, facilis quam perspiciatis asperiores delectus, aliquid nihil molestias in at modi nulla minima deleniti. Minima aliquid magnam libero reiciendis et, nesciunt repellendus eum vel rerum alias ea enim fugiat eius. Quae dolores, amet nam ab officiis corrupti sequi eligendi quo culpa illum.
          </p>
        </section>
      </section>
    </>
  );
};
Hiking.guestGuard = true;

export default Hiking;
