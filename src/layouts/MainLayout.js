import Header from 'src/layouts/components/header';
import Footer from 'src/layouts/components/footer';

const MainLayout = ({ children }) => {

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
