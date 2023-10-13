import { useFormContext } from "react-hook-form";

export default function BoxFormStep1() {
  const { register, formState: {errors} } = useFormContext();

  return (
    <>
      <h1 className='mb-4 text-3xl font-medium text-[#e2e756]'>Información Básica</h1>
          
      <label htmlFor="name" className={`block font-medium mb-[-2px] ${errors.name ? 'errorLabel' : 'normalLabel'}`}>Nombre</label>
      <input id='name' className={`bg-transparent border-b border-solid rounded-none focus:outline-none focus:border-b-[1px] focus:border-b-[solid] mb-6 ${errors.name ? 'errorInput' : 'normalInput'}`} type="text" {...register('name', { required: { value: true, message: 'Por favor introduzca el nombre de la caja.' }, pattern: { value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9 ]{1,32}$/, message: 'El nombre solo puede contener letras, números enteros y un máximo de 32 caracteres.' }})} placeholder='Nombre de caja' />
    
      <label htmlFor="owner" className={`block font-medium mb-[-2px] ${errors.owner ? 'errorLabel' : 'normalLabel'}`}>Propietario</label>
      <input id='owner' className={`bg-transparent border-b border-solid rounded-none focus:outline-none focus:border-b-[1px] focus:border-b-[solid] mb-6 ${errors.owner ? 'errorInput' : 'normalInput'}`} type="text" {...register('owner', { required: { value: true, message: 'Por favor introduzca el nombre del propietario.' }, pattern: { value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9 ]{1,32}$/, message: 'El nombre del propietario solo puede contener letras, números enteros y un máximo de 32 caracteres.' }})} placeholder='Nombre del propietario' title='Nombre del dueño del contenido de la caja.' />
      
      <label htmlFor="finalLocation" className={`block font-medium mb-[-2px] ${errors.finalLocation ? 'errorLabel' : 'normalLabel'}`}>Destino</label>
      <input id='finalLocation' className= {`bg-transparent border-b border-solid rounded-none focus:outline-none focus:border-b-[1px] focus:border-b-[solid] mb-6 placeholder-shown:text-ellipsis ${errors.finalLocation ? 'errorInput' : 'normalInput'}`} placeholder='Sótano / Cuarto principal / Cocina / Oficina / Garaje / Sala/ Segundo Piso / Baño Principal / Etc...' type="text" {...register('finalLocation', { required: { value: true, message: 'Por favor introduzca el destino.' }, pattern: { value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9-/(),\. ]{1,50}$/, message: 'La ubicación solo puede contener letras y los siguientes simbolos: "-/(),." y un máximo de 50 caracteres.'}})} title="Sitio donde ira la caja en el destino, ejemplo: 2do piso, cuarto principal." />
      
      <label htmlFor="note" className='block text-white font-medium mb-[-2px]'>Nota <span className=' text-[10px]'> (opcional)</span></label>
      <textarea id='note' className='bg-transparent border p-1 border-solid border-[#373737] rounded-[4px] text-white focus:outline-none focus:border-[1px] focus:border-[solid] focus:border-[#e2e756] placeholder:text-[#505050cc] mb-6 resize-none placeholder:text-center placeholder:text-base placeholder:leading-[3rem] ' placeholder='Alguna nota...' type="text" rows={2} {...register('note')} />
    </>
  );
}