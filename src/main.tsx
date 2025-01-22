import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import MobileLayout from "./components/MobileLayout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MobileLayout>
      <App />
    </MobileLayout>
  </StrictMode>
);
