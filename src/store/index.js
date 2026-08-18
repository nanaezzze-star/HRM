import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./api";
import kanbanReducer from "./kanbanSlice";

export const store = configureStore({
    reducer: {
  [userApi.reducerPath]: userApi.reducer, // API cache (data,status)
    kanban: kanbanReducer,
    },
    middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(userApi.middleware),//cache and checks

});

