import React from 'react';

const Error = ({ message = 'Failed to fetch data' }) => {
    return (
        <div className="fixed inset-0 bg-mainBlue flex items-center justify-center z-50">
            <div className="text-center px-6">
                <div className="mb-4 flex items-center justify-center">
<svg width="75px" height="75px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2.20164 18.4695L10.1643 4.00506C10.9021 2.66498 13.0979 2.66498 13.8357 4.00506L21.7984 18.4695C22.4443 19.6428 21.4598 21 19.9627 21H4.0373C2.54022 21 1.55571 19.6428 2.20164 18.4695Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 9V13" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 17.0195V17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </div>
                <h1 className="text-4xl font-bold text-red-600 mb-2 text-white">Oops!</h1>
                <p className="text-lg text-gray-700 mb-6 text-white">{message}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="px-6 py-2 bg-red-600 text-mainBlue rounded-lg hover:bg-red-700 transition bg-babyBlue"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
};

export default Error;