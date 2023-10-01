// import React from 'react';
// import { useState } from 'react';
// import { ToastContainer } from 'react-toastify';
// import { getSurveyData } from '../Questionnaire/Survey';

// import Links from '../Links';

// function History() {


//     const data = getSurveyData();

//     const intelligenceData = data ? [

//         data.sensing, data.introvert, data.Judging, data.Thinking

//     ] : [];
//     const intelligenceDataLabels = [
//         'Intuitive', 'Introvert', 'Perceiving', 'Feeling'

//     ];
//     const [OpenRecords, setOpenRecords] = useState(true);
//     // Extracting engineering and medical fields from the data object
//     const engineeringFields = data ? [
//         data.Engineering_Field1,
//         data.Engineering_Field2,
//         data.Engineering_Field3,
//         data.Engineering_Field4,
//         data.Engineering_Field5
//     ] : [];
//     const medicalFields = data ? [
//         data.Medical_Field1,
//         data.Medical_Field2,
//         data.Medical_Field3
//     ] : [];

//     const buttonValue = data ? data.button : null;
//     let barsData = [];

//     if (buttonValue === 0) {
//         engineeringFields.forEach((field, index) => {
//             if (field) {
//                 barsData.push({
//                     label: field,
//                     percentage: 90 - index * 10
//                 });
//             }
//         });
//     } else if (buttonValue === 1) {
//         medicalFields.forEach((field, index) => {
//             if (field) {
//                 barsData.push({
//                     label: field,
//                     percentage: 90 - index * 10
//                 });
//             }
//         });
//     } else if (buttonValue === 2) {
//         engineeringFields.forEach((field, index) => {
//             if (field) {
//                 barsData.push({
//                     label: field,
//                     percentage: 90 - index * 10
//                 });
//             }
//         });
//         medicalFields.forEach((field, index) => {
//             if (field) {
//                 barsData.push({
//                     label: field,
//                     percentage: 90 - index * 10
//                 });
//             }
//         });
//     }

//     return (
//         <div className="container mx-auto p-4 mt-20">
//             <h1 className="text-4xl text-pink-500 font-bold">THE CAREER MENTOR</h1>
//             <h2 className="text-s justify-between text-purple-700 font-bold mb-12">AN ARTIFICIAL INTELLIGENCE BASED CAREER COUNSELLOR</h2>


//             <div>
//                 <h2 className="text-2xl justify-center text-black-700 font-bold my-12">TOP CAREERS</h2>

//                 {barsData.map((bar, index) => (
//                     <div key={index} className="mb-4">
//                         <div className="flex items-center">
//                             <div className="w-48">{bar.label}</div>
//                             <div className="bg-purple-100 h-4 flex-grow ml-4">
//                                 <div
//                                     className="bg-pink-500 h-full"
//                                     style={{ width: `${bar.percentage}%` }}
//                                 ></div>
//                             </div>
//                             <div className="ml-4">{bar.percentage}%</div>
//                         </div>
//                     </div>
//                 ))}
//                 <div>
//                     <h2 className="text-2xl justify-center text-black-700 font-bold my-12">YOUR PROFILE</h2>
//                     <div className="flex flex-wrap">


//                         {intelligenceDataLabels.map((label, index) => (
//                             <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-4">

//                                 <div className="bg-white rounded-lg shadow-md p-6 mb-4">
//                                     <h3 className="text-lg text-purple-700 font-bold mb-2">{label}</h3>
//                                     <p className="text-gray-700">
//                                         Percentage: {(intelligenceData[index] * 100).toFixed(2)}%
//                                     </p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     <div className='bg-pink-600 mt-20 rounded-xl '>
//                         <h1 className="text-white text-2xl font-bold mx-3 pt-10 ">Attention:</h1>
//                         <h2 className="text-white text-sm font-bold pb-5 mx-3 "> Embark on career insights with our AI based Career Mentor, influenced by psychological theories. These suggestions are just a starting point. Your unique qualities shape your path. Blend our guidance with your introspection and expert input for a comprehensive career exploration.</h2>
//                     </div>  </div>

//                 <div className='my-10'>

//                     <Links
//                         key="history"
//                         to={OpenRecords ? "/Record" : "/History"}

//                         className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600"
//                     ><button
//                         type="button"
//                         onClick={() => setOpenRecords(true)}

//                     >View Records
//                         </button>

//                     </Links>

//                 </div>
//                 <ToastContainer />
//             </div >
//         </div>
//     );

// }
// export { History };









import React from 'react';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Records from './Records';
import { getSurveyData } from '../Questionnaire/Survey';

import Links from '../Links';

function History() {


 const data = getSurveyData();

const intelligenceData = data ? [

 data.sensing, data.introvert, data.Judging, data.Thinking


 ] : [];
// //     //  const totalIntelligence = intelligenceData.reduce((sum, intelligence) => sum + intelligence, 0);
     const intelligenceDataLabels = [
        'Intuitive', 'Introvert', 'Perceiving', 'Feeling'
// //         // 'Logical Intelligence', 'Nature Intelligence', 'Visual Intelligence',
// //         // 'Musical Intelligence', 'Body Intelligence', 'Interpersonal Intelligence',
// //         // 'Intrapersonal Intelligence', 'Verbal Intelligence', 'Existential Intelligence'
     ];
const [OpenRecords, setOpenRecords] = useState(true);
// //     // Extracting engineering and medical fields from the data object
    const engineeringFields = data ? [
        data.Engineering_Field1,
        data.Engineering_Field2,
        data.Engineering_Field3,
        data.Engineering_Field4,
        data.Engineering_Field5
    ] : [];
    const medicalFields = data ? [
        data.Medical_Field1,
        data.Medical_Field2,
        data.Medical_Field3
    ] : [];

    const buttonValue = data ? data.button : null;
    let barsData = [];

    if (buttonValue === 0) {
        engineeringFields.forEach((field, index) => {
            if (field) {
                barsData.push({
                    label: field,
                    percentage: 90 - index * 10
                });
            }
        });
    } else if (buttonValue === 1) {
        medicalFields.forEach((field, index) => {
            if (field) {
                barsData.push({
                    label: field,
                    percentage: 90 - index * 10
                });
            }
        });
    } else if (buttonValue === 2) {
        engineeringFields.forEach((field, index) => {
            if (field) {
                barsData.push({
                    label: field,
                    percentage: 90 - index * 10
                });
            }
        });
        medicalFields.forEach((field, index) => {
            if (field) {
                barsData.push({
                    label: field,
                    percentage: 90 - index * 10
                });
            }
        });
    }

    return (
        <div className="container mx-auto p-4 mt-20">
            <h1 className="text-4xl text-pink-500 font-bold">THE CAREER MENTOR</h1>
            <h2 className="text-s justify-between text-purple-700 font-bold mb-12">AN ARTIFICIAL INTELLIGENCE BASED CAREER COUNSELLOR</h2>


            <div>
                <h2 className="text-2xl justify-center text-black-700 font-bold my-12">TOP CAREERS</h2>

                {barsData.map((bar, index) => (
                    <div key={index} className="mb-4">
                        <div className="flex items-center">
                            <div className="w-48">{bar.label}</div>
                            <div className="bg-purple-100 h-4 flex-grow ml-4">
                                <div
                                    className="bg-pink-500 h-full"
                                    style={{ width: `${bar.percentage}%` }}
                                ></div>
                            </div>
                            <div className="ml-4">{bar.percentage}%</div>
                        </div>
                    </div>
                ))}
                <div>
                    <h2 className="text-2xl justify-center text-black-700 font-bold my-12">YOUR PROFILE</h2>
                    <div className="flex flex-wrap">


                        {intelligenceDataLabels.map((label, index) => (
                            <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-4">

                                <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                                    <h3 className="text-lg text-purple-700 font-bold mb-2">{label}</h3>
                                    <p className="text-gray-700">
                                        Percentage: {(intelligenceData[index] * 100).toFixed(2)}%
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='bg-pink-600 mt-20 rounded-xl '>
                        <h1 className="text-white text-2xl font-bold mx-3 pt-10 ">Attention:</h1>
                        <h2 className="text-white text-sm font-bold pb-5 mx-3 "> Embark on career insights with our AI based Career Mentor, influenced by psychological theories. These suggestions are just a starting point. Your unique qualities shape your path. Blend our guidance with your introspection and expert input for a comprehensive career exploration.</h2>
                    </div>  </div>

                <div className='my-10'>

                    <Links
                        key="history"
                        to={OpenRecords ? "/Record" : "/History"}

                        className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600"
                    ><button
                        type="button"
                        onClick={() => setOpenRecords(true)}

                    >View Records
                        </button>

                    </Links>

                </div>
                <ToastContainer />
            </div >
        </div>
    );

 }
 export { History };



