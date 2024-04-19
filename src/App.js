import "./App.css";
import Navber from "./components/Navber";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <Navber tital="TexttUtils" aboutext="About Us"/>
      {/* <Navber /> */}
      <TextForm heading="Enter the text to analyze"/>
    </>
  );
}

export default App;
