import React, { useEffect } from "react";
import "./App.css"; // Assurez-vous que ce fichier contient les styles DaisyUI
import Navbar from "./composantsApp/Navbar";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Intro from "./composantsApp/Intro";
import Posts from "./posts/Posts";
import Slider from "./composantsApp/SwiperSlider";
import Footer from "./composantsApp/Footer";
import Propose from "./composantsApp/Propose";

function AppContent() {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="App">
      <Navbar />

      <Slider />
      <Propose />
      <Posts />
      <Footer />
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
