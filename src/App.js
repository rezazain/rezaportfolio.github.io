import React from "react";
import About from "./components/About/About";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
