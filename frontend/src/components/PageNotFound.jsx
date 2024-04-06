import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
                <h2 className="text-xl font-semibold text-gray-700 mb-8">Page Not Found</h2>
                <p className="text-gray-600">Sorry, the page you are looking for does not exist.</p>
                <button className='bg-primary p-2 text-lg rounded-md text-white mt-2'>
                    <NavLink to={"/"}>
                        Go to Home
                    </NavLink>
                </button>
            </div>
        </div>
    );
};

export default PageNotFound;
