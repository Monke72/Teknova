import RegistrPage from "@pages/RegistrPage/RegistrPage";
import "./styles/index.scss";
import HomePage from "@pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import NotFound from "@shared/ui/NotFound/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reg" element={<RegistrPage />} />
        <Route path="*" element={<NotFound error={404} />} />
      </Routes>
    </>
  );
}

export default App;
