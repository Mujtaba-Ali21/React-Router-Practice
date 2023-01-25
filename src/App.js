import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import {
  Routes,
  Route,
} from "react-router-dom";

function App(props) { 

  return (
    <>

    <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="services" element={<Services/>} />
      <Route path="pricing" element={<Pricing/>} />
      <Route path="contact" element={<Contact/>} />
    </Routes>
    </>
  );
}

export default App;
