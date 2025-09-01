import { Box, TextField } from '@mui/material';
import type { TStepProps } from '../../types/common';

const StepOne: React.FC<TStepProps> = ({ values, touched, errors, handleChange }) => {
  return (
    <Box>
      <TextField
        name='firstName'
        label='First Name'
        margin='normal'
        value={values.firstName}
        error={touched.firstName && Boolean(errors.firstName)}
        helperText={touched.firstName && errors.firstName}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        name='lastName'
        label='Last Name'
        margin='normal'
        value={values.lastName}
        error={touched.lastName && Boolean(errors.lastName)}
        helperText={touched.lastName && errors.lastName}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        name='email'
        label='Email'
        margin='normal'
        value={values.email}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
        onChange={handleChange}
        fullWidth
      />
    </Box>
  )
}

export default StepOne
