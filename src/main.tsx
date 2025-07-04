import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { StoreProvider } from "@app/Provider/index.ts";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <StoreProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </StoreProvider>
  </BrowserRouter>,
);
