import { useState } from "react";
import CarList from "./components/CarList";
import CarForm from "./components/CarForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CarList />}></Route>
        <Route path="/add" element={<CarForm />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
