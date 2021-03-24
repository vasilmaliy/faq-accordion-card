import React, { useEffect } from "react";
import "./App.css";
import Question from "./components/Question";
import questions from './questions'

const styles = {
  leftBanner: {},
};

function App() {

  return (
    <div className="modal-wrap">
      <div className="modal-body">
        <div className="left-banner" style={styles.leftBanner}>
          <img className="cube" src={"./images/illustration-box-desktop.svg"} />
        </div>
        <div className="right-questions">
          <h1 className='title'>FAQ</h1>
          {questions.map(question => (
              <Question
              question={question.question}
              answer={question.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
