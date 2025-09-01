import { useState } from 'react';
import { Box, Button, Container, Dialog, DialogContent, TextField } from '@mui/material'
import ReactTable from './components/ReactTable'
import './App.css'
import ReactForm from './components/ReactForm';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Container>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        margin: '0 14px'
      }}>
        <TextField
          label="Search"
          variant="outlined"
          size='small'
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ maxWidth: 250 }}
        />
        <Button variant='contained' onClick={handleClickOpen} sx={{ marginLeft: '12px' }}>NEW</Button>
      </Box>
      <ReactTable />
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <ReactForm handleCloseDialog={handleClose} />
        </DialogContent>
      </Dialog>
    </Container>
  )
}

export default App
