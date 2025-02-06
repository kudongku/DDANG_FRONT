import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import MobileLayout from "./layouts/MobileLayout.tsx";
import BodyLayout from "./layouts/BodyLayout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MobileLayout>
      <BodyLayout>
        <App />
      </BodyLayout>
    </MobileLayout>
  </StrictMode>
);
