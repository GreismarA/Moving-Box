import { Link } from "react-router-dom";
import img from "../assets/caja.png";

function Boton (){
    return(
       <>
            <section id="crear" className=" lg:grid grid-cols-[32.2%_68%] h-[300px] ">

                <div className="bg-black">
                    <img className="mb-[-100px] lg:mt-[-110px]" src={img} alt=""/>
                </div>
                <div className="flex flex-col text-center text-[20px] gap-10 bg-[#fff]">

                    <div className="  mt-[50px] mx-8  font-bold px-4
                     rounded drop-shadow-[10px_10px_5px_rgba(0,0,0,0.25)]">
                        <p  className="text-black p-2 mb-10">Moving Box es una aplicación que te permitirá llevar el registro y control de las cajas de tu mudanza, para que no pierdas detalle del contenido de las mismas. Podrás crear cuantas cajas desees, y mediante un codigo QR tendrás toda la información de tu mudanza. </p>

                    </div>

                    <div className="flex justify-center items-end mb-[50px] border-red-500 mt-[-70px] z-10 ">
                        <Link className="py-3 px-8 rounded font-medium bg-[#e2e756] hover:bg-[#f5f89f]">Crear caja</Link>

                    </div>




                    </div>

            </section>
       </>
    )
}

export { Boton };