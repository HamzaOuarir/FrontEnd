import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../Styles/Login.css';
import lg from "../images/AppImages/lg1.png";

import Loading from "../Loading";
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        // Check if a token exists in local storage
        const token = localStorage.getItem('token');
        
        if (token) {
            // Redirect to the home page if a token exists
            window.location.href = '/';
        }
    }, []); // Empty dependency array to run this effect once when the component mounts


   const handleLogin = async (e) => {
        e.preventDefault();
        
        const credentials = {
            email,
            password
        };
console.log(email,password)
        try {
            const response = await axios.post('https://mernbackend-vhvd.onrender.com/api/users/login', credentials);
            const { token, user } = response.data;
            
            // Store the token and user data in local storage
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
           
            window.location.href = '/HomeAdmin';

        } catch (error) {
            console.log(error)
            setErrorMessage('Invalid credentials. Please try again.'); // Update the error message state
        }
    };
    return (
        <div className="login-container">
            <Loading dta={[1]}/>
            <div className="logo">
                <a href="/"><img src={lg} width="100%" alt="Logo" /></a>
            </div>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-field"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-field"
                />
                <button type="submit" className="login-button">Login</button>
                
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                
               
            </form>
        </div>
    );
}

export default Login;
