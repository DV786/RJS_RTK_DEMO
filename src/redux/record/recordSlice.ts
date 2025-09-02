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
    },
    updateRecord: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.data.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.data[index] = { ...state.data[index], ...updatedData };
      }
    },

  },
})

export const { addRecord, removeRecord, updateRecord } = recordSlice.actions;
export default recordSlice.reducer;