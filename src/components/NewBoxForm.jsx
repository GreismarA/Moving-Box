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
    tipoDeContenido: 'resistente',
    nota: '',
  }

  const [data, setData] = useState(initialState)





  const handleOnChange = e => {
    const { name, value } = e.target;
    setData({...data, [name]: value})
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
  
    } catch (error) {
      
    }
  }

  return (

    <form>
      {/* nombre de la caja */}
      <div >
        <label htmlFor="nombre" >Descripcion</label>
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
        <input onChange={handleOnChange} name="ubicacion" type="text" id="ubicacion" />
        
      </div>

      {/* peso */}
      <div>
        <label htmlFor="peso">Peso (opcional)</label>
        <input onChange={handleOnChange} name="peso" type="number" id="peso" />
        
      </div>

      {/* propietario */}
      <div>
        <label htmlFor="propietario">Propietario</label>
        <input onChange={handleOnChange} name="propietario" type="text" id="propietario" />
      </div>

      {/* tipo de contenido */}
      <div>
        <label htmlFor="tipoDeContenido" >Tipo de contenido</label>
        <select onChange={handleOnChange} name="tipoDeContenido" id="tipoDeContenido">
          <option value="resistente">Resistente</option>
          <option value="fragil">Fragil</option>
          <option value="noTanFragil">No tan fragil</option>
        </select>

        {/* <input onChange={handleOnChange} name="tipoDeContenido" type="text" id="tipoDeContenido" /> */}
      </div>

      {/* nota */}
      <div>
        <label htmlFor="nota">nota</label>
        <input onChange={handleOnChange} name="nota" type="text" id="nota" />
      </div>

      <button type="submit" onClick={handleSubmit} >Submit</button>
    </form>
  )
}
export default NewBoxForm