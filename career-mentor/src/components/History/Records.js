

import Confetti from 'react-confetti'


import React from 'react';
import { useState, useEffect } from 'react';
import { tokenValue } from '../User/Login';
import axios from 'axios';
import { toast } from 'react-toastify';


const Records = () => {
    const [records, setRecords] = useState([]);
    const showEngineeringFields = records.some(record => record.button === 0.0);
    const showMedicalFields = records.some(record => record.button === 1.0);
    const showBothFields = records.some(record => record.button === 2.0);
    const { width, height } = [300, 50]
    useEffect(() => {
        handlerecords();
    }, []);
    const handlerecords = async () => {
        try {
            const response = await axios.get(
                'http://127.0.0.1:8000/api/getscores/',

                {
                    headers: {
                        Authorization: `Token ${tokenValue}`,
                    },
                }

            );
            const fetchedRecords = response.data;
            setRecords(fetchedRecords);
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong. Hold on! we are checking")
        }
    };
    return (

        <div className="container  mx-auto p-4 mt-40">
            <Confetti
                width={width}
                height={height}
            />
            <h1 className="text-4xl text-pink-700 font-bold ">THE CAREER MENTOR </h1>
            <h2 className="text-2xl justify-between text-purple-700 font-bold mb-12">AN ARTIFICIAL INTELLIGENCE BASED CAREER COUNSELLOR</h2>

            <h2 className="text-5xl font-bold mb-8">Previous Records</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {records.map((record, index) => {
                    const engineeringFields = [
                        record.Engineering_Field1,
                        record.Engineering_Field2,
                        record.Engineering_Field3,
                        record.Engineering_Field4,
                        record.Engineering_Field5
                    ];
                    const medicalFields = [
                        record.Medical_Field1,
                        record.Medical_Field2,
                        record.Medical_Field3
                    ];

                    const barsData = [];



                    engineeringFields.forEach((field, index) => {
                        if (field !== "0") {
                            barsData.push({
                                label: `${field}`,
                                percentage: 90 - index * 10
                            });

                        }
                    });



                    medicalFields.forEach((field, index) => {
                        if (field !== "0") {
                            barsData.push({
                                label: `${field} `,
                                percentage: 90 - index * 10
                            });

                        }
                    });


                    return (
                        <div key={index}>
                            <div className="bg-white rounded-lg shadow-md p-4">
                                <h3 className="text-lg font-bold mb-2">Record {index + 1}</h3>
                                {barsData.map((bar, index) => (
                                    <div key={index} className="mb-4">
                                        <div className="flex items-center">
                                            <div className="w-48">{bar.label}</div>
                                            <div className="bg-gray-200 h-4 flex-grow ml-4">
                                                <div
                                                    className="bg-blue-500 h-full"
                                                    style={{ width: `${bar.percentage}%` }}
                                                ></div>
                                            </div>
                                            <div className="ml-4">{bar.percentage}%</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

    );
}

export default Records;