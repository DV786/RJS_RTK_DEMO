import { Box, Typography } from '@mui/material';
import type { TStepProps } from '../../types/common';

const StepFour: React.FC<TStepProps> = ({ values }) => {
  return (
    <Box>
      <Box display={'flex'}>
        <Typography variant='h6' sx={{ fontWeight: 800 }} >First Name:</Typography>
        <Typography variant='h6'>{values.firstName}</Typography>
      </Box>
      <Box display={'flex'}>
        <Typography variant='h6' sx={{ fontWeight: 800 }} >Lats Name:</Typography>
        <Typography variant='h6'>{values.lastName}</Typography>
      </Box>
      <Box display={'flex'}>
        <Typography variant='h6' sx={{ fontWeight: 800 }} >Email:</Typography>
        <Typography variant='h6'>{values.email}</Typography>
      </Box>
      <Box display={'flex'}>
        <Typography variant='h6' sx={{ fontWeight: 800 }} >Address:</Typography>
        <Typography variant='h6'>{values.address}</Typography>
      </Box>
      <Box display={'flex'}>
        <Typography variant='h6' sx={{ fontWeight: 800 }} >Zip Code:</Typography>
        <Typography variant='h6'>{values.zip}</Typography>
      </Box>
      <Box display={'flex'}>
        <Typography variant='h6' sx={{ fontWeight: 800 }} >City:</Typography>
        <Typography variant='h6'>{values.city}</Typography>
      </Box>
      <Box display={'flex'}>
        <Typography variant='h6' sx={{ fontWeight: 800 }} >State:</Typography>
        <Typography variant='h6'>{values.state}</Typography>
      </Box>
      <Box display={'flex'}>
        <Typography variant='h6' sx={{ fontWeight: 800 }} >Country:</Typography>
        <Typography variant='h6'>{values.country}</Typography>
      </Box>
      <Box display={'flex'}>
        <Typography variant='h6' sx={{ fontWeight: 800 }} >Company Name:</Typography>
        <Typography variant='h6'>{values.companyName}</Typography>
      </Box>
      <Box display={'flex'}>
        <Typography variant='h6' sx={{ fontWeight: 800 }} >Role:</Typography>
        <Typography variant='h6'>{values.role}</Typography>
      </Box>
      <Box display={'flex'}>
        <Typography variant='h6' sx={{ fontWeight: 800 }} >Total Experience:</Typography>
        <Typography variant='h6'>{values.yearsOfExperience}</Typography>
      </Box>
    </Box>
  )
}

export default StepFour
