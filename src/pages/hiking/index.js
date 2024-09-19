import { useEffect } from 'react';

function Hiking() {

  useEffect(() => {
    const mountainLeft = document.querySelector('#mountain_left');
    const mountainRight = document.querySelector('#mountain_right');
    const cloud1 = document.querySelector('#clouds_1');
    const cloud2 = document.querySelector('#clouds_2');
    const text = document.querySelector('#text');
    const man = document.querySelector('#man');

    const handleScroll = () => {
      let value = window.scrollY;
      mountainLeft.style.left = `-${value / 0.7}px`;
      cloud2.style.left = `-${value * 2}px`;
      mountainRight.style.left = `${value / 0.7}px`;
      cloud1.style.left = `${value * 2}px`;
      text.style.bottom = `-${value}px`;
      man.style.height = `${window.innerHeight - value}px`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (

    <div>
      <section id="top" style={sectionTopStyle}>
        <img src="https://aryan-tayal.github.io/Mountains-Parallax/bg.jpg" id="bg" style={bgStyle} />
        <h2 id="text" style={textStyle}>Mountains</h2>
        <img src="https://aryan-tayal.github.io/Mountains-Parallax/man.png" id="man" style={manStyle} />
        <img src="https://aryan-tayal.github.io/Mountains-Parallax/clouds_1.png" id="clouds_1" style={cloud1Style} />
        <img src="https://aryan-tayal.github.io/Mountains-Parallax/clouds_2.png" id="clouds_2" style={cloud2Style} />
        <img src="https://aryan-tayal.github.io/Mountains-Parallax/mountain_left.png" id="mountain_left" style={mountainLeftStyle} />
        <img src="https://aryan-tayal.github.io/Mountains-Parallax/mountain_right.png" id="mountain_right" style={mountainRightStyle} />
      </section>
      <section id="sec" style={sectionStyle}>
        <h2>Welcome to the Mountains</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A earum ipsam laboriosam mollitia, architecto esse voluptates eligendi provident soluta et cupiditate sit nisi at dolorum iure dignissimos cumque amet necessitatibus blanditiis?
        </p>
      </section>
      <footer style={footerStyle}>
        <a href="#"><i className="fa-solid fa-house"></i></a>
        <a href="#"><i className="fa-solid fa-mountain-sun"></i></a>
        <a href="#"><i className="fa-solid fa-person-hiking"></i></a>
        <a href="#"><i className="fa-solid fa-people-group"></i></a>
        <a href="#"><i className="fa-solid fa-gears"></i></a>
      </footer>
    </div>
  );
}

// Add guestGuard property
Hiking.guestGuard = true;

export default Hiking;

// Inline styles
const sectionTopStyle = {
  position: 'relative',
  height: '100vh',
  overflow: 'hidden',
};

const bgStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const textStyle = {
  position: 'absolute',
  color: 'white',
  fontSize: '5rem',
  bottom: '50px',
  left: '50px',
};

const manStyle = {
  position: 'absolute',
  height: '100vh',
  zIndex: 2,
};

const cloud1Style = {
  position: 'absolute',
  top: '20px',
  right: '10px',
  zIndex: 1,
};

const cloud2Style = {
  position: 'absolute',
  top: '30px',
  left: '10px',
  zIndex: 1,
};

const mountainLeftStyle = {
  position: 'absolute',
  left: 0,
  bottom: 0,
};

const mountainRightStyle = {
  position: 'absolute',
  right: 0,
  bottom: 0,
};

const sectionStyle = {
  padding: '2rem',
  textAlign: 'center',
};

const footerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  padding: '20px',
  backgroundColor: '#222',
  color: 'white',
};
