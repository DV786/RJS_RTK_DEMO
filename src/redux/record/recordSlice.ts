import { createSlice } from "@reduxjs/toolkit";
import type { IRecordState } from "../../types/common";

const initialState: IRecordState = {
  data: []
}

const recordSlice = createSlice({
  name: 'record',
  initialState,
  reducers: {
    addRecord: (state, action) => {
      state.data = [...state.data, action.payload ]
    },
  },
})

export const { addRecord } = recordSlice.actions;
export default recordSlice.reducer;