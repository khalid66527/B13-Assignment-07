import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className="bg-white  shadow-sm overflow-hidden">


            {/* Main Banner Content */}
            <div className="px-8 py-10 text-center">
                <h1 className="text-4xl font-semibold text-gray-800 mb-3">
                    Friends to keep close in your life
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                {/* Add a Friend Button */}
                <div className="mt-8">
                    <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-xl font-medium flex items-center gap-2 mx-auto transition-all active:scale-95">
                        <FaPlus />
                        Add a Friend
                    </button>
                </div>
            </div>

            {/* Stats Section */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-8 pb-10 container mx-auto">
                <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                    <div className="text-4xl font-bold text-emerald-700">10</div>
                    <div className="text-sm text-gray-500 mt-1">Total Friends</div>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                    <div className="text-4xl font-bold text-emerald-700">3</div>
                    <div className="text-sm text-gray-500 mt-1">On Track</div>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                    <div className="text-4xl font-bold text-emerald-700">6</div>
                    <div className="text-sm text-gray-500 mt-1">Need Attention</div>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                    <div className="text-4xl font-bold text-emerald-700">12</div>
                    <div className="text-sm text-gray-500 mt-1">Interactions This Month</div>
                </div>
            </div>


        </div>
    );
};

export default Banner;