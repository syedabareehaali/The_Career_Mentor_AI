import React from 'react';
import simg from '../../images/2secimg.jpg'
function TwoColumnSection() {
    return (
        <section className="py-16 bg-purple-100">
            {/* <div className="flex max-w-6xl mx-auto flex items-center justify"> */}
            <div className="grid grid-cols-2 max-w-8xl items-center gap-2">
                {/* <div className=" w-1/2"> */}
                <div className="p-20">
                    <h2 className="text-5xl   font-bold mb-6">THE CAREER MENTOR</h2>
                    <p className=' text-justify'>
                        THE CAREER MENTOR is a free online Career Counselling Service for students who are about to start their careers i.e. at the Undergraduate level. This web service is aimed at revolutionizing how students make their decisions regarding the prospective career streams .
                        The Career Mentor is a result of the personality traits and Intelligence Level of students belonging to different fields of Engineering and Medical fused together by experienced Computer Engineers using Artificial Intelligence Technology to generate the most optimal advice.Lastly, it promises that the underlying model used to generate advice improves as more and more students use it.We believe every student:
                        <p className=' text-justify'> Deserves an equal opportunity to receive quality Career Advice.
                            Needs to be well informed about the options they can explore.
                            Can realize their career goals with proper guidance.
                        </p >
                        Therefore, we encourage students to avail this service to understand what career streams are the perfect fit for them and, use the advice offered to them to focus on achieving their dream career goals realistically to reach their maximum potential in life.All advice dispensed by this web service has been approved by certified Career Counsellors. Receive your career advice- anytime, anywhere, at absolutely no cost!
                    </p>

                </div>
                <div className="p-20 ">
                    <img
                        src={simg} // Replace with your image source
                        alt="Section"
                        className="w-full h-auto rounded"
                    />
                </div>

            </div>
        </section >
    );
};

export default TwoColumnSection;