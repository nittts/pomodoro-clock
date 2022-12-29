import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { IHistory } from "../../@types/history.types";

export const sessionSlice = createSlice({
  name: "Session Info",
  initialState: {
    value: {
      duration: { current: 1500, goal: 1500 },
      date: new Date().toLocaleDateString(),
      status: "Waiting",
      breaks: { current: 0, goal: 4, duration: 300 },
      reps: { current: 0, goal: 4 },
      quote: { text: "", author: "" },
    } as IHistory,
  },
  reducers: {
    setDuration: (state, action) => {
      state.value = { ...state.value, duration: action.payload };
    },
    setBreaks: (state, action) => {
      state.value = { ...state.value, breaks: action.payload };
    },
    setReps: (state, action) => {
      state.value = { ...state.value, reps: action.payload };
    },
    setQuote: (state, action) => {
      state.value = { ...state.value, quote: action.payload };
    },
    setStatus: (state, action) => {
      state.value = { ...state.value, status: action.payload };
    },
    resetSession: (state) => {
      state.value = {
        ...state.value,
        duration: { current: 1500, goal: 1500 },
        date: new Date().toLocaleDateString(),
        status: "Waiting",
        breaks: { current: 0, goal: 4, duration: 300 },
        reps: { current: 0, goal: 4 },
      };
    },
  },
});

export default sessionSlice.reducer;

export const useSession = () => {
  const sessionState = useSelector((state: any) => state.session.value);
  const dispatch = useDispatch();
  const { setBreaks, setDuration, setReps, setQuote, resetSession, setStatus } = sessionSlice.actions;

  return { sessionState, dispatch, setBreaks, setDuration, setReps, setQuote, resetSession, setStatus };
};
