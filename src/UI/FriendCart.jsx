import React from 'react';

const FriendCart = ({ friend }) => {
    const { days_since_contact, status, picture, name,tags } = friend
    return (
        <div className="bg-white space-y-2  px-8 pb-10 rounded-3xl  text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <img src={picture} alt="" className='rounded-full block mx-auto' />
            <h2 className='font-bold text-2xl'>{name}</h2>
            <p className='text-xl'>{days_since_contact}d ago</p>

            <p className='rounded-2xl inline-block bg-yellow-200 py-1 px-2'>{tags}</p>
            <button
                className={`w-full py-3 rounded-2xl text-white font-medium text-sm transition-colors ${status === "on-track" ? "bg-green-800": status === "almost due" ? "bg-yellow-600" : "bg-red-700"}`}
            >
                {
                    status === "on-track"
                        ? "On Track"
                        : status === "almost due"
                            ? "Keep in touch"
                            : "Reach out now"
                }
            </button>

        </div>
    );
};

export default FriendCart;