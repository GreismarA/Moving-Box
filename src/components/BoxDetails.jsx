import { collection, doc, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import "../resources/boxDetails.css"


function BoxDetails() {

    const { boxId } = useParams()
    const [boxData, setBoxData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const documentQuery = query(
          collection(db, "boxes"),
          where("boxId", "==", boxId)
        );
        getBox(documentQuery)
    }, [])
    
        const getBox = async (documentQuery) => {
            try {
                onSnapshot((documentQuery), querySnapshot => {
                    const docs = [];
                    querySnapshot.forEach(doc => {
                        docs.push({...doc.data(), id:doc.id})
                    })
                    setBoxData(docs)
                    setIsLoading(false)
                })
            } catch (error) {
                console.error(error)
            }
        }

        console.log(boxData)



    return (
<>
        {isLoading
            ? <p className="text-white">cargando...</p>
            :
            boxData.map( el => (
            <section className="flex flex-col items-center lg:h-screen" key={el.id}>
            <div className="containerBoxDetails px-4 mt-8 pt-4 pb-8 lg:px-8">
                <h1 className="text-center text-2xl md:text-4xl font-semibold">{el.nombre}</h1>
                <ol className="md:py-8 flex flex-col gap-2">
                    <li className="flex flex-col md:flex-row"><p className="font-semibold">Nombre:</p><p>{el.nombre}</p></li>
                    <li className="flex flex-col md:flex-row"><p className="font-semibold">Color:</p><p>{el.color}</p></li>
                    <li className="flex flex-col md:flex-row"><p className="font-semibold">Contentido:</p><ul>{el.contenido.map((el, i) => <li key={i}>{el}</li>)}</ul></li>
                    <li className="flex flex-col md:flex-row"><p className="font-semibold">Items:</p><p>{el.items}</p></li>
                    <li className="flex flex-col md:flex-row"><p className="font-semibold">Media:</p><p>Value</p></li>
                </ol>
            </div>
            <div className="flex justify-center">
                <button type='text' className="rounded-btn h-24 w-24 text-5xl">.</button>
            </div>
            <div className="containerBoxDetails px-4 py-8 lg:pt-4 lg:px-8">
                <ol className="md:py-8 flex flex-col gap-2">
                    <li className="flex flex-col md:flex-row"><p className="font-semibold">Ubicación:</p><p>{el.ubicacion}</p></li>
                    <li className="flex flex-col md:flex-row"><p className="font-semibold">Peso:</p><p>{el.peso}</p></li>
                    <li className="flex flex-col md:flex-row"><p className="font-semibold">Propietario:</p><p>{el.propietario}</p></li>
                    <li className="flex flex-col md:flex-row"><p className="font-semibold">Tipo de contenido:</p><p>{el.tipoDeContenido}</p></li>
                    <li className="flex flex-col md:flex-row"><p className="font-semibold">Nota:</p><p>{el.nota}</p></li>
                </ol>
                <hr />
                <div className="grid grid-cols-3 md:grid-cols-5 gap-4 py-4 text-center text-white text-xs">
                    <div className="rounded-md p-4 md:p-4 md:py-8 bg-black">image</div>
                    <div className="rounded-md p-4 md:p-4 md:py-8 bg-black">image</div>
                    <div className="rounded-md p-4 md:p-4 md:py-8 bg-black">image</div>
                    <div className="rounded-md p-4 md:p-4 md:py-8 bg-black">image</div>
                    <div className="rounded-md p-4 md:p-4 md:py-8 bg-black">image</div>
                    <div className="rounded-md p-4 md:p-4 md:py-8 bg-black">image</div>
                    <div className="rounded-md p-4 md:p-4 md:py-8 bg-black">image</div>
                    <div className="rounded-md p-4 md:p-4 md:py-8 bg-black">image</div>
                    <div className="rounded-md p-4 md:p-4 md:py-8 bg-black">image</div>
                    <div className="rounded-md p-4 md:p-4 md:py-8 bg-black">image</div>
                </div>
            </div>
        </section>
        ))
            
        }

        
            </>
    );
};

export default BoxDetails;