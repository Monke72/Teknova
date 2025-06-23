import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistConfig from "./peristConfig";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import userReducer from "@features/Auth/slice";
import { navSectionReducer } from "@features/Navigation/slice";

// Создаем rootReducer из всех слайсов
export const rootReducer = combineReducers({
  userReg: userReducer,
  navSection: navSectionReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export default store;
