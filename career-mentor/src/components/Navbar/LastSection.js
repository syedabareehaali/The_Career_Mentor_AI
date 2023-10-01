import React from 'react';
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube } from "react-icons/ti";
import Logo from '../../images/logo2-r.png';

function LastSection(props) {
    return (
        <section className="bg-gray-900 text-white py-10 px-20 ">
            <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
                <div className="flex items-center mb-4">
                    <div className="text-4xl font-bold">CAREER MENTOR</div>
                    <img src={Logo} alt="Logo" className="ml-4 h-14 w-14 " />
                </div>
                <div className="flex justify-center  mb-4">
                    <a href="/" className="block mx-4  items-center">
                        <TiSocialFacebook size="2rem" />
                    </a>
                    <a href="/" className="block mx-4  items-center">
                        <TiSocialTwitter size="2rem" />
                    </a>
                    <a href="/" className="block mx-4  items-center">
                        <TiSocialInstagram size="2rem" />
                    </a>
                    <a href="/" className="block mx-4  items-center">
                        <TiSocialLinkedin size="2rem" />
                    </a>
                    <a href="/" className="block mx-4 items-center">
                        <TiSocialYoutube size="2rem" />
                    </a>
                </div>
                <div className="flex text-center mt-4 mb-4">
                    <a href="/" className="block mx-4 text-purple-500 mb-2">
                        Terms of Use
                    </a>
                    <a href="/" className="block mx-4 text-purple-500 mb-2">
                        Privacy
                    </a>
                    <a href="/" className="block mx-4 text-purple-500 mb-2">
                        Security
                    </a>
                    <a href="/" className="block mx-4 text-purple-500 mb-2">
                        Legal &amp; Trademark Notice
                    </a>
                </div>
            </div>
        </section>
    );
}

export default LastSection;
