import React, { useState } from 'react';
import { router } from '@inertiajs/react'
import quizQuestions from '../quizData'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const MerchQuiz = () => {
    const [showOverlay, setShowOverlay] = useState({});

    const handleOptionChange = (questionIndex, selectedOption) => {
        const newAnswers = [...answers];
        newAnswers[questionIndex] = selectedOption;
      
        // Update showOverlay based on the selected question and option
        setShowOverlay({ ...showOverlay, [questionIndex]: selectedOption });
      
        setAnswers(newAnswers);
      };
      
      const handleImageClick = (questionIndex, selectedOption) => {
        // Handle image click, toggle showOverlay for the selected question
        setShowOverlay((prevShowOverlay) => ({
          ...prevShowOverlay,
          [questionIndex]: prevShowOverlay[questionIndex] === selectedOption ? null : selectedOption,
        }));
      };

    const [answers, setAnswers] = useState(Array(quizQuestions.length).fill(''));

    // const handleOptionChange = (questionIndex, optionIndex) => {
    //     const newAnswers = [...answers];
    //     newAnswers[questionIndex] = optionIndex;
    //     setAnswers(newAnswers);
    // };

    const isAllAnswered = () => {
        return answers.every(answer => answer !== '');
    };

    const handleSubmit = () => {
    // if (!isAllAnswered()) {
    //     alert('Silakan lengkapi semua pertanyaan sebelum mengirim.');
    //     return;
    // }
        router.post('/quiz-merch/after', { answers });
    };

    return (
        <>
        <div className="bg-cover bg-no-repeat min-h-full relative xl:bg-[url('/assets/bg-merch.jpg')] md:bg-[url('/assets/bg-merch.jpg')] xs:bg-[url('/assets/bg-merch.jpg')]">
        <Navbar/>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 lg:gap-16 md:gap-8 xs:gap-4 xl:px-44 xl:py-16 lg:px-32 lg:py-16 md:px-16 md:py-10 xs:px-10 xs:py-4'>
                {quizQuestions.map((question, questionIndex) => (
                    <div className='bg-white rounded-lg w-full justify-center items-center xl:px-16 xl:py-16 lg:px-12 lg:py-12 md:px-6 md:py-4 xs:px-2 xs:py-2' key={questionIndex}>
                        <h1 className='xl:text-[80px] lg:text-[60px] md:text-[50px] xs:text-[20px] font-capuchetrial text-[#A4161A] text-center'>{question.title}</h1>
                        <h1 className='font-migra text-[#A4161A] xl:text-[40px] lg:text-[30px] md:text-[20px] xs:text-[15px] font-bold'>{question.number}</h1>
                        <p className='font-migra text-black xl:text-[30px] lg:text-[25px] md:text-[20px] xs:text-[12px] font-bold'>{question.text}</p>
                        <p className='font-migra text-black xl:text-[25px] lg:text-[20px] xs:text-[10px] font-bold'>Answer :</p>
                        <div className="grid grid-cols-3 gap-4">
                        {question.options.map((option, optionIndex) => {
                        if (typeof option === 'object') {
                            const optionLabel = option.label;
                            return (
                            <div key={optionIndex} className="text-center">
                                <label htmlFor={`q${questionIndex}_opt${optionIndex}`}>
                                <div className="h-fit w-full relative rounded-lg bg-[url('/assets/bg-questionno1.png')] bg-center bg-no-repeat">
                                    <div className="h-fit flex flex-col items-center">
                                    <input
                                        type="radio"
                                        id={`q${questionIndex}_opt${optionIndex}`}
                                        name={`q${questionIndex}`}
                                        value={optionLabel}
                                        checked={answers[questionIndex] === optionLabel}
                                        className="opacity-0 absolute -z-10"
                                        onChange={() => handleOptionChange(questionIndex, optionLabel)}
                                    />
                                    <label htmlFor={`q${questionIndex}_opt${optionIndex}`} className="relative cursor-pointer">
                                        <img
                                        src={option.imageSrc}
                                        alt={`Option ${optionLabel}`}
                                        className="pt-2 lg:h-[200px] md:h-[150px] xs:h-[80px] z-10"
                                        onClick={() => handleImageClick(questionIndex, optionLabel)}
                                        />
                                        <p className="xl:text-[30px] lg:text-[20px] md:text-[15px] xs:text-[10px] text-[#A4161A] font-migra font-extrabold text-center">
                                        {optionLabel}
                                        </p>
                                    </label>
                                    {showOverlay[questionIndex] === optionLabel && (
                                        <img
                                        src="/assets/xhover.png"
                                        alt="Overlay Image"
                                        className="absolute h-fit xl:w-[200px] h-fit z-0"
                                        />
                                    )}
                                    </div>
                                </div>
                                </label>
                            </div>
                            );
                        }
                        return null;
                        })}
                        </div>

                        {/* Elemen-elemen selain gambar di luar grid */}
                        <div>
                        {question.options.map((option, optionIndex) => {
                            if (typeof option !== 'object') {
                            return (
                                <label key={optionIndex} htmlFor={`q${questionIndex}_opt${optionIndex}`}>
                                <div className={`lg:border-4 md:border-2 xs:border-2 border-[#000] lg:p-4 md:p-2 xs:px-3 m-2 rounded-full hover:bg-gray-300 flex items-center cursor-pointer ${answers[questionIndex] === optionIndex ? 'bg-gray-300' : ''}`}>
                                    <input
                                    type="radio"
                                    className="opacity-0 absolute -z-10"
                                    id={`q${questionIndex}_opt${optionIndex}`}
                                    name={`q${questionIndex}`}
                                    value={optionIndex}
                                    checked={answers[questionIndex] === optionIndex}
                                    onChange={() => handleOptionChange(questionIndex, optionIndex)}
                                    />
                                    <label className='xl:text-[20px] lg:text-[15px] md:text-[15px] xs:text-[10px] font-migra text-black font-bold' htmlFor={`q${questionIndex}_opt${optionIndex}`}>{option}</label>
                                </div>
                                </label>
                            );
                            }
                            return null; // Membuat elemen gambar jadi null
                        })}
                        </div>
                    </div>
                ))}
                <div className="text-center md:py-[30px] xs:py-[15px]">
                    <span className="inline-block bg-[#A4161A] rounded-xl text-[#FFFFFF]">
                        <button
                        type="button"
                        className="font-capuchetrial xl:text-[35px] lg:text-[25px] xs:text-[10px] md:px-[50px] xs:px-[25px] md:py-[10px] xs:py-[5px]"
                        // disabled={!isAllAnswered()}
                        onClick={handleSubmit}>
                            Submit
                        </button>
                    </span>
                </div>
            </form>
        </div>
        <Footer/>
        </>
    );
};
export default MerchQuiz;