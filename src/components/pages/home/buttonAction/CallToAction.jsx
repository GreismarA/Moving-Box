import { useNavigate } from "react-router";
import img from "../../../../img/cajas2.png";
import './CallToAction.css'

function CallToAction() {

    const navigate = useNavigate()
    
    const handleClickEmpzarBtn = () => {
        navigate('/box')
    }

    return (
        <>
            <section id="crear" className=" lg:grid grid-cols-[32%_68%]">
                <div className="bg-black">
                    <img className=" lg:mt-[100px] mb-[-100px]  box-2" src={img} alt="" />
                </div>
                <div className="flex flex-col text-center text-[20px] gap-10 bg-[#fff]">
                    <div className="  mt-[50px] mx-8 pt-4 font-bold px-4
                     rounded drop-shadow-[10px_10px_5px_rgba(0,0,0,0.25)]">
                        <p className="text-black p-2 mb-10">Moving Box es una aplicación que te permitirá llevar el registro y control de las cajas de tu mudanza, para que no pierdas detalle del contenido de las mismas. Podrás crear cuantas cajas desees, y mediante un codigo QR tendrás toda la información de tu mudanza. </p>
                    </div>
                    <div className="flex justify-center items-end mb-[50px] border-red-500">
                        <button
                            className="py-3 px-8 rounded font-medium bg-[#e2e756] hover:bg-[#f5f89f]"
                            onClick={handleClickEmpzarBtn}
                        >
                            Crear caja
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CallToAction;