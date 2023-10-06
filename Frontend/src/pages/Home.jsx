import { useState } from 'react';
import cajas from '../resources/img/cajas.png';
import CtaButton from '../components/CtaButton';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import About from '../components/About';
import BoxFormPopup from '../components/boxFormComponents/BoxFormPopup';
import '../resources/styles/home.css';

function Home() { 
  const [open, setOpen] = useState(false);
  
  return (
    <div className='bg-black'>
      <Nav></Nav>
      <section id='inicio' className='py-30 md:py-36'>
        <div className='flex flex-col items-center justify-center md:flex-row'>
          <div className='px-8 mt-16 text-center md:w-4/6 md:text-left lg:w6/12 xl:w-6/12'>
            <h1 className='pb-8 text-4xl title md:text-4xl lg:text-5xl'>Servicio de control del contenido de tus cajas</h1>
            <p className='text-lg text-white sm:text-xl md:leading-10'>Organiza tu mudanza y controla el contenido de tus cajas, de forma rapida y simple.</p>
            <div className='flex justify-center mt-8 md:justify-start'><CtaButton></CtaButton></div>
          </div>
          <div><img src={cajas} alt="Cajas" /></div>
        </div>
      </section>
      <About></About>
      <CallToAction showBoxForm={setOpen}></CallToAction>
      <Footer></Footer>
      <BoxFormPopup open={open} setOpen={setOpen} />
    </div>
  );
};

export default Home;