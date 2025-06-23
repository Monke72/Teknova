import { Provider } from "react-redux";
import { store, persistor } from "../index";
import { PersistGate } from "redux-persist/integration/react";

interface IAppRouter {
  children: React.ReactNode;
}
const AppRouter = ({ children }: IAppRouter) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default AppRouter;
