import { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip, ResponsiveContainer } from 'recharts';
import { FriendContext } from '../Context/FriendProvider';

const ActivityRing = () => {
    const { storeHistory } = useContext(FriendContext);
    if (!storeHistory || storeHistory.length === 0) {
        return (
            <div className="container mx-auto my-10 min-h-[47vh]">
                <h2 className="font-semibold text-3xl">Friendship Analytics</h2>

                <div className="container mx-auto my-10 text-center shadow-sm hover:shadow-md transition-all duration-300 py-10">
                    <h2 className="text-2xl font-semibold ">
                        No activity 
                    </h2>
                    <p className="text-gray-400 mt-2">
                        Start calling, texting or video chatting with friends!
                    </p>
                </div>
            </div>
        );
    }

    const callCount = storeHistory.filter(call => call.type === 'call').length;
    const textCount = storeHistory.filter(text => text.type === 'text').length;
    const videoCount = storeHistory.filter(video => video.type === 'video').length;

    const data = [
        { name: 'Call', value: callCount, fill: "#244d3f" },
        { name: 'Text', value: textCount, fill: "#7f37f5" },
        { name: 'Video', value: videoCount, fill: "#3bcc5c" },
    ];

    return (
        <div className="container mx-auto my-10">
            <h2 className="font-semibold text-3xl">Friendship Analytics</h2>

            <div className="my-10 py-5 container mx-auto rounded-3xl text-center shadow-sm hover:shadow-md transition-all duration-300">
                <h2 className="font-semibold text-xl text-left p-5">
                    By Interaction Type
                </h2>
                <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={data}
                                dataKey="value"
                                innerRadius={70}
                                outerRadius={120}
                                paddingAngle={2}
                                cornerRadius={10}
                            />
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default ActivityRing;