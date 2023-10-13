import React, { useState } from 'react';
import { router } from '@inertiajs/react'
import quizQuestions from '../quizData'

const MerchQuiz = () => {
    const [answers, setAnswers] = useState(Array(quizQuestions.length).fill(''));

    const handleOptionChange = (questionIndex, optionIndex) => {
        const newAnswers = [...answers];
        newAnswers[questionIndex] = optionIndex;
        setAnswers(newAnswers);
    };

    const isAllAnswered = () => {
        return answers.every(answer => answer !== '');
    };

    const handleSubmit = () => {
    if (!isAllAnswered()) {
        alert('Silakan lengkapi semua pertanyaan sebelum mengirim.');
        return;
    }
        router.post('/quiz-merch/after', { answers });
    };

    return (
        <div>
            <h1>Quiz Merch</h1>
            <form onSubmit={handleSubmit}>
                {quizQuestions.map((question, questionIndex) => (
                    <div key={questionIndex}>
                        <p>{question.text}</p>
                        {question.options.map((option, optionIndex) => (
                            <div key={optionIndex}>
                                <input
                                    type="radio"
                                    id={`q${questionIndex}_opt${optionIndex}`}
                                    name={`q${questionIndex}`}
                                    value={optionIndex} // Mengirim indeks opsi sebagai value (0, 1, 2)
                                    checked={answers[questionIndex] === optionIndex}
                                    onChange={() => handleOptionChange(questionIndex, optionIndex)}
                                />
                                <label htmlFor={`q${questionIndex}_opt${optionIndex}`}>{option}</label>
                            </div>
                        ))}
                    </div>
                ))}
                <button type="button" disabled={!isAllAnswered()} onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
};
export default MerchQuiz;