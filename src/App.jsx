import React from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Stats from "./Components/Stats";
import Business from "./Components/Business";
import Clients from "./Components/Clients";
import Footer from "./Components/Footer";

const App = () => (
  <>
    <Navbar/>
    <Hero/>
    <Stats/>
    <Business/>
    <Clients/>
    <Footer/>
  </>
);

export default App;
