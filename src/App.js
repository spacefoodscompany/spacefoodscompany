import React from "react";
import {  Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/UI/Header";
import About from "./components/Home/About";
import Shop from "./components/Shop/Shop";
import Home from "./components/Home/Home";
import Footer from "./components/UI/Footer"

function App() {

  return (
    <div className="App">
      <Header />
      <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/shop" element={<Shop/>}/>
      </Routes>
    </div>
      <Footer/>
    </div>
  );
}

export default App;
