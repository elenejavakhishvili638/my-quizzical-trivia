import React from "react";
import "./FirstPage.css";

function FirstPage(props) {
  return (
    <div className="first-page">
      <div className="blob1"></div>
      <div>
        <h1>Quizzical</h1>
        <p>Some description if needed</p>
        <button onClick={props.start}>Start Quiz</button>
      </div>
      <div className="blob2"></div>
    </div>
  );
}

export default FirstPage;
