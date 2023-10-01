

import React from 'react';
import Links from '../Links';
import hero1 from "../../images/hero1.jpg";
import hero2 from "../../images/hero2.jpg";
import hero3 from "../../images/hero3.jpg";
function Section2() {
    return (
        <div >
            <div className="max-w-48xl mx-auto  pt-10 relative">
                <div className="relative  overflow-hidden">
                    <div className="animation-container ">
                        <img
                            src={hero1}
                            alt="Image 1"
                            className="animation-image"
                        />
                        <img
                            src={hero2}
                            alt="Image 2"
                            className="animation-image"
                        />

                        <img
                            src={hero3}
                            alt="Image 3"
                            className="animation-image"
                        />
                        <img
                            src={hero1}
                            alt="Image 1"
                            className="animation-image"
                        />
                    </div>

                    <div className='overlay-content shadow-lg shadow-black-900'>

                        <div className="ml-20 mt-12 mr-20 mb-12 ">
                            <h1 className="text-2xl text-pink-700 font-bold mb-4">THE CAREER MENTOR</h1>
                            <h2 className="text-s justify-between text-purple-700 font-bold mb-4">AN ARTIFICIAL INTELLIGENCE BASED CAREER COUNSELLOR</h2>
                            <p className="mb-8 font-bold">Prepare yourself and get the best Career choices now!</p>

                            <Links
                                key="start-test"
                                to="/Login"
                                //Qto="/Survey"
                                className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mt-4"
                            >
                                Start Test
                            </Links>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Section2;
