import React from 'react';
import { FaPhone, FaVideo, FaComment } from "react-icons/fa";

const TimeLineCart = ({ data }) => {
    console.log(data, "datadata");
    const { name, next_due_date, type } = data
    return (
        <div>
  
            {type === "call" && (
                <div className="flex items-center gap-4 bg-white border rounded-2xl p-5">
                    <div className="">
                        <FaPhone className="text-green-900 text-3xl" />
                    </div>
                    <div className="">
                        <p className='text-xl'><span className='font-semibold text-xl'>Call</span> with  {name}</p>
                    <p className="text-gray-500">{next_due_date}</p>
                    </div>
                </div>
            )}


            {type === "text" && (
                <div className="flex items-center gap-4 bg-white border rounded-2xl p-5">
                    <div className="">
                        <FaComment className="text-green-900 text-3xl" />
                    </div>
                    <div className="">
                        <p className='text-xl'><span className='font-semibold text-xl'>Text</span> with  {name}</p>
                    <p className="text-gray-500">{next_due_date}</p>
                    </div>
                </div>
            )}

            {type === "video" && (
                <div className="flex items-center gap-4 bg-white border rounded-2xl p-5">
                    <div className="">
                        <FaVideo className="text-green-900 text-3xl" />
                    </div>
                    <div className="">
                        <p className='text-xl'><span className='font-semibold text-xl'>Video</span> with  {name}</p>
                    <p className="text-gray-500">{next_due_date}</p>
                    </div>
                </div>
            )}

            {!["call", "text", "video"].includes(type) && <p>No Activity Found</p>}
        </div>
    );
};

export default TimeLineCart;