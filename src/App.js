import React from "react";
import Navbar from "./components/Navbar";
import Summary from "./components/Summary";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Summary />
          <Projects />
          <AboutMe />
          <Skills />
          <ContactForm />
        </header>
      </div>
    </>
  );
}

export default App;
