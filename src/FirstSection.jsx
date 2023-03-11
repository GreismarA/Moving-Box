import './FirstSection.css'
import cajas from './img/cajas.png'

function FirstSection() {

  return (
    <section className='flex flex-col justify-center items-center md:flex-row'>
      <div className='px-8 text-center md:w-3/6 md:text-left lg:w6/12'>
        <h1 className='title pb-8 text-4xl md:text-4xl lg:text-5xl'>Servicio de control del contenido de tus cajas</h1>
        <p className='hidden sm:block text-white text-xl leading-10'>Crea tu caja de mudanza y controla el contenido de la misma, de forma rapida y simple.</p>
      </div>
      <img src={cajas} alt="Cajas"/>
    </section>
  )
}

export default FirstSection;
