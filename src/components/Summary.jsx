import React, { useEffect, useState } from "react";
import "../styles/Summary.scss";
import gifImage from "../media/output-onlinegiftools-unscreen.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Summary = () => {
  const [summaryText, setSummaryText] = useState("");
  const fullSummaryText =
    "Hey there! I'm Hernán Zamora, a dedicated fullstack developer driven by a relentless passion for learning. Currently pursuing my third year as a software development student, I possess a well-rounded skill set as a fullstack developer.";

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex <= fullSummaryText.length) {
        setSummaryText(fullSummaryText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 15);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <main>
        <div>
          <h1 className="title">Hernán Zamora</h1>
          <h2 className="title">Software Developer</h2>
          <div className="summary">
            <p>{summaryText}</p>
          </div>
          <div className="contacts">
            <ul className="contacts-container">
              <a href='mailto:hernandanielzamora@gmail.com'><li><FontAwesomeIcon icon={faEnvelope} className='fa-2xl contact-icon' /></li></a>
              <a href='https://github.com/hernandanielzamora' target="_blank"><li><FontAwesomeIcon icon={faGithub} className='fa-2xl contact-icon'/></li></a>
              <a href='https://www.linkedin.com/in/zamora-hernan/' target="_blank"><li><FontAwesomeIcon icon={faLinkedin} className='fa-2xl contact-icon'/></li></a>
            </ul>
          </div>
        </div>
        <div className='gif-container'>
          <img src={gifImage} alt="Code Coding GIF" />
        </div>
      </main>
      <hr />
    </>
  );
};

export default Summary;
