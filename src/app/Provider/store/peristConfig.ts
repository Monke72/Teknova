import storage from "redux-persist/lib/storage";
import { PersistConfig } from "redux-persist";
import { RootState } from "../index";

const persistConfig: PersistConfig<RootState> = {
  key: "root",
  storage,
  whitelist: ["userReg", "navSection"], // ключи редьюсеров, которые хотим сохранять
};

export default persistConfig;
