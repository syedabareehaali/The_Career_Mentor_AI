import React from 'react';
import Links from '../Links';
function BlogSection(props) {

    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-4xl mx-auto my-20">
                <h2 className="text-8xl text-purple-700 font-bold mb-8">Blogs...</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="bg-white rounded shadow p-6 overflow-y-auto max-h-64">
                        <h3 className="text-lg text-pink-700 font-bold mb-4">

                            Importance of Career Counselling for Students</h3>
                        <p className="text-gray-600 mb-4">
                            Career counselling is a way to interact with students about their future plans. It helps students make decisions for self-discovery and self-actualization. Simply put, free career counseling online is the process of advising students on "how to study" and "what to study". But, how does one decide this? Why is this important?In the old days, choosing a career was easy. Numbered and shiny options, fewer still. Many sought advice from parents and other older family members.
                        </p>

                        <Links
                            key="Blog"
                            to='/BlogSection'
                            className="text-purple-500 font-bold"
                        >
                            Read More
                        </Links>
                    </div>
                    <div className="bg-white rounded shadow p-6 overflow-y-auto max-h-64">
                        <h3 className="text-lg text-pink-700 font-bold mb-4">What does the future of Career Counselling look and feel like?</h3>
                        <p className="text-gray-600  mb-4">
                            The future and present of career counseling are here. We can take inspiration from Finland's strong education system and give autonomy to our counselors and teachers so that they can adapt their services to the needs of students. The World Development Report states that a strong system to promote innovative learning is micro-level, systemic knowledge interventions. This includes new pedagogical techniques, digital technologies that enhance learning, and strategies for keeping all stakeholders motivated.
                        </p>

                        <Links
                            key="Blog"
                            to='/BlogSection'
                            className="text-purple-500 font-bold"
                        >
                            Read More
                        </Links>
                    </div>
                    <div className="bg-white rounded shadow p-6 overflow-y-auto max-h-64">
                        <h3 className="text-lg text-pink-700 font-bold mb-4">What is Career Guidance And Why It's Important?</h3>
                        <p className="text-gray-600 mb-4">
                            The basic objective of career guidance is to make individuals aware of their occupational options. It is a process that includes the individual's job demands and abilities. Thus, you no longer need to stress about short-term and long-term goals. Some asks teachers for help. Some go with whatever course their friends choose. Some just leave it to the grades or luck. Very few people really know what they want to do and pursue it against all odds.</p>

                        <Links
                            key="Blog"
                            to='/BlogSection'
                            className="text-purple-500 font-bold"
                        >
                            Read More
                        </Links>
                    </div>
                </div>
            </div>
        </section>
    );
};



export default BlogSection;