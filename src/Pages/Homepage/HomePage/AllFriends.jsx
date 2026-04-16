import React, {  use } from 'react';
import FriendCart from '../../../UI/FriendCart';


const FriendsPromise = fetch("/Friends.json").then(res => res.json())

const AllFriends = () => {
    const friends =use(FriendsPromise)
    console.log(friends);
    return (
        <div className='container mx-auto '>
            <h1 className='font-bold text-2xl py-5'> Youe Friends: ({friends.length})</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                {
                    friends.map((friend , ind) => <FriendCart key={ind} friend={friend}></FriendCart>)
                }
            </div>
        </div>
    );
};

export default AllFriends;