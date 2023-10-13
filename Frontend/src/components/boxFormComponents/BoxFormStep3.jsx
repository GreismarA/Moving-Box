import { useFormContext } from "react-hook-form";
import PhotosSvg from '../svg/Photos';
import ImagesList from './ImagesList';
import { showPopupError } from '../../libs/animations/modalErrorMsg';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '../../resources/styles/popupErrorAnimation.css';

export default function BoxFormStep3({ imgList, setImgList }) {
  const { register, formState: {errors} } = useFormContext();

  const validateImages = (e, files) => {
    console.log(files);
    if (files.length > 16 || files.length + imgList.length > 16) {
      showPopupError('Seleccione un máximo de 16 imágenes.')
      return;
    } else if (Array.from(files).some(element => !element.type.includes('image'))) {
      showPopupError('Seleccione solo imágenes.')
      return;
    } else {
      Array.from(files).forEach((file) => {
        setImgList((currentImgList) => [...currentImgList, URL.createObjectURL(file)])
      });
    }
  };

  return (
    <>
      <h1 className='mb-4 text-3xl font-medium text-[#e2e756]'>Agregue fotos de su contenido</h1>
    
      <label htmlFor="photos" className={`block font-medium mb-[-2px] ${errors.photos ? 'errorLabel' : 'normalLabel'}`}>Fotos <span className=' text-[10px]'>(opcional)</span></label>
      <ImagesList list={imgList} setList={setImgList} > 
        <PhotosSvg />
      </ImagesList>
      <input id='photos' className={`bg-transparent border-b border-solid rounded-none focus:outline-none focus:border-b-[1px] focus:border-b-[solid] mb-6 hidden ${errors.photos ? 'errorInput' : 'normalInput'}`} type="file" {...register('photos')} title='Fotos del contenido. Esto ayuda a visualizar de manera más visual lo que cada caja contiene.' accept='image/*' multiple onChange={(e) => validateImages(e, e.target.files)}/>

      <DotLottiePlayer src="https://lottie.host/dd87889a-0667-49f2-9374-5d719f6252ee/dMRcjm8MzH.json" autoplay loop /> 
    </>
  );
};