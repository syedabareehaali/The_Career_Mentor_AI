import React from 'react';
import Logo from '../../images/logo2-r.png';
import Links from '../Links';
function Navbar() {
    const centerLinks = [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/About' },
        { label: 'Blogs', path: '/BlogSection' },
        { label: 'Contact Us', path: '/Contact' },
        // { label: 'profile', path: '/Profile' }
    ];
    const RightLinks = [

        { label: 'Login', path: '/Login' },

        { label: 'Create Account', path: '/CreateAccount' },
        // { label: 'Logout', path: '/' },
    ]

    const renderedCenterLinks = centerLinks.map((centerlink) => {
        return (<Links


            key={centerlink.label}
            to={centerlink.path}

            className="text-center text-purple-500 hover:text-pink-500 mx-2"
        >
            {centerlink.label}

        </Links>)
    });


    const renderedRightLinks = RightLinks.map((RightLink) => {
        return (<Links


            key={RightLink.label}
            to={RightLink.path}

            className="text-right text-purple-500 hover:text-pink-500 mx-2"
        >
            {RightLink.label}

        </Links>)
    });

    return (
        <nav className="bg-white py-4 px-8 flex justify-between items-center fixed top-0 w-full z-10">
            <div className="flex items-center">
                <div className="text-purple-500 text-xl font-bold">THE CAREER MENTOR</div>
                <img
                    src={Logo}// Replace with your logo image source
                    alt="Logo"
                    className="ml-2 h-14"
                />
            </div>
            <div className='font-bold '>
                {renderedCenterLinks}
            </div>
            <div className='font-bold '>
                {renderedRightLinks}
            </div>
        </nav>
    );
};

export default Navbar;
