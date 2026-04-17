import React, { Suspense } from 'react';
import Banner from './HomePage/Banner';
import AllFriends from './HomePage/AllFriends';

const Homepage = () => {

    
    return (
        <div>
       <Banner></Banner>
       <Suspense fallback={<div className="flex justify-center items-center min-h-[50vh]">
          <span className="loading loading-bars loading-xl text-4xl text-green-900"></span>
        </div>}>
        <AllFriends></AllFriends>
       </Suspense>
        </div>
    );
};

export default Homepage;