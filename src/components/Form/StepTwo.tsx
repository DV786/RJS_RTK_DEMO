import { Box, TextField } from '@mui/material';
import type { TStepProps } from '../../types/common';

const StepTwo: React.FC<TStepProps> = ({ values, touched, errors, handleChange }) => {
  return (
    <Box>
      <TextField
        name='address'
        label='Address*'
        margin='normal'
        multiline
        minRows={4}
        value={values.address}
        error={touched.address && Boolean(errors.address)}
        helperText={touched.address && errors.address}
        onChange={handleChange}
        fullWidth
      />
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <TextField
          name='zip'
          label='Zip Code'
          type='number'
          margin='normal'
          value={values.zip}
          error={touched.zip && Boolean(errors.zip)}
          helperText={touched.zip && errors.zip}
          onChange={handleChange}
        />
        <TextField
          name='city'
          label='city'
          margin='normal'
          value={values.city}
          error={touched.city && Boolean(errors.city)}
          helperText={touched.city && errors.city}
          onChange={handleChange}
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <TextField
        name='state'
        label='state'
        margin='normal'
        value={values.state}
        error={touched.state && Boolean(errors.state)}
        helperText={touched.state && errors.state}
        onChange={handleChange}
      />
      <TextField
        name='country'
        label='country'
        margin='normal'
        value={values.country}
        error={touched.country && Boolean(errors.country)}
        helperText={touched.country && errors.country}
        onChange={handleChange}
      />
      </Box>
    </Box>
  )
}

export default StepTwo
