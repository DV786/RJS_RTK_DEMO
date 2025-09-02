import React, { useEffect, useState } from "react";
import { Form, Formik, type FormikHelpers } from "formik";
import { Box, Button, Step, StepLabel, Stepper } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";
import StepOne from "./Form/StepOne";
import { type IUserData } from "../types/common";
import StepTwo from "./Form/StepTwo";
import StepThree from "./Form/StepThree";
import StepFour from "./Form/StepFour";
import { useAppDispatch } from "../redux/hook";
import { addRecord, updateRecord } from "../redux/record/recordSlice";

const ReactForm: React.FC<{ 
  handleCloseDialog: () => void,
  userToEdit?: IUserData | null;
}> = ({ handleCloseDialog, userToEdit = null }) => {
  const dispatch = useAppDispatch();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [initialValues, setInitialValues]= useState<IUserData>({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    state: '',
    zip: null,
    companyName: '',
    role: '',
    yearsOfExperience: null
  });
  const steps = ["Personal Info", "Address Details", "Professional Info", "Review & Submit"];
  const isLastStep = activeStep === steps.length - 1;

  useEffect(() => {
    if (userToEdit) {
      setInitialValues(userToEdit); // pre-fill for update
    }
  }, [userToEdit]);


  const handleNext = async (
    values: IUserData,
    actions: FormikHelpers<IUserData>
  ) => {
    if (isLastStep) {
      if (userToEdit) {
        dispatch(updateRecord({ id: values.id, updatedData: values }));
      } else {
        dispatch(addRecord({ ...values, id: uuidv4() }));
      }
      handleCloseDialog();
    } else {
      setActiveStep((prev) => prev + 1);
    }
    actions.setTouched({});
    actions.setSubmitting(false);
  };

  const handleBack = () => {
    if (activeStep === 0) {
      handleCloseDialog();
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const validationSchemas = [
    Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
    }),
    Yup.object({
      address: Yup.string()
        .trim()
        .required("Address is required")
        .min(5, "Address must be at least 5 characters"),

      city: Yup.string()
        .trim()
        .required("City is required")
        .matches(/^[a-zA-Z\s]+$/, "City can only contain letters"),

      state: Yup.string()
        .trim()
        .required("State is required")
        .matches(/^[a-zA-Z\s]+$/, "State can only contain letters"),

      country: Yup.string()
        .trim()
        .required("Country is required")
        .matches(/^[a-zA-Z\s]+$/, "Country can only contain letters"),
      zip: Yup.string()
        .trim()
        .required("Zip code is required")
        .matches(/^\d{5,6}$/, "Zip must be 5 or 6 digits"),

    }),
    Yup.object({
      companyName: Yup.string()
        .trim()
        .required("Company name is required")
        .min(2, "Company name must be at least 2 characters"),

      role: Yup.string()
        .trim()
        .required("Role is required")
        .min(2, "Role must be at least 2 characters"),

      yearsOfExperience: Yup.number()
        .typeError("Years of experience must be a number")
        .required("Years of experience is required")
        .min(0, "Experience cannot be negative")
        .max(50, "Experience seems too high"),
    }),

    Yup.object({})
  ];

  return (
    <Formik<IUserData>
      initialValues={initialValues}
      enableReinitialize
      validationSchema={validationSchemas[activeStep]}
      onSubmit={handleNext}
    >
      {(formikProps) => (
        <Form>
          <Stepper activeStep={activeStep} sx={{ mb: 3 }}>
            {steps.map((label: string) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Box sx={{ mb: 2 }}>
            {activeStep === 0 && <StepOne {...formikProps} />}
            {activeStep === 1 && <StepTwo {...formikProps} />}
            {activeStep === 2 && <StepThree {...formikProps} />}
            {activeStep === 3 && <StepFour {...formikProps} />}
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Button
              onClick={handleBack}
              variant="outlined"
            >
              {activeStep === 0 ? 'Close' : 'Back'}
            </Button>
            <Button type="submit" variant="contained" disabled={formikProps.isSubmitting}>
              {isLastStep ? "Submit" : "Next"}
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  )
}

export default ReactForm
