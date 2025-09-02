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
    removeRecord: (state, action) => {
      state.data =  state.data.filter((item) => item.id !== action.payload.id);
    }
  },
})

export const { addRecord, removeRecord } = recordSlice.actions;
export default recordSlice.reducer;