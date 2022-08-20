import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./components/Homepage";

import "./styles/App.scss";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
