import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./Movies";
import Wibu from "./Wibu";
import Celebrities from "./Celebrities";
import Characters from "./Characters";
import Menu from "./Menu";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Wibu" element={<Wibu />} />
        <Route path="/Celebrities" element={<Celebrities />} />
        <Route path="/Characters" element={<Characters />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
