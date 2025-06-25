import store, { rootReducer } from "./store/store";
import AppRouter from "./ui/AppRouter";
import { persistor } from "./store/store";
export type RootState = ReturnType<typeof rootReducer>;
export { store, AppRouter as StoreProvider, persistor };
