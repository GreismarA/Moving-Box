import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase/firebase";
import QrGenerator from "./QrGenerator"

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
    <form>
      {/* nombre de la caja */}
      <div>
        <label htmlFor="nombre">Nombre</label>
        <input
          onChange={handleOnChange}
          name="nombre"
          id="nombre"
          type="text"
        />
      </div>

      {/* color de la caja */}
      <div>
        <label htmlFor="color">Color de la caja</label>
        <input onChange={handleOnChange} name="color" id="color" type="text" />
      </div>

      {/* Contenido */}
      <div>
        <div>
          
          <label htmlFor="">Contenido</label>
          <input
            type="text"
            name="contenido"
            id="contenido"
            onChange={handleOnContenidoChange}
            value={contenido}
            onKeyUp={handleEnter}
          />
          <button
            type="button"
            className="bg-amber-700 text-white"
            onClick={handleOnChangeAdd}
          >
            agregar
          </button>
        </div>
      </div>

      {/* numero de items */}
      <div>
        <label htmlFor="items">Numero de items que llevas en tu caja</label>
        <input onChange={handleOnChange} name="items" id="items" type="text" />
      </div>

      {/* fotos */}
      <div>
        <label htmlFor="fotos">fotos, videos</label>
        <input onChange={handleOnChange} name="media" type="file" id="fotos" />
      </div>

      {/* ubicacion final */}
      <div>
        <label htmlFor="ubicacion">Ubicacion final</label>
        <input
          onChange={handleOnChange}
          name="ubicacion"
          type="text"
          id="ubicacion"
        />
      </div>

      {/* peso */}
      <div>
        <label htmlFor="peso">Peso (opcional)</label>
        <input onChange={handleOnChange} name="peso" type="number" id="peso" />
      </div>

      {/* propietario */}
      <div>
        <label htmlFor="propietario">Propietario</label>
        <input
          onChange={handleOnChange}
          name="propietario"
          type="text"
          id="propietario"
        />
      </div>

      {/* tipo de contenido */}
      <div>
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
      <div>
        <label htmlFor="nota">nota</label>
        <input onChange={handleOnChange} name="nota" type="text" id="nota" />
      </div>

      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      <div className="mt-10">
        {data.contenido.map((el, i) => (
          <div key={i} className="flex min-w-[300px] justify-between">
            <p>{el}</p>
            <button
              className="text-red-600"
              type="button"
              onClick={() => handleDelete(el)}
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </form>
    <QrGenerator></QrGenerator>
    </>
  );
}
export default NewBoxForm