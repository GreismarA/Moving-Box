import ChipList from './ChipList';

export default function BoxFormStep2({ register, chipData, setChipData, errors }) {
  const handleChipData = (e) => {
    e.preventDefault();
    setChipData([...chipData, { 
        key: chipData.length > 0 ? chipData[chipData.length - 1].key + 1 : 0,
        label: e.target.value 
      }
    ])
    return e.target.value = ''
  }
  
  return (
    <>
      <h1 className='mb-4 text-3xl font-medium text-[#e2e756]'>¿Qué contiene su caja?</h1>
          
      <label htmlFor="contentInput" className={`block font-medium mb-[-2px] ${errors.contentInput ? 'errorLabel' : 'normalLabel'}`}>Contenido <span className=' text-[10px]'> (agregar un contenido a la vez)</span></label>
      <input id='contentInput' className={`bg-transparent border-b border-solid rounded-none focus:outline-none focus:border-b-[1px] focus:border-b-[solid] placeholder-shown:text-ellipsis ${errors.contentInput ? 'errorInput' : 'normalInput'}`} type="text" {...register('contentInput')} onKeyDown={(e) => {(e.code === 'Enter' || e.code === 'NumpadEnter') && e.target.value ? handleChipData(e) : null}} placeholder='Zapatos / Ropa del bebé / Herramientas / Materiales / Juguetes / Etc...' title='Agrega de manera descriptiva los tipos de objetos que van dentro de la caja. Presiona "Enter" para agregar el contenido.' />
      <ChipList chipData={chipData} setChipData={setChipData} />
    
      <label htmlFor="typeOfContent" className={`block font-medium mb-[-2px] ${errors.typeOfContent ? 'errorLabel' : 'normalLabel'}`}>Tipo de contenido</label>
      <select id='typeOfContent' className={`bg-transparent border-b border-solid rounded-none mb-6 focus-visible:outline-none ${errors.typeOfContent ? 'errorInput' : 'normalInput'}`} {...register('typeOfContent', { required: { value: true, message: 'Por favor, selecciona un tipo de contenido.' } })} title='Nivel de fragilidad del contenido.'>
        <option className='text-white bg-black cursor-pointer ' value="">Seleccionar</option>
        <option className='text-white bg-black cursor-pointer ' value="fragil">Fragil</option>
        <option className='text-white bg-black cursor-pointer ' value="noTanFragil">No tan fragil</option>
        <option className='text-white bg-black cursor-pointer ' value="resistente">Resistente</option>
        <option className='text-white bg-black cursor-pointer ' value="resistente">Muy Resistente</option>
      </select>
      
      <div className='flex justify-between w-full'>
        <div className='w-1/2'>
          <label htmlFor="itemsAmount" className={`block font-medium mb-[-2px] ${errors.itemsAmount ? 'errorLabel' : 'normalLabel'}`}>Nro de items</label>
          <input id='itemsAmount' className={`bg-transparent w-2/3 border-b border-solid rounded-none focus:outline-none focus:border-b-[1px] focus:border-b-[solid] mb-6 appearance-none ${errors.itemsAmount ? 'errorInput' : 'normalInput'}`} type="number" {...register('itemsAmount', { required: { value: true, message: 'Por favor, introduzca el número de items que contiene su caja.' }, min: {value: 0, message: 'Por favor, introduzca un número entero positivo.'}})} placeholder='Número' title='Número de objetos que contiene la caja.'/>
        </div> 
        <div className='w-1/2'>
          <label htmlFor="weight" className={`block font-medium mb-[-2px] ${errors.weight ? 'errorLabel' : 'normalLabel'}`}>Peso <span className={`text-[10px] ${errors.weight? 'errorLabel' : 'normalLabel'}`}>(opcional)</span></label>
          <input id='weight' className={`bg-transparent w-2/3 border-b border-solid rounded-none focus:outline-none focus:border-b-[1px] focus:border-b-[solid] mb-6 appearance-none ${errors.weight ? 'errorInput' : 'normalInput'}`} placeholder='Número' type="number" {...register('weight', { pattern: { value: /^[\.\d+]+?$/, message: 'Por favor, introduzca un número entero positivo.' }, min: {value: 0, message: 'Por favor, introduzca un número entero positivo.'} })}/>
        </div>
      </div>
    </>
  );
}