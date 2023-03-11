import { useState } from "react";

const NewBoxForm = () => {

  const initialState = {
    nombre: '',
    color: '',
    contenido: '',
    items: 0,
    media: '',
    ubicacion: '',
    peso: 0,
    propietario: '',
  }

  const [data, setData] = useState(initialState)

  const handleOnChange = e => {
    setData({...data, nombre: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault();
  }

  return (

    <form>
      {/* nombre de la caja */}
      <div >
        <label htmlFor="nombre" >Nombre de la caja</label>
        <input onChange={handleOnChange} name="nombre" id="nombre" type="text"/>
        
      </div>

      {/* color de la caja */}
      <div >
        <label htmlFor="color">Color de la caja</label>
        <input onChange={handleOnChange} name="color" id="color" type="text" />
        
      </div>

       {/* Contenido */}
      <div>
        <label htmlFor="contenido">Contenido de la caja</label>
        <input onChange={handleOnChange} name="contenido" type="text" id="contenido" />
        
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
        <input onChange={handleOnChange} name="ubicacion" type="text" />
        
      </div>

      {/* peso */}
      <div>
        <label htmlFor="peso">Peso (opcional)</label>
        <input onChange={handleOnChange} name="peso" type="number" />
        
      </div>

      {/* propietario */}
      <div>
        <label htmlFor="propietario"></label>
        <input onChange={handleOnChange} name="propietario" type="text" />
        
      </div>

      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  )
}
export default NewBoxForm