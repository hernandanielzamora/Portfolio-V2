import React from "react";
import Navbar from "./components/Navbar";
import Summary from "./components/Summary";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
          <Summary />
          <Projects />
          <AboutMe />
          <Skills />
          <ContactForm />
          <Footer />
      </div>
    </>
  );
}

export default App;
