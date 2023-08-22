import cajas from '../resources/img/cajas.png';
import CtaButton from '../components/CtaButton';
import Steps from '../components/Steps';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import About from '../components/About';
import '../resources/styles/home.css';

function Home() {
  return (
    <div className='bg-black'>
      <Nav></Nav>
      <section id='inicio' className='py-30 md:py-36'>
        <div className='flex flex-col justify-center items-center md:flex-row'>
          <div className='px-8 text-center md:w-4/6 md:text-left lg:w6/12 xl:w-6/12 mt-16'>
            <h1 className='title pb-8 text-4xl md:text-4xl lg:text-5xl'>Servicio de control del contenido de tus cajas</h1>
            <p className='text-lg text-white sm:text-xl md:leading-10'>Organiza tu mudanza y controla el contenido de tus cajas, de forma rapida y simple.</p>
            <div className='flex justify-center mt-8 md:justify-start'><CtaButton></CtaButton></div>
          </div>
          <div><img src={cajas} alt="Cajas" /></div>
        </div>
      </section>
      <About></About>
      <Steps></Steps>
      <CallToAction></CallToAction>
      <Footer></Footer>
    </div>
  );
};

export default Home;