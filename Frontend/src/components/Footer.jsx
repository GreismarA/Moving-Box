import logo from '.././resources/img/logo 2.png'
import '.././resources/styles/Footer.css'

function Footer() {
  return (
    <footer className='flex flex-col items-center gap-6 py-12 text-white lg:pt-24'>
      <div className='flex flex-col items-center gap-6 mx-6 md:flex-row lg:w-full lg:justify-between'>
        <div className='md:w-1/5'>
          <img src={logo} alt="" className='w-24 md:m-auto'/>
        </div>
        <div className='text-sm text-center md:w-7/12'>
          <p className='pb-4 font-semibold'>Gestión y Control</p>
          <p>Te acompañamos en la organización de tu mudanza, y te facilitamos un mejor control de la misma.</p>
        </div>
        <div className='flex flex-col items-center gap-2 text-sm md:items-start md:w-1/5'>
          <a href="#inicio" className='font-semibold'>Inicio</a>
          <a href="#aboutUs" className='font-semibold'>Sobre Nosotros</a>
          <a href="crearCaja" className='font-semibold'>Crear Caja</a>
          <a href="#comoEmpezar" className='font-semibold'>¿Como Empezar?</a>
        </div>
      </div>
      <p className='pt-8 text-sm'>© Moving Box 2023</p>
    </footer>
  );
}

export default Footer;