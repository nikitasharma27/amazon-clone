import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";
import "./Variables.css";

function App() {
  return (
    <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<><Header /><Home/></>}>
            </Route>
            <Route path="/login">
            </Route>
            <Route path="/checkout" element={<><Header /></>}>
            </Route>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
