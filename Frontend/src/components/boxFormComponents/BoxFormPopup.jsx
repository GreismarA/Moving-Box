import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import BoxForm from './BoxForm';
import Fade from '@mui/material/Fade';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import logo from '../../resources/img/Logo.png';
import '../../resources/styles/boxFormPopup.css';

const style = {
  '@media (max-width: 999px) and (max-height: 499px) and (orientation: landscape)': {
    position: 'relative',
    top: '50vh',
    left: 0,
    transform: 'translateY(-50%)',
    minHeight: '100vh',
    maxHeight: '100vh',
    width: '100vw',
    border: '1px solid transparent',
    borderRadius: '5px',
    backgroundColor: 'black',
    overflowY: 'scroll',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  '@media (max-width: 710px) and (orientation: portrait)': {
    position: 'relative',
    top: '50vh',
    left: 0,
    transform: 'translateY(-50%)',
    minHeight: '100vh',
    maxHeight: '100vh',
    width: '100vw',
    border: '1px solid transparent',
    borderRadius: '5px',
    backgroundColor: 'black',
    overflowY: 'scroll',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  position: 'relative',
  backgroundColor: 'black',
  top: '50vh',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: '90vh',
  maxHeight: 650,
  border: '1px solid transparent',
  borderRadius: '10px',
  boxShadow: 24,  
  overflowY: 'scroll',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '&::-webkit-scrollbar': {
    width: '4px'
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: 'transparent'
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#E2E756',
    borderRadius: '3px'
  }
};

export default function BoxFormPopup({ open, setOpen }) {
  const [currentStep, setCurrentStep] = useState(2);
  const [submit, setSubmit] = useState(false);
  
  const prevStep = () => {
    setSubmit(false);
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const nextStep = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else { 
      setSubmit(true);
    }
  };
  
  return (
    <Modal open={open} onClose={(event, reason) => {reason ? null : setOpen(false)}} keepMounted={true} sx={{ userSelect: 'none' }}  >
      <Fade in={open}>
        <Box sx={style}>
          <div>
            <header id='modalHeader' className='sticky top-0 z-20 px-8 py-1 bg-black border-b-[1px] border-[#373737] overflow-hidden min-h-[68px] flex justify-center flex-col-reverse'>
              <div id='normalHeader' className='relative left-0 flex items-center justify-between w-full h-full'>
                <img src={logo} alt="" className='inline-block w-24 bg-transparent'/>
                <div className='flex items-center gap-2'>
                  <span className='text-xs font-medium text-white'>{`Paso ${currentStep+1} de 3`}</span>
                  {currentStep < 1 ? (
                    <CloseRoundedIcon sx={{ color: 'white',  cursor: 'pointer' }} onClick={() => setOpen(false)} />
                  ) : (
                    <ArrowBackIcon sx={{ color: 'white',  cursor: 'pointer' }} onClick={prevStep} />
                  )}
                </div>
              </div>
            </header>
            <BoxForm step={currentStep} nextStep={nextStep} />
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};