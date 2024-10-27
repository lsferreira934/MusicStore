import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/slice";
import authReducer from "./features/auth/slice";
import { useDispatch } from "react-redux";

import logger from "redux-logger";

export const store = () => {
  return configureStore({
    reducer: { userReducer, authReducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  });
};

export type AppStore = ReturnType<typeof store>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export const useAppDispatch: () => AppDispatch = useDispatch;
