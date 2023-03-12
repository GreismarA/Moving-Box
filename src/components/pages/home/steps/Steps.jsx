import '../steps/Steps.css'

function Steps() {
  return (
    <section id='comoEmpezar' className="pt-8 pb-20">
      <div className="flex flex-col items-center px-8 gap-12">
        <h2 className="subtitle text-white text-2xl font-semibold md:text-4xl">¿Cómo empezar?</h2>
        <ol className="text-black flex flex-col gap-6 mx-2 list-decimal list-inside md:mx-6">
          <li className='li py-2 px-6 rounded'>Ingresa a la sección crear caja.</li>
          <li className='li py-2 px-6 rounded'>Llena en el formulario con los datos solicitados del contenido de tus cajas.</li>
          <li className='li py-2 px-6 rounded'>Haz click en el botón Crear caja para generar el codigo QR</li>
          <li className='li py-2 px-6 rounded'>Imprime el codigo QR y etiqueta cada caja</li>
          <li className='li py-2 px-6 rounded'>Escanea tu código, y listo ya tendrás organizada tu mudanza y el contenido de tus cajas</li>
        </ol>
      </div>
    </section>
  );
}

export default Steps;