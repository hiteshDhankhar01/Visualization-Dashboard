import React from 'react';

const Home = () => {
    return (
        <div className="flex">
            {/* Dashboard */}
            <div className="w-1/3 h-screen bg-gray-200">
                {/* Dashboard content goes here */}
            </div>

            {/* Product Cards */}
            <div className="w-2/3">
                {/* Product cards and search bar goes here */}
            </div>
        </div>
    );
}

export default Home;
