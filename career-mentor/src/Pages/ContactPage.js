import React, { useState } from 'react';
import WaveBackground from '../utils/Wavebackground';
const ContactPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [review, setReview] = useState('');

    const handleContactSubmit = (e) => {
        e.preventDefault();
        // Perform contact form submission logic here
        console.log('Contact form submitted');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        // Perform review submission logic here
        console.log('Review submitted:', review);

        // Reset form field
        setReview('');
    };

    return (
        <>

            <div className="flex  flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-l from-pink-300 via-purple-100 to-pink-200 bg-scroll animate-gradient">

                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mx-4 md:mx-8">
                    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h2 className="text-2xl font-bold mb-4">Contact Counsellor</h2>
                        <form onSubmit={handleContactSubmit}>
                            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                placeholder="Enter your name"
                                onChange={(e) => setName(e.target.value)}
                                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-purple-500"
                                required
                            />
                            <label htmlFor="email" className="block text-gray-700 font-bold mt-4 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-purple-500"
                                required
                            />
                            <label htmlFor="message" className="block text-gray-700 font-bold mt-4 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder=""
                                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-purple-500"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 mt-4"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-2/3 xl:w-3/4 mx-4 md:mx-8">
                    <div className="bg-white rounded-lg w-full shadow-lg p-8">
                        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
                        <form onSubmit={handleReviewSubmit}>
                            <label htmlFor="review" className="block text-gray-700 font-bold mb-2">
                                Add Your Review
                            </label>
                            <textarea
                                id="review"
                                value={review}
                                onChange={(e) => setReview(e.target.value)}
                                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-purple-500"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 mt-4"
                            >
                                Submit Review
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </>)
};

export default ContactPage;
