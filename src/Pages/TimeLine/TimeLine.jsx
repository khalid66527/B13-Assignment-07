import React, { useContext, useState } from 'react';
import { FriendContext } from '../../Context/FriendProvider';
import TimelineCard from '../../UI/TimeLineCart';
import ActivityRing from '../../UI/ActivityRing';

const TimeLine = () => {
    const { storeHistory } = useContext(FriendContext);
    const [filter, setFilter] = useState("all");

    const filteredData = storeHistory.filter(item => {
        if (filter === "all") return true;
        return item.type === filter;
    });

    return (
        <section className='bg-gray-100 min-h-screen'>
            <div className='container mx-auto space-y-5 py-8'>
                <h1 className='text-3xl font-bold'>Timeline :</h1>
                
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="select bg-white shadow-sm"
                >
                    <option value="all">All Timeline</option>
                    <option value="call">Call</option>
                    <option value="text">Text</option>
                    <option value="video">Video</option>
                </select>

                {/* Timeline Cards Section */}
                <div className='space-y-3 py-2'>
                    {filteredData.length > 0 ? (
                        filteredData.map((item, index) => (
                            <TimelineCard key={index} data={item} />
                        ))
                    ) : (
                        <div className="text-center py-10">
                            <p className="border-green-900 border-2 text-2xl text-center p-5 rounded-2xl inline-block">
                                No {filter} history found.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TimeLine;