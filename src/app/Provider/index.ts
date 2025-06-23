import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import store, { rootReducer, AppDispatch } from "./store/store";
import AppRouter from "./ui/AppRouter";
import { persistor } from "./store/store";
export type RootState = ReturnType<typeof rootReducer>;
export { store, AppRouter as StoreProvider, persistor };

//хуки
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
