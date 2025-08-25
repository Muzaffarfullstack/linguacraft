import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")).render(
  <>
    <App />{" "}
    <Toaster
      position="top-center"
      style={{ fontSize: "20px", color: "#1f2937" }}
    />
  </>
);
