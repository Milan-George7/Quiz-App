import React, { useState } from 'react';
import QuestionComponent from './QuestionComponent';

const QuizComponent = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      correctAnswer: 2,
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
      correctAnswer: 1,
    },
    {
      question: 'Who wrote "To Kill a Mockingbird"?',
      options: ['Harper Lee', 'J.K. Rowling', 'Charles Dickens', 'Mark Twain'],
      correctAnswer: 0,
    },
    {
      question: 'What is the largest mammal?',
      options: ['Elephant', 'Whale Shark', 'Blue Whale', 'Giraffe'],
      correctAnswer: 2,
    },
    {
      question: 'In which year did the Titanic sink?',
      options: ['1905', '1912', '1920', '1931'],
      correctAnswer: 1,
    },
    {
      question: 'Which country is known as the Land of the Rising Sun?',
      options: ['China', 'South Korea', 'Japan', 'Vietnam'],
      correctAnswer: 2,
    },
    {
      question: 'Who painted the Mona Lisa?',
      options: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Claude Monet'],
      correctAnswer: 2,
    },
    {
      question: 'What is the currency of Australia?',
      options: ['Euro', 'Pound Sterling', 'Dollar', 'Yen'],
      correctAnswer: 2,
    },
    {
      question: 'Which element has the chemical symbol "O"?',
      options: ['Oxygen', 'Gold', 'Silver', 'Osmium'],
      correctAnswer: 0,
    },
    {
      question: 'In which year did Lionel Messi win his first Ballon d\'Or?',
      options: ['2009', '2010', '2011', '2012'],
      correctAnswer: 0,
    },
    // Add more questions here
  ];

  const handleAnswer = (selectedOption) => {
    const currentQuestionData = questions[currentQuestion];
    if (selectedOption === currentQuestionData.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    // Move to the next question if available
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      // Quiz completed
      setCurrentQuestion(questions.length);
    }
  };

  return (
    <div>
      {currentQuestion < questions.length ? (
        <QuestionComponent
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          onAnswer={handleAnswer}
          questionNumber={currentQuestion + 1}
        />
      ) : (
        <div className='quiz-completed'>
          <h2>Quiz Completed</h2>
          <p>You got {score}/10 correct answers</p>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;