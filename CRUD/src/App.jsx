import { useState } from "react";
import CarList from "./components/CarList";
import CarAdd from "./components/AddCar";
import CarUpdate from "./components/UpdateCar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CarList />}></Route>
        <Route path="/add" element={<CarAdd />}></Route>
        <Route path="/update/:id" element={<CarUpdate />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
