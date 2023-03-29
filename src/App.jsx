
import React, {useState, useEffect} from 'react';
import About from './components/About/About';
import BackToTopBtn from './components/BackToTopBtn/BackToTopBtn';
import Brands from './components/Brands/Brands';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Testimonials from './components/Testimonials/Testimonials';
import HashLoader from "react-spinners/HashLoader";

// import components

const App = () => {
  const [loader, setLoader] = useState(false);
  useEffect(()=>{
    setLoader(true);

    setTimeout(()=> {
      setLoader(false)
    }, 4000)
  }, [])
  return <div>
    {
      loader ?
      <HashLoader
      color={"#053070"}
      loading={loader}
      size={100}
      aria-label="Loading Spinner"
      data-testid="loader"
      className='my-[20%] m-auto translate-y-[-50%]'
    />
      :
    <div>
      <Header />
      <Hero />
      <Brands />
      <About />
      <Skills />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTopBtn />
    </div>
    }
  </div>;
};

export default App;
