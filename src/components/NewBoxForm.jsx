import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase/firebase";

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

  const handleOnChange = e => {
    const { name, value } = e.target;
    setData({...data, [name]: value})
  }

  const handleOnChangeCheck = e => {
    const { checked, value } = e.target;
    if (checked) {
      setData({
        ...data,
        contenido: [...data.contenido, value]
      });
    } else {
      setData({
        ...data,
        contenido: data.contenido.filter((checkbox) => checkbox !== value),
      });
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'boxes'), {...data})
    } catch (error) {
      console.error(error)
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
        <div>
          <label htmlFor="ropa">Ropa</label>
          <input type="checkbox" name="ropa" id="ropa" value="Ropa" onChange={handleOnChangeCheck} />
        </div>
        <div>
          <label htmlFor="calzado">Calzado</label>
          <input type="checkbox" name="calzado" id="calzado" value="Calzado" onChange={handleOnChangeCheck} />
        </div>
        <div>
          <label htmlFor="joyas">Joyas</label>
          <input type="checkbox" name="joyas" id="joyas" value="Joyas" onChange={handleOnChangeCheck} />
        </div>
        <div>
          <label htmlFor="electrodomesticos">Electrodomesticos</label>
          <input type="checkbox" name="electrodomesticos" id="electrodomesticos" value="Electrodomesticos" onChange={handleOnChangeCheck} />
        </div>
        <div>
          <label htmlFor="utenciliosDeBano">Utencilios de baño</label>
          <input type="checkbox" name="utencilios-de-bano" id="utenciliosDeBano" value="Utencilios de baño" onChange={handleOnChangeCheck} />
        </div>
        <div>
          <label htmlFor="utencilios-de-limpieza">Utencilios de limpieza</label>
          <input type="checkbox" name="utencilios-de-limpieza" id="utenciliosDeBimpieza" value="Utencilios de limpieza" onChange={handleOnChangeCheck} />
        </div>
        <div>
          <label htmlFor="utenciliosDeCocina">Utencilios de cocina</label>
          <input type="checkbox" name="utenciliosDeCocina" id="utenciliosDeCocina" value="Utencilios de cocina" onChange={handleOnChangeCheck} />
        </div>
        <div>
          <label htmlFor="herramientas">Herramientas</label>
          <input type="checkbox" name="herramientas" id="herramientas" value="Herramientas" onChange={handleOnChangeCheck} />
        </div>
        <div>
          <label htmlFor="comida">Comida</label>
          <input type="checkbox" name="comida" id="comida" value="Comida" onChange={handleOnChangeCheck} />
        </div>
        <div>
          <label htmlFor="juguetes">Juguetes</label>
          <input type="checkbox" name="juguetes" id="juguetes" value="Juguetes" onChange={handleOnChangeCheck} />
        </div>
        <div>
          <label htmlFor="">Juguetes</label>
          <input type="checkbox" name="" id="" value="Juguetes" onChange={handleOnChangeCheck} />
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