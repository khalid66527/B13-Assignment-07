import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="text-center">
                <div className="mt-8">
                    <img
                        src="https://cdni.iconscout.com/illustration/premium/thumb/404-error-3709038-3119146.png"
                        alt="404 error"
                        className="w-72 mx-auto"
                    />
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold mt-4">
                    Page Not Found
                </h2>
                <p className="mt-2 text-gray-500">
                    Oops! The page you are looking for doesn't exist.
                </p>
                <Link to="/">
                    <button className="btn btn-primary mt-6">
                        Go Back Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;