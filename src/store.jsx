import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/CounterSplice";
// eslint-disable-next-line react-refresh/only-export-components
export default configureStore({
  reducer: {
    counter: counterReducer 
  },
});
