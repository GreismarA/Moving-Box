import "../NewBoxForm/NewBoxForm.css"
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";

import { db } from "../../firebase/firebase"
import QrGenerator from "../QrGenerator"

const NewBoxForm = () => {

  const initialState = {
    nombre: '',
    color: '',
    contenido: [],
    items: 0,
    media: '',
    ubicacion: '',
    peso: 0,
    propietario: '',
    tipoDeContenido: 'resistente',
    nota: '',
  }

  const [data, setData] = useState(initialState)
  const [contenido, setContenido] = useState("")

  const handleOnChange = e => {
    const { name, value } = e.target;
    setData({...data, [name]: value})
  }

  const handleOnChangeAdd = e => {

    setData({...data, contenido:[...data.contenido, contenido]})
    setContenido('')
  };

  const handleDelete = (el) => {
    setData({...data, contenido:[...data.contenido.filter(item => item !== el)]})
  }

  const handleOnContenidoChange = e => {
    const { value } = e.target
    setContenido(value)
  }

  const handleEnter = e => {
    e.key === "Enter" ? handleOnChangeAdd() : ''
  }

  const handleSubmit = async e => {
    e.preventDefault();
    if (e.keyCode === 13) return

    console.log(e)

    try {
      await addDoc(collection(db, 'boxes'), {...data})
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
    
    
     <div className="bg-white p-20 " > 
     <h2 className="font-[900] text-[40px] mb-4 text-black">Formulario</h2>

      <div className="bg-black w-full py-8 px-4   ">

      <form className="lg:grid lg:grid-cols-2 gap-20">
      {/* nombre de la caja */}
      <div>
        {/* nombre de la caja */}
      <div className="flex flex-col mb-4  ">
      <label class="" for="nombre">Nombre</label>
        <input className=" border-b border-white bg-black caret-white text-white border-solid outline-none p-[4px]"
          onChange={handleOnChange}
          name="nombre"
          id="nombre"
          type="text"
        />
      </div>

      {/* color de la caja */}
      <div className="flex flex-col mb-4  ">
        <label htmlFor="color">Color de la caja</label>
        <input className="  border-b border-white bg-black caret-white text-white border-solid outline-none p-[4px]" onChange={handleOnChange} name="color" id="color" type="text" />
      </div>

      {/* Contenido */}
      <div>
        <div className="flex flex-col gap-y-5c mb-4 " >
          
          <label className="flex" htmlFor="">Contenido<p className="ml-4 text-[13px]">(Agregar un items a la vez)</p></label>
          <input className=" mb-4 border-b border-white bg-black caret-white text-white border-solid outline-none p-[4px]"
            type="text"
            name="contenido"
            id="contenido"
            onChange={handleOnContenidoChange}
            value={contenido}
            onKeyUp={handleEnter}
          />
          <button
            type="button"
            className="py-3 px-8 rounded font-medium bg-[#e2e756] hover:bg-[#f5f89f]"
            onClick={handleOnChangeAdd}
          >
            agregar
          </button>
        </div>
      </div>

      {/* numero de items */}
      <div className="flex flex-col mb-4  ">
        <label htmlFor="items">Numero de items que llevas en tu caja</label>
        <input  className=" border-b border-white bg-black caret-white text-white border-solid outline-none p-[4px]" onChange={handleOnChange} name="items" id="items" type="text" />
      </div>

      {/* fotos */}
      <div className="flex flex-col gap-y-2">
        <label htmlFor="fotos">fotos, videos</label>
        <input className="  bg-black caret-white text-white border-solid outline-none p-[4px]"  onChange={handleOnChange} name="media" type="file" id="fotos" />
      </div>

      {/* ubicacion final */}
      <div className="flex flex-col mb-4  ">
        <label htmlFor="ubicacion">Ubicacion final</label>
        <input className="  border-b border-white bg-black caret-white text-white border-solid outline-none p-[4px]"
          onChange={handleOnChange}
          name="ubicacion"
          type="text"
          id="ubicacion"
        />
      </div>
      </div>

      <div>
        {/* peso */}
      <div className="flex flex-col mb-4 ">
        <label htmlFor="peso">Peso (opcional)</label>
        <input className="  border-b border-white bg-black caret-white text-white border-solid outline-none p-[4px]" onChange={handleOnChange} name="peso" type="number" id="peso" />
      </div>

      {/* propietario */}
      <div className="flex flex-col mb-4 ">
        <label htmlFor="propietario">Propietario</label>
        <input className="  border-b border-white bg-black caret-white text-white border-solid outline-none p-[4px]"
          onChange={handleOnChange}
          name="propietario"
          type="text"
          id="propietario"
        />
      </div>

      {/* tipo de contenido */}
      <div className="flex flex-col mb-4 ">
        <label htmlFor="tipoDeContenido">Tipo de contenido</label>
        <select
          onChange={handleOnChange}
          name="tipoDeContenido"
          id="tipoDeContenido"
        >
          <option value="fragil">Fragil</option>
          <option value="noTanFragil">No tan fragil</option>
          <option value="resistente">Resistente</option>
          <option value="resistente">Muy Resistente</option>
        </select>

        {/* <input onChange={handleOnChange} name="tipoDeContenido" type="text" id="tipoDeContenido" /> */}
      </div>

      {/* nota */}
      <div className="flex flex-col mb-4 ">
        <label htmlFor="nota">nota</label>
        <input className="  border-b border-white bg-black caret-white text-white border-solid outline-none p-[4px]" onChange={handleOnChange} name="nota" type="text" id="nota" />
      </div>

      <button className="py-3 px-8 rounded font-medium bg-[#e2e756] hover:bg-[#f5f89f]" type="submit" onClick={handleSubmit}>
        Submit
      </button>
      <div className="mt-10">
        {data.contenido.map((el, i) => (
          <div key={i} className="flex min-w-[300px] justify-between">
            <p>{el}</p>
            <button
              className="py-3 px-8 rounded font-medium bg-[#e2e756] hover:bg-[#f5f89f]"
              type="button"
              onClick={() => handleDelete(el)}
            >
              delete
            </button>
          </div>
        ))}
          </div>
        </div>
      
    </form>
    </div>
    </div>

    {/* <QrGenerator></QrGenerator> */}

    </>
  );

        }
  
export default NewBoxForm ;