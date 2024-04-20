import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navber from "./components/Navber";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#31363F'
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white'
    }
  };
  return (
    <>
      <Navber
        tital="TexttUtils"
        aboutext="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      {/* <About /> */}
      {/* <Navber /> */}
      <TextForm heading="Enter the text to analyze" mode={mode}/>
    </>
  );
}

export default App;
