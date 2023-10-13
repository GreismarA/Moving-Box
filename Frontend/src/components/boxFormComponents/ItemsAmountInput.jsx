import { useFormContext } from 'react-hook-form';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function ItemsAmountInput(){
  const { register, setValue, formState: { errors } } = useFormContext();
  
  const modifyItemsAmount = (operation) => {
    const itemsAmount = document.getElementById('itemsAmount');
    let currentValue = itemsAmount.value;
  
    if (!currentValue && operation === 'increase') {
      itemsAmount.value = '0.5';
      return;
    }
  
    const intValue = parseFloat(currentValue);
  
    if (isNaN(intValue)) {
      console.error('El valor actual no es un número válido');
      return;
    }
  
    if (operation === 'increase') {
      const newValue = intValue + 0.5;
      
      setValue('itemsAmount', newValue.toString(), { shouldValidate: true, shouldDirty: true });
      
    } else if (operation === 'decrease') {
      if (intValue > 1) {
        const newValue = intValue - 1;
        setValue('itemsAmount', newValue.toString(), { shouldValidate: true, shouldDirty: true });
      }
    }
  }; 
  
  function repeat(func) {
    func('increase');  
    func('increase');  
  }
  
  return (
    <div className={'flex items-center justify-start gap-1 mt-4 md:gap-2'}>
      <button className={' w-6 h-6 text-white bg-black active:bg-[rgba(255,255,255,0.2)] md:hover:bg-[rgba(255,255,255,0.2)] rounded-full text-center md:w-8 md:h-8  '} type='button' onClick={() => {modifyItemsAmount('decrease')}} ><RemoveIcon fontSize={screen.width > 768 ? 'medium' : 'small'} className='m-auto' /></button>
      <input id='itemsAmount' className={`bg-transparent w-1/3 text-center border-b border-solid rounded-none focus:outline-none focus:border-b-[1px] focus:border-b-[solid] appearance-none ${errors.itemsAmount ? 'errorInput' : 'normalInput'}`} {...register('itemsAmount', { required: { value: true, message: 'Por favor, introduzca el número de items que contiene su caja.' }, min: {value: 0, message: 'Por favor, introduzca un número entero positivo.'}})} type="number" placeholder='Número' title='Número de objetos que contiene la caja.' />
      <button className={'w-6 h-6 text-white bg-black active:bg-[rgba(255,255,255,0.2)] md:hover:bg-[rgba(255,255,255,0.2)] rounded-full text-center md:w-8 md:h-8  '} type='button' onClick={() => {repeat(modifyItemsAmount)}}><AddIcon fontSize={screen.width > 768 ? 'medium' : 'small'} className='m-auto' /></button>
    </div>
  )
};