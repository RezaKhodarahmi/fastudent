import { useEffect } from "react";
import Header from 'src/layouts/components/header';
import Footer from 'src/layouts/components/footer';

const MainLayout = ({ children }) => {
  useEffect(() => {
    // Load the gtag.js script
    const script = document.createElement('script');
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-11103999225";
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() { window.dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'AW-11103999225');
    };
  }, []);

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export default MainLayout;