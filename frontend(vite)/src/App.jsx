import React, { useEffect } from "react";
import "./App.css"; // Assurez-vous que ce fichier contient les styles DaisyUI
import Navbar from "./composantsApp/Navbar";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Posts from "./posts/Posts";
import Slider from "./composantsApp/SwiperSlider";
import Connexion from "./connexion/Connexion";

function AppContent() {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="App">
      <Navbar />

      <Slider />
      <Connexion />
      <Posts />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
