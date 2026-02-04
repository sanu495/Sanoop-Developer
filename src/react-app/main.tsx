import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "@/react-app/index.css";
import App from "@/react-app/App.tsx";
import { reportWebVitals } from "@/react-app/utils/performance";

// Initialize performance monitoring
reportWebVitals();

function RootApp() {
  useEffect(() => {
    // Remove loading screen after app mounts
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
      loadingScreen.classList.add('opacity-0');
      setTimeout(() => loadingScreen.remove(), 300);
    }
  }, []);

  return <App />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RootApp />
  </StrictMode>
);
