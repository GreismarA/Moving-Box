import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CancelIcon from '@mui/icons-material/Cancel';

const BoxStyles = (conditional) => {
  const styles = conditional 
  ? { 
      width: '100%',
      minHeight: '112px',
      maxHeight: '319px',
      border: '1px solid #373737',
      borderRadius: '4px',
      padding: '5px',
      overflowY: 'scroll',
      marginBottom: '1.5rem',
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
    } 
  : { 
      width: '100%',
      minHeight: '112px',
      maxHeight: '319px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px solid #373737',
      borderRadius: '4px',
      padding: '5px',
      overflowY: 'scroll',
      marginBottom: '1.5rem',
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
  }
  return styles
}

const CancelIconStyles = { 
  position: 'absolute',
  top: '0',
  right: '0',
  fill: 'rgba(255, 255, 255, 1)',
  width: 22,
  cursor: 'pointer',
  WebkitTapHighlightColor: 'transparent',
  mixBlendMode: 'difference',
  '@media (max-width: 1024px)': {
    '&:active': { 
      fill: 'rgba(255, 255, 255, 0.74)'
    } 
  },
  '@media (min-width: 1025px)': {
    '&:hover': {
      fill: 'rgba(255, 255, 255, 0.74)'
    }
  }
}

export default function ImagesList({ list, setList, children }) {
  
  const handleDelete = (imageIndex) => {
    setList((images) => images.filter((image, index) => index !== imageIndex));
  };
  
  return (
    <Box sx={BoxStyles(list.length > 0)}>
      {console.log('renderizando')}
      <ImageList cols={list.length > 0 ? 3 : 1} gap={4} rowHeight={100} >
        {list.length > 0 ? list.map((image, index) => (
          <ImageListItem key={index} sx={{ position: 'relative' }}>
            <img
              src={image}
              alt={`Imagen número ${index + 1}`}
              loading="lazy"
              className='max-h-[100px]'
            />
            <CancelIcon sx={CancelIconStyles} onClick={() => handleDelete(index)} />
          </ImageListItem>
        )) : (children)}
        {list.length > 0 && list.length < 16 ? (<ImageListItem sx={{ justifyContent: 'center' }}>{children}</ImageListItem>) : null}
      </ImageList>
    </Box>
  );
};