import { useState, useEffect } from 'react';
import { useForm }  from 'react-hook-form';
import BoxFormStep1 from './BoxFormStep1';
import BoxFormStep2 from './BoxFormStep2';
import BoxFormStep3 from './BoxFormStep3';
import { showPopupError } from '../../Libs/Animations/modalErrorMsg';
import '../../resources/styles/popupErrorAnimation.css'

export default function BoxForm({ step, nextStep }) {
  const { register, formState: { errors, dirtyFields }, handleSubmit, setError, getValues, watch } = useForm({ mode: "onChange" });
  const [chipData, setChipData] = useState([]);
  const [imgList, setImgList] = useState([]);
  const [isDisable, setIsDisable] = useState(true);
  const StepOneErrorMessages = errors.name?.message || errors.owner?.message || errors.finalLocation?.message || errors.note?.message;
  const StepTwoErrorMessages = errors.contentInput?.message || errors.typeOfContent?.message || errors.itemsAmount?.message || errors.weight?.message;
  const StepThreeErrorMessages = errors.photos?.message;
  const patternsErrors = errors.name?.type || errors.owner?.type || errors.finalLocation?.type || errors.itemsAmount?.type || errors.weight?.type || errors.contentInput?.type || errors.photos?.type;
  const conditionalPatternsErrors = errors.name?.type === 'pattern' || errors.owner?.type === 'pattern' || errors.finalLocation?.type === 'pattern';

  const onSubmit = handleSubmit((data) => {
    if (step === 1) {
      chipData < 1 ? setError('contentInput', { type: 'custom', message: 'Por favor, agregue el contenido de su caja.' }) : nextStep();
    } else if (step === 2) {
      console.log(data);
    } else {
      nextStep();
    }
  });
  
  useEffect(() => {
    if (Object.keys(errors).length > 0) showPopupError(StepOneErrorMessages || StepTwoErrorMessages || StepThreeErrorMessages);
    if (conditionalPatternsErrors) showPopupError(StepOneErrorMessages || StepTwoErrorMessages || StepThreeErrorMessages);

  }, [errors, patternsErrors])

  useEffect(() => {
    function checkDisabled(step) {
      // names of all fields.
      const fieldNames = [['name', 'owner', 'finalLocation', 'note'], ['contentInput', 'typeOfContent', 'itemsAmount', 'weight'], ['photos']];
  
      // required field names.
      const requiredFieldNames = [['name', 'owner', 'finalLocation'], ['typeOfContent', 'itemsAmount'], ['photos']];
      
      // check if required fields are empty or not.
      const emptyFields = requiredFieldNames[step].some((fieldName) => !getValues(fieldName));

      // check required fields for errors.
      const fieldErrors = fieldNames[step].some(field => !!errors[field]?.message);
      
      // check that the content has been added to the box.
      const contentBox = step === 1 ? chipData.length < 1 : false;
    
      // update IsDisable.
      setIsDisable(emptyFields || fieldErrors || contentBox);
    }

    checkDisabled(step);
    
    if (chipData.length === 0 && step === 1 && !getValues('contentInput') && !errors.contentInput && dirtyFields.contentInput) {
      setError('contentInput', { type: 'custom', message: 'Por favor, agregue el contenido de su caja.' });
    } 
  }, [watch()])

  return (
    <form className='flex flex-col justify-between px-4 m-4 mb-0 text-left boxForm' onSubmit={onSubmit}>
      <div className='flex flex-col gap-2'>
        {step === 0 ? (
          <BoxFormStep1 register={register} errors={errors} />
        ) : step === 1 ? (
          <BoxFormStep2 register={register} chipData={chipData} setChipData={setChipData} errors={errors}/>
        ) : step === 2 ? (
          <BoxFormStep3 register={register} imgList={imgList} setImgList={setImgList} errors={errors} />
        ) : null }
      </div>
      <div className='sticky bottom-0 left-0 right-0 z-20 flex justify-center w-full py-4 bg-black '>
        <button type={'submit'} className={`w-full text-black self-center py-4 rounded-full font-semibold ${step < 2 ? 'nextButton' : 'createButton'}`} disabled={isDisable} onClick={onSubmit}>{step < 2 ? 'Siguiente' : 'Crear Caja'}</button>
      </div>
    </form>
  );
};