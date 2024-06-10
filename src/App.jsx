import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbarcomp from "./components/Navbarcomp";
import Footercomp from "./components/Footercomp";
import Homepage from "./page/Homepage";
import Infopage from "./page/Infopage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbarcomp />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/info" element={<Infopage />} />
      </Routes>

      <Footercomp />
    </div>
  );
}

export default App;
