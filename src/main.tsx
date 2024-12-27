import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@material-tailwind/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastContainer />
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
