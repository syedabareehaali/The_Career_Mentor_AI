import React, { useState } from 'react';
import axios from 'axios';
import Link from '../Links';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CreateAccount = () => {
    const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "AntiguaAndBarbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "BosniaAndHerzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "BurkinaFaso", "Burundi", "CaboVerde", "Cambodia", "Cameroon", "Canada", "CentralAfricanRepublic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "CostaRica", "Croatia", "Cuba", "Cyprus", "CzechRepublic", "Denmark", "Djibouti", "Dominica", "DominicanRepublic", "EastTimor", "Ecuador", "Egypt", "ElSalvador", "EquatorialGuinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "GuineaBissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "KoreaNorth", "KoreaSouth", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "MarshallIslands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "NewZealand", "Nicaragua", "Niger", "Nigeria", "NorthMacedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "PapuaNewGuinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "SaintKittsAndNevis", "SaintLucia", "SaintVincentAndTheGrenadines", "Samoa", "SanMarino", "SaoTomeAndPrincipe", "SaudiArabia", "Senegal", "Serbia", "Seychelles", "SierraLeone", "Singapore", "Slovakia", "Slovenia", "SolomonIslands", "Somalia", "SouthAfrica", "SouthSudan", "Spain", "SriLanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "TrinidadAndTobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "UnitedArabEmirates", "UnitedKingdom", "UnitedStates", "Uruguay", "Uzbekistan", "Vanuatu", "VaticanCity", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];
    const cities = ["Abidjan", "Abu Dhabi", "Abuja", "karachi", "Yaoundé", "Yerevan", "Zagreb", "Zürich"];
    const INVALID_USERNAME =
        'Enter a valid username[a-zA-Z0-9@/./+/-/_]';
    const INVALID_PASSWORD = 'Password should be atleast 6 digits in length';
    const INVALID_EMAIL = 'Enter a valid email';
    const VALIDATE_USERNAME_REGEX = /^[a-zA-Z0-9@/./+/-/_]{1,150}$/;
    const VALIDATE_EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z0-9]+\.)+[a-zA-Z]{2,}))$/;
    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [country, setCountry] = useState('');
    const [countryError, setCountryError] = useState('');
    const [city, setCity] = useState('');
    const [cityError, setCityError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [accountCreated, setAccountCreated] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    function togglePasswordVisibility() {
        setIsPasswordVisible((prevState) => !prevState);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        clearErrors();

        if (!username) {
            setUsernameError('Username is required');
            return;
        }

        if (!VALIDATE_USERNAME_REGEX.test(username)) {
            setUsernameError(INVALID_USERNAME);
            return;
        }

        if (!email) {
            setEmailError('Email is required');
            return;
        }

        if (!VALIDATE_EMAIL_REGEX.test(email)) {
            setEmailError(INVALID_EMAIL);
            return;
        }

        if (!password) {
            setPasswordError('Password is required');
            return;
        }
        if (!country) {
            setCountryError('Country is required');
            return;
        }
        if (!city) {
            setCityError('city is required');
            return;
        }

        if (password.length < 6) {
            setPasswordError(INVALID_PASSWORD);
            return;
        }

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register/', {
                username: username,
                email: email,
                password: password,
                country: country,
                city: city,
            });

            console.log(response.data);
            toast.success("Successfully Signed Up");
            setAccountCreated(true);
        } catch (error) {
            console.error(error);
            toast.error("Signup failed. Please check your credentials");
            setAccountCreated(false);
        }

        clearFields();
    };

    const clearErrors = () => {
        setUsernameError('');
        setEmailError('');
        setPasswordError('');
        setCityError("");
        setCountryError("");
    };

    const clearFields = () => {
        setUsername('');
        setEmail('');
        setCountry('');
        setCity('');
        setPassword('');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-300 mt-10">
            <div className="bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Create Account</h2>
                <div>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-purple-500"
                        />
                        {usernameError && <p className="text-red-500 text-sm">{usernameError}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                            E-mail Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-purple-500"
                        />
                        {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="country" className="block text-gray-700 font-bold mb-2">
                            Country
                        </label>
                        <select
                            id="country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-purple-500"
                        >
                            <option value="">Please select your country</option>
                            {countries.map((country) => (
                                <option key={country} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                    </div>
                    {/* Display country validation error */}
                    {countryError && <p className="text-red-500 text-sm">{countryError}</p>}

                    <div className="mb-4">
                        <label htmlFor="city" className="block text-gray-700 font-bold mb-2">
                            City
                        </label>
                        <select
                            id="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-purple-500"
                        >
                            <option value="">Please select your city</option>
                            {cities.map((city) => (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                    </div>
                    {/* Display city validation error */}
                    {cityError && <p className="text-red-500 text-sm">{cityError}</p>}

                    <div className="mb-4 flex-row">
                        <label htmlFor="password" className="flex block text-gray-700 font-bold mb-2">
                            Password
                            <button
                                className="flex inset-y-0 right-0 flex items-center px-4 text-gray-600"
                                onClick={togglePasswordVisibility}
                            >
                                {/* ...password visibility toggle button */}
                            </button>
                        </label>
                        <input
                            type={isPasswordVisible ? "text" : "password"}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-purple-500"
                        />
                        {/* Display password validation error */}
                        {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
                    </div>   <button
                        className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600"
                        onClick={handleSubmit}
                    >
                        CREATE ACCOUNT
                    </button>
                    <p className="text-blue-500 mt-4">
                        Already have an account?{' '}
                        <Link key="LOGIN" to="/Login" className="font-bold">
                            LOGIN
                        </Link>
                    </p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default CreateAccount;