import React, { Children, createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const FriendContext = createContext()
const FriendProvider = ({ children }) => {
    const [storeHistory, setStoreHistory] = useState([])
    
    const handleTimeLineCall = (addCall) => {
        const updatedCall = { ...addCall, type: "call" };

        setStoreHistory([...storeHistory, updatedCall]);

        toast.success(`Call With ${addCall.name}`);

        console.log("New Entry:", updatedCall);
        console.log("Full History:", [...storeHistory, updatedCall]);
    };
  


    const handleTimeLineText = (addText) => {

        const updatedText = { ...addText, type: "text" };

        setStoreHistory([...storeHistory, updatedText]);
        toast.success(`Text With ${addText.name}`);

        console.log("New Text Entry:", updatedText);
    };

    const handleTimeLineVideo = (addVideo) => {

        const updatedVideo = { ...addVideo, type: "video" };

        setStoreHistory([...storeHistory, updatedVideo]);
        toast.success(`Video With ${addVideo.name}`);

        console.log("New Video Entry:", updatedVideo);
    };
    const data = {
        setStoreHistory,
        storeHistory,
        handleTimeLineCall,
        handleTimeLineText,
        handleTimeLineVideo
    }

    return (
        <FriendContext.Provider value={data}>
            {children}
        </FriendContext.Provider>

    );
};

export default FriendProvider;