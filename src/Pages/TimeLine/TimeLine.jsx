import React, { useContext } from 'react';
import { FriendContext } from '../../Context/FriendProvider';
import FriendCart from '../../UI/FriendCart';
import TimelineCard from '../../UI/TimeLineCart';

const TimeLine = () => {
    const { storeHistory } = useContext(FriendContext)
    
    console.log(storeHistory, "storeHistory");

    return (
        <section className='bg-gray-100'>
            <div className=' container mx-auto space-y-3 py-2'>
                <h1 className='text-2xl font-bold'>Timeline :</h1>
                <select defaultValue="filter" className="select bg-white">
                    <option value="filter" disabled>
                        Filter timeline
                    </option>
                    <option value="call">Call</option>
                    <option value="text">Text</option>
                    <option value="video">Video</option>
                </select>
                <section className='bg-gray-100'>
                    <div className='container mx-auto space-y-3 py-2'>


                        {storeHistory.map(item => (
                            <TimelineCard key={item.id + item.date} data={item} />
                        ))}
                    </div>
                </section>
            </div>

        </section>
    );
};

export default TimeLine;