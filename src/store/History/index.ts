import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { IHistory } from "../../@types/history.types";

export const historySlice = createSlice({
  name: "User History",
  initialState: {
    value: [] as IHistory[],
  },
  reducers: {
    saveHistory: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    deleteHistory: (state, action) => {
      state.value = state.value.filter((_, index, arr) => index === arr.indexOf(action.payload));
    },
  },
});

export default historySlice.reducer;

export const useClockHistory = () => {
  const historyState = useSelector((state: any) => state.history.value);
  const dispatch = useDispatch();
  const { saveHistory, deleteHistory } = historySlice.actions;

  return { historyState, dispatch, saveHistory, deleteHistory };
};
