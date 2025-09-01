import type { FormikProps } from "formik";

export interface IRecordState {
  data: IUserData[]
}

export interface IUserData {
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  address: string,
  zip: number | null,
  city: string,
  state: string,
  country: string,
  companyName: string,
  role: string,
  yearsOfExperience: number | null
}

export type TStepProps = FormikProps<IUserData>;