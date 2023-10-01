import React from 'react';
import A1 from '../../images/about1.svg';
import A2 from '../../images/about2.svg';
import A3 from '../../images/about1.svg';

function Section1() {

    return (
        <section className="flex-row bg-gradient-to-r pt-10 from-pink-100 via-indigo-100 to-purple-100 justify-center  ">
            <div className="flex  place-items-center p-10 justify-center space-x-8">
                <div className=" flex-column  justify-center bg-white p-4 rounded shadow hover:shadow-lg">
                    <img
                        src={A1}// Replace with your image source
                        alt="Image 1"
                        className=" w-30 h-30 object-cover p-4 rounded"
                    />
                    <div className=" text-center mt-4">
                        <h3 className="text-lg font-bold">Assess Yourself</h3>

                    </div>
                </div>
                <div className="  flex-column justify-center bg-white p-4 rounded shadow hover:shadow-lg">
                    <img
                        src={A2} // Replace with your image source
                        alt="Image 2"
                        className=" w-50 justify-center h-auto align-items justify-content object-cover p-4 rounded"
                    />
                    <div className="  text-center mt-4">
                        <h3 className="text-lg flex  justify-center font-bold">Choose  Career</h3>

                    </div>
                </div>
                <div className=" bg-white p-4  justify-center rounded shadow hover:shadow-lg">
                    <div className='items-stretch'><img
                        src={A3} // Replace with your image source
                        alt="Image 3"
                        className=" w-50 justify-center h-auto align-items justify-content object-cover p-4 rounded"
                    /></div>
                    <div className="text-center items-stretch mt-4">
                        <h3 className="text-lg flex  justify-center font-bold">Check Personality</h3>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section1;
// import React from 'react';
// import A1 from '../../images/about1.svg';
// import A2 from '../../images/about2.svg';
// import A3 from '../../images/about3.jpg';

// function Section1() {
//     return (
//         <section className=" justify-center py-8">
//             <div className=" w-35 space-x-8">
//                 <div className="flex-grow bg-white p-4 rounded shadow card">
//                     <div className="flex items-center justify-center h-4/5">
//                         <img
//                             src={A1}
//                             alt="Image 1"
//                             className="w-auto h-auto object-cover rounded"
//                         />
//                     </div>
//                     <div className="text-center mt-4">
//                         <h3 className="text-lg font-bold">Card 1</h3>
//                         <p>assess yourself</p>
//                     </div>
//                 </div>
//                 <div className="flex-grow bg-white p-4 rounded shadow card">
//                     <div className="flex items-center justify-center h-4/5">
//                         <img
//                             src={A2}
//                             alt="Image 2"
//                             className="w-auto h-auto object-cover rounded"
//                         />
//                     </div>
//                     <div className="text-center mt-4">
//                         <h3 className="text-lg font-bold">Card 2</h3>
//                         <p>choose your career rightly</p>
//                     </div>
//                 </div>
//                 <div className="flex-grow bg-white p-4 rounded shadow card">
//                     <div className="flex items-center justify-center h-4/5">
//                         <img
//                             src={A1}
//                             alt="Image 3"
//                             className="w-auto h-auto object-cover rounded"
//                         />
//                     </div>
//                     <div className="text-center mt-4">
//                         <h3 className="text-lg font-bold">Card 3</h3>
//                         <p>check your personality traits</p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Section1;
