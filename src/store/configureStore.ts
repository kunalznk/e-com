import { configureStore } from "@reduxjs/toolkit";
import { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import entitiesReducer from "./entities";

const store =  configureStore({
    reducer: {
      entities: entitiesReducer,
    //   middleware?: (getDefaultMiddleware : CurriedGetDefaultMiddleware<any>) =>
    //     getDefaultMiddleware({
    //     serializableCheck: false,
    // }),
    },
  });

export default store;  
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
  