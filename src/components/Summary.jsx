import React, { useEffect, useState } from "react";
import "../styles/Summary.scss";
import gifImage from "../media/output-onlinegiftools-unscreen.gif";

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
    }, 20);

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
          <div className="contacts">Contacts</div>
        </div>
        <div className='gif-container'>
          <img src={gifImage} alt="Code Coding GIF" />
        </div>
      </main>
    </>
  );
};

export default Summary;
