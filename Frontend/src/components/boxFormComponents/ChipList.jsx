import { useRef, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const stylePaper = {
  '--before-display': 'block',
  width: '100%',
  maxHeight: '120px',
  marginBottom: '1rem',
  overflowY: 'scroll',
  display: 'flex',
  justifyContent: 'start',
  flexWrap: 'wrap',
  listStyle: 'none',
  background: 'transparent',
  border: 'none',
  borderRadius: '2px',
  minHeight: '50px',
  position: 'relative',
  '&::before': {
    content: '"+ Agregar"',
    display: 'var(--before-display)',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'gray',
    position: 'absolute',
    fontSize: '12px'
  },
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

export default function ChipList({ chipData, setChipData }) {

  const paper = useRef(null);

  useEffect(() => {
    if (paper.current && chipData.length > 0) {
      paper.current.style.setProperty('--before-display', 'none');
    }
  }, [chipData])

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <Paper
      sx={stylePaper}
      component="ul"
      id='paper'
      variant="outlined"
      ref={paper}
      onClick={() => {document.getElementById('contentInput').focus()}}
    >
      {chipData && chipData.length > 0 ? chipData.map((data) => {
          return (
            <ListItem key={data.key}>
              <Chip
                sx={{
                  background: '#E2E756',
                  maxWidth: '296px',
                  minHeight: '32px',
                  height: 'auto',
                  '& .MuiChip-label': {
                    display: 'block',
                    whiteSpace: 'normal',
                  }
                }}
                label={data.label}
                onDelete={handleDelete(data)}
              />
            </ListItem>
          );
        }) : paper?.current && paper.current.style.setProperty('--before-display', 'block')
      }
    </Paper>
  );
};