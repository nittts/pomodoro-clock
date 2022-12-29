import { configureStore } from "@reduxjs/toolkit";
import HistoryReducer from "./History";
import SessionReducer from "./Session";

const store = configureStore({
  reducer: { history: HistoryReducer, session: SessionReducer },
});

export default store;
