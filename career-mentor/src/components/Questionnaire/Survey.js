import React, { useState } from 'react';
import Link from '../Links';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { tokenValue } from '../User/Login';
import { dummy_answers } from '../../data/dummy-response';
let data = null;
export const setSurveyData = (responseData) => {
    data = responseData;
};

export const getSurveyData = () => {
    return data;
};
const Survey = ({ questions }) => {
    const [Myanswers, setMyAnswers] = useState({});
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const [selectedButton, setSelectedButton] = useState(null);

    const handleAnswer = (questionId, value) => {
        setMyAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionId]: value,
        }));
    };
    const handleButtonSelection = (value) => {
        setSelectedButton(value);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();

        const answers = {};
        questions.forEach((question) => {
            const answer = Myanswers[question.id];
            if (answer) {
                answers[question.id] = question.answerOptions[answer].score;
            } else {
                answers[question.id] = 0;
            }

        });
        answers['options'] = selectedButton;
        console.log({ answers })


        try {
            const response = await axios.post('http://127.0.0.1:8000/api/scores/', {

                answers


            }, {
                headers: {
                    Authorization: `Token ${tokenValue}`,
                },

            });

            // Handle success response

            const responseData = response.data;
            toast.success('Wonderful! your answers have been processed in AI model')
            setSurveyData(responseData);

        }
        catch (error) {
            console.log(error)

            toast.error(error?.request?.response?.detail)

            // console.error(error); // Handle error response
        }
    };


    const handleOptionClick = (questionId, optionIndex) => {
        handleAnswer(questionId, optionIndex);
    };

    const isAllQuestionsAnswered = Object.keys(Myanswers).length === questions.length;

    const getUnansweredQuestionNumbers = () => {

        const unansweredIndices = questions
            .filter((question) => !Myanswers.hasOwnProperty(question.id))
            .map((question) => question.id);

        return unansweredIndices.length;
    }
    return (
        <div className="container mx-auto p-4 mt-40">

            <h1 className="text-4xl font-bold ">THE CAREER MENTOR</h1>
            <h2 className="text-2xl justify-between text-pink-700 font-bold mb-12">AN ARTIFICIAL INTELLIGENCE BASED CAREER COUNSELLOR</h2>

            <div className="bg-purple-200 p-4  rounded-lg mb-8">
                <h1 className='text-2xl font-bold text-black-500'>Note: </h1>
                <ul><li>Please choose the answer that best describes you</li>
                    <li>It is advised not to spend much time on choosing the right option.</li>
                    <li>All information will be used solely for educational and research purposes.</li>
                    <li> We will NOT, in any circumstances, share your information with other individuals or organizations. </li>
                </ul>
            </div>
            <div className="flex">
                <button
                    type="button"
                    onClick={() => handleButtonSelection(1.0)}
                    className={`bg-purple-500 ${selectedButton === 1.0 ? 'bg-pink-700 text-black-500' : 'purple-500'} hover:bg-pink-700 mt-4 mr-8 mb-8 text-white font-bold py-2 px-4 rounded 
                        }`}
                >
                    Medical
                </button>

                <button
                    type="button"
                    onClick={() => handleButtonSelection(0.0)}
                    className={`bg-${selectedButton === 0.0 ? 'pink-700' : 'purple-500'} hover:bg-pink-700 mt-4 mr-8 mb-8 text-white font-bold py-2 px-4 rounded 
                        }`}
                >
                    Engineering
                </button>

                <button
                    type="button"
                    onClick={() => handleButtonSelection(2.0)}
                    className={`bg-${selectedButton === 2.0 ? 'pink-700' : 'purple-500'} hover:bg-pink-700 mt-4 mr-8 mb-8 text-white font-bold py-2 px-4 rounded 
                        }`}
                >
                    Either
                </button>
            </div>
            <form onSubmit={handleSubmit}>
                {questions.map((question, index) => (
                    <div
                        key={index}
                        className="bg-purple-200 p-4 rounded-lg mb-8"
                        style={{ marginTop: index > 0 ? '-1rem' : '0' }}
                    >
                        <h2 className="text-lg font-bold mb-2">
                            ({index + 1}) {question.text}
                        </h2>
                        <div className="flex flex-wrap">
                            {question.answerOptions.map((option, optionIndex) => (
                                <label
                                    key={index}
                                    className={`flex items-center mr-4 mb-2 ${Myanswers[question.id] === optionIndex ? 'text-pink-500 font-bold' : ''
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        name={question.id}
                                        value={optionIndex}
                                        checked={Myanswers[question.id] === optionIndex}
                                        onChange={() => handleOptionClick(question.id, optionIndex)}
                                        className="mr-2"
                                    />
                                    {option.text}
                                </label>
                            ))}
                        </div>
                    </div>
                ))}


                <Link
                    key="submit"
                    to='/History'  >
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        // disabled={!isAllQuestionsAnswered}
                        className="bg-purple-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Submit



                    </button>
                </Link>

                {/* Display unanswered question numbers */}
                {!isAllQuestionsAnswered && (
                    <p className="text-red-500 mt-4">
                        Remaining question count(s): {getUnansweredQuestionNumbers()}
                    </p>
                )}
            </form>
            <ToastContainer />
        </div>
    );
};


export default Survey;