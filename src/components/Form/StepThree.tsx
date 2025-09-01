import { Box, TextField } from '@mui/material';
import type { TStepProps } from '../../types/common';

const StepThree: React.FC<TStepProps> = ({ values, touched, errors, handleChange }) => {
  return (
    <Box>
      <TextField
        name='companyName'
        label='Company Name'
        margin='normal'
        value={values.companyName}
        error={touched.companyName && Boolean(errors.companyName)}
        helperText={touched.companyName && errors.companyName}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        name='role'
        label='Role'
        margin='normal'
        value={values.role}
        error={touched.role && Boolean(errors.role)}
        helperText={touched.role && errors.role}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        name='yearsOfExperience'
        label='Year Of Experience'
        type='number'
        margin='normal'
        value={values.yearsOfExperience}
        error={touched.yearsOfExperience && Boolean(errors.yearsOfExperience)}
        helperText={touched.yearsOfExperience && errors.yearsOfExperience}
        onChange={handleChange}
        fullWidth
      />
    </Box>
  )
}

export default StepThree
