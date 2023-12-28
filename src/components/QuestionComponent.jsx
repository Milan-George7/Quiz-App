import React, { useState } from 'react';

const QuestionComponent = ({ question, options, onAnswer, questionNumber }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
    onAnswer(index);
  };

  return (

    
    <div className='container'>
      <h1>Quiz App</h1>
      <h3>Question No: {questionNumber}</h3>
      <h2>{question}</h2>
      <ul>
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleOptionClick(index)}
            className={selectedOption === index ? 'selected' : ''}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionComponent;