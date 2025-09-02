import { useState } from 'react';
import { Box, Button, Container, Dialog, DialogContent, TextField } from '@mui/material'
import ReactTable from './components/ReactTable'
import ReactForm from './components/ReactForm';
import { useAppSelector } from './redux/hook';
import type { RootState } from './redux/store';
import './App.css'
import type { IUserData } from './types/common';

function App() {
  const { data } = useAppSelector((state: RootState) => state.record)
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [userData, setUserData] = useState<IUserData | null>(null);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const filteredUsers = data.filter((user) => {
    const searchText = searchTerm.toLowerCase();
    return (
      user.firstName.toLowerCase().includes(searchText) ||
      user.lastName.toLowerCase().includes(searchText) ||
      user.email.toLowerCase().includes(searchText) ||
      user.address.toLowerCase().includes(searchText) ||
      user.city.toLowerCase().includes(searchText) ||
      user.state.toLowerCase().includes(searchText) ||
      user.country.toLowerCase().includes(searchText) ||
      user.companyName.toLowerCase().includes(searchText) ||
      user.role.toLowerCase().includes(searchText) ||
      user.yearsOfExperience?.toString().includes(searchText) ||
      user.zip?.toString().includes(searchText)
    );
  });


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
      <ReactTable 
        data={filteredUsers}
        setUserData={setUserData} 
        handleClickOpen={handleClickOpen}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <ReactForm handleCloseDialog={handleClose} userToEdit={userData} />
        </DialogContent>
      </Dialog>
    </Container>
  )
}

export default App
