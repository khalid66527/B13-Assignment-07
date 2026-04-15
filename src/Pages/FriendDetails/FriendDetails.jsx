import React from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
    const params = useParams();
    console.log(params);
    return (
        <div>
            <h1>FriendDetails</h1>
        </div>
    );
};

export default FriendDetails;