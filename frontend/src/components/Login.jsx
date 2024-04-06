import React, { useState } from 'react';
import githubImg from '../assets/image/github.png'
import facebookImg from '../assets/image/facebook.png'
import googleImg from '../assets/image/google.png'
import twitterImg from '../assets/image/twitter.png'
import {  useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('admin@demo.com');
    const [password, setPassword] = useState('admin');

    const handleSubmit = () => {
        localStorage.setItem('user', email);
       navigate("/")
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white ">
            <div className="max-w-md px-4 py-8 ">
                <h2 className="text-2xl font-semibold  mb-2">Welcome to Blackcoffer! <span role="img" aria-label="wave">👋🏻</span></h2>
                <p className="text-sm text-gray-600 text-center mb-6">Please sign in to your account and start the adventure</p>
                <div className="text-sm mb-6 bg-[#E8E7FD] p-2 rounded-md text-[#7367F0]">
                    <p className="mb-2">Admin Email: <b>admin@demo.com</b> / Pass: <b>admin</b></p>
                    <p>Client Email: <b>client@demo.com</b> / Pass: <b>client</b></p>
                </div>
                <form className="space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-sm text-gray-600">Email</label>
                        <input type="email" id="email" className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-primary" value={email}    onChange={(e)=> setEmail(e.target.value)} required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-sm text-gray-600">Password</label>
                        <input type="password" id="password" className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-primary" value={password} onChange={(e)=> setPassword(e.target.value)} required />
                        
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <input type="checkbox" id="rememberMe" name="rememberMe" className="form-radio h-4 w-4 text-blue-600 border-gray-300 rounded" />
                            <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-600">Remember me</label>
                        </div>
                        <a href="#" className="text-sm text-primary">Forgot Password?</a>
                    </div>
                    <button className="bg-primary text-white py-2 rounded focus:outline-none focus:bg-blue-600 w-full" onClick={handleSubmit}>Submit</button>
                    <p className="text-sm text-gray-600 text-center">New on our platform? <a className="text-primary">Create an account</a></p>
                </form>
                <div className='relative flex flex-col text-center my-6'>
                    <p className='c absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2'>or</p>
                    <div className='border mt-2'></div>
                </div>
                <div className="flex justify-center mt-4 gap-2">
                    <img src={facebookImg} alt="in" className="w-6 h-6 mx-1 rounded-full" />
                    <img src={twitterImg} alt="tw" className="w-6 h-6 mx-1 rounded-full" />
                    <img src={githubImg} alt="go" className="object-cover w-6 h-6 mx-1 rounded-full" />
                    <img src={googleImg} alt="gi" className="w-6 h-6 mx-1 rounded-full" />
                </div>
            </div>
        </div>
    );
}

export default Login;


// import React from 'react'

// const Login = () => {
//     return (
//         <div>
//             <h2>Welcome to vuexy! 👋🏻</h2>
//             <p>Please sign-in to your account and start the adventure</p>
//             <div>
//                 <p>Admin Email: <b>admin@demo.com </b>/ Pass: <b>admin</b></p>
//                 <p>Client Email: <b>client@demo.com </b>/ Pass: <b>client</b></p>
//             </div>



//             <div>
//                 <form action="">
//                     Email
//                     This field is required
//                     Password
//                     Forgot Password?
//                     New on our platform? Create an account
//                     or

//                 </form>
//             </div>


//             Email
//             This field is required
//             Password
//             Forgot Password?
//             New on our platform? Create an account
//             or

//             <button>Submit</button>

//             <div>
//                 <img src="" alt="instagram" />
//                 <img src="" alt="twiter" />
//                 <img src="" alt="google" />
//                 <img src="" alt="github" />
                
//             </div>
//         </div>
//     )
// }

// export default Login
