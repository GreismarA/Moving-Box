import { useFormContext } from 'react-hook-form';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function WeightInput() {
  const { register, setValue, formState: { errors } } = useFormContext();
  
  const modifyItemsAmount = (operation) => {
    const weight = document.getElementById('weight');
    let currentValue = weight.value;
  
    if (!currentValue && operation === 'increase') {
      weight.value = '0.5';
      return;
    }
  
    const intValue = parseFloat(currentValue);
  
    if (isNaN(intValue)) {
      console.error('El valor actual no es un número válido');
      return;
    }
  
    if (operation === 'increase') {
      const newValue = intValue + 0.5;
      
      setValue('weight', newValue.toString(), { shouldValidate: true, shouldDirty: true });
      
    } else if (operation === 'decrease') {
      if (intValue > 1) {
        const newValue = intValue - 1;
        setValue('weight', newValue.toString(), { shouldValidate: true, shouldDirty: true });
      }
    }
  }; 
  
  function repeat(func) {
    func('increase');  
    func('increase');  
  }
  
  return (
    <div className="relative flex items-center justify-start gap-1 mt-4 md:gap-2 ">
      <button className={' w-6 h-6 text-white bg-black active:bg-[rgba(255,255,255,0.2)] md:hover:bg-[rgba(255,255,255,0.2)] rounded-full text-center md:w-8 md:h-8  '} type='button' onClick={() => {modifyItemsAmount('decrease')}} ><RemoveIcon fontSize={screen.width > 768 ? 'medium' : 'small'} className='m-auto' /></button>
      <div className='relative w-2/3 max-w-[110px]'>
        <input id='weight' className={`bg-transparent w-full pr-7 pl-1 text-center border-b border-solid rounded-none focus:outline-none focus:border-b-[1px] focus:border-b-[solid] appearance-none ${errors.weight ? 'errorInput' : 'normalInput'}`} placeholder='Número' type="number" {...register('weight', { pattern: { value: /^[\.\d+]+?$/, message: 'Por favor, introduzca un número entero positivo.' }, min: {value: 0, message: 'Por favor, introduzca un número entero positivo.'} })} />
        <span id='weightSpan' className={'text-[#505050cc] absolute right-[0px] bottom-[1px] bg-black z-10 px-1'} >Kg</span>
      </div>
      <button className={'w-6 h-6 text-white bg-black active:bg-[rgba(255,255,255,0.2)] md:hover:bg-[rgba(255,255,255,0.2)] rounded-full text-center md:w-8 md:h-8  '} type='button' onClick={() => {repeat(modifyItemsAmount)}}><AddIcon fontSize={screen.width > 768 ? 'medium' : 'small'} className='m-auto' /></button>
    </div>
  )
};