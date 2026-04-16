import React, { use, useContext } from 'react';
import { useParams } from 'react-router';
import { FaPhone, FaComment, FaVideo, FaArchive, FaTrash, FaBell } from 'react-icons/fa';
import { FriendContext } from '../../Context/FriendProvider';



const FriendsPromise = fetch("/Friends.json").then(res => res.json())


const FriendDetails = () => {
    const { id } = useParams();
    // console.log(id);

    const friends = use(FriendsPromise)
    // console.log(friends);
    const expectedFriend = friends.find(friend => friend.id == id)
    // console.log(expectedFriend);

    const { email, picture, name, status, tags, bio, days_since_contact, goal, next_due_date } = expectedFriend;


  

    const {handleTimeLineCall ,handleTimeLineVideo,handleTimeLineText} =useContext(FriendContext)
    // console.log(handleTimeLineCall);

  



        return (
            <div className="my-15">
                <div className="max-w-5xl mx-auto p-6 py-15 bg-gray-50 ">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
                        <div className="lg:col-span-1 space-y-6">

                            <div className="bg-white rounded-3xl p-6 shadow-sm">
                                <div className="flex flex-col items-center text-center">
                                    <img
                                        src={picture}
                                        alt={name}
                                        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md mb-4"
                                    />
                                    <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>

                                    <div className="mt-3 flex gap-2">
                                        <span className="px-4 py-1 bg-red-700 text-white text-sm font-medium rounded-full">
                                            {status}
                                        </span>
                                        <span className="px-4 py-1 bg-green-700 text-white text-sm font-medium rounded-full">
                                            {tags}
                                        </span>
                                    </div>

                                    <p className="mt-4 text-gray-600 italic text-sm">
                                        " {bio} "
                                    </p>
                                    <p className="text-xs text-gray-500 mt-2">Preferred: {email}</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl p-5 shadow-sm space-y-2">
                                <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-2xl text-left">
                                    <FaBell className="text-gray-500" />
                                    <span className="text-sm">Snooze 2 Weeks</span>
                                </button>
                                <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-2xl text-left">
                                    <FaArchive className="text-gray-500" />
                                    <span className="text-sm">Archive</span>
                                </button>
                                <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-2xl text-left text-red-600">
                                    <FaTrash className="text-red-500" />
                                    <span className="text-sm">Delete</span>
                                </button>
                            </div>
                        </div>

                        <div className="lg:col-span-2 space-y-6">

   
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-white rounded-3xl p-6 text-center shadow-sm">
                                    <div className="text-4xl font-bold text-gray-800">{days_since_contact}</div>
                                    <div className="text-sm text-gray-500 mt-1">Days Since Contact</div>
                                </div>

                                <div className="bg-white rounded-3xl p-6 text-center shadow-sm">
                                    <div className="text-4xl font-bold text-gray-800">{goal}</div>
                                    <div className="text-sm text-gray-500 mt-1">Goal (Days)</div>
                                </div>

                                <div className="bg-white rounded-3xl p-6 text-center shadow-sm">
                                    <div className="text-3xl font-bold text-gray-800">
                                        <span>{next_due_date}</span>
                                    </div>
                                    <div className="text-sm text-gray-500 mt-1">Next Due</div>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl p-6 shadow-sm">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-semibold text-lg">Relationship Goal</h3>
                                        <p className="text-gray-600 mt-2">Connect every {goal} days</p>
                                    </div>
                                    <button className="px-5 py-2 border border-gray-300 rounded-2xl text-sm hover:bg-gray-50">
                                        Edit
                                    </button>
                                </div>
                            </div>

   
                            <div className="bg-white rounded-3xl p-6 shadow-sm">
                                <h3 className="font-semibold text-lg mb-5">Quick Check-In</h3>
                                <div className="grid grid-cols-3 gap-4">
                                    <button onClick={() => handleTimeLineCall(expectedFriend)} className="flex flex-col items-center gap-2 p-6 bg-gray-50 hover:bg-gray-100 rounded-3xl transition-colors">
                                        <FaPhone className="text-3xl text-emerald-600" />
                                        <span className="text-sm font-medium">Call</span>
                                    </button>

                                    <button onClick={() => handleTimeLineText(expectedFriend)} className="flex flex-col items-center gap-2 p-6 bg-gray-50 hover:bg-gray-100 rounded-3xl transition-colors">
                                        <FaComment className="text-3xl text-emerald-600" />
                                        <span className="text-sm font-medium">Text</span>
                                    </button>

                                    <button onClick={() => handleTimeLineVideo(expectedFriend)} className="flex flex-col items-center gap-2 p-6 bg-gray-50 hover:bg-gray-100 rounded-3xl transition-colors">
                                        <FaVideo className="text-3xl text-emerald-600" />
                                        <span className="text-sm font-medium">Video</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    export default FriendDetails;