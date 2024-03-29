import "../resources/styles/about.css"

function About(){
  return(
    <section id="nosotros">
      <div className="img">
        <div className="fondo">
          <div className="container mx-auto">
            <h2 className=" text-[35px] font-bold text-center lg:mr-[700px] py-2">¿Quienes somos?</h2>
            <p className="p-10  lg:pr-[750px] text-[17px] font-semibold">Nuestro equipo de profesionales altamente capacitados se asegura de que cada artículo sea cuidadosamente embalado, etiquetado y registrado. <br/><br/>Esto nos permite tener un control preciso de lo que hay en cada caja, lo que hace que el proceso de mudanza sea más rápido y eficiente, y asegura que nada se pierda o se dañe durante el traslado.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;