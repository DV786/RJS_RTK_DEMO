import { createSlice } from "@reduxjs/toolkit";
import type { IRecordState } from "../../types/common";

const initialState: IRecordState = {
  data: null
}

const recordSlice = createSlice({
  name: 'record',
  initialState,
  reducers: {},
})

export default recordSlice.reducer;