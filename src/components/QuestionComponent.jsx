import React, { useState } from 'react';

const QuestionComponent = ({ question, options, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
    onAnswer(index);
  };

  return (
    <div className='container'>
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