import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { musicApi } from "./api/musicApi";
import { reducers } from "./reducers";

export const makeStore = () =>
  configureStore({
    reducer: reducers,
    middleware: (gDM) => gDM().concat(musicApi.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
