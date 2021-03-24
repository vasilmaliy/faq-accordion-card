import React, { useState } from 'react';

const Question = ({ question, answer }) => {
  const [viewAnswer, setViewAnswer] = useState(false);

  function arrowClickHandler() {
    setViewAnswer(!viewAnswer);
  }

  return (
    <ul className="question-wrapper">
      <li
        className="question"
        onClick={arrowClickHandler}
        style={{ fontWeight: viewAnswer ? '700' : '400' }}
      >
        {question}
        <div
          className="arrow-down"
          style={{
            margin: '0px 10px 0px 0px',
            transform: viewAnswer ? 'rotate(0.5turn)' : 'none',
          }}
        >
          <img
            className="icon-arrow-down"
            src={'./images/icon-arrow-down.svg'}
          />
        </div>
      </li>
      <li
        className="answer"
        style={{
          padding: '0px',
          marginBottom: '.9rem',
          fontSize: '12px',
          display: viewAnswer ? 'block' : 'none',
        }}
      >
        {answer}
      </li>
    </ul>
  );
};

export default Question;
