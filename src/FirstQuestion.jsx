import FirstImage from './assets/loveydovey.jpeg';
import React, { useState } from 'react';
import SecondAccept from './SecondAccept';
import SecondReject from './SecondReject';

function FirstQuestion(){
    const [accepted, setAccepted] = useState(false);
    const [rejected, setRejected] = useState(false);

    const handleYesClick = () => {
        setAccepted(true);
    }

    const handleNoClick = () => {
        setRejected(true);
    }

    if (accepted) {
        return <SecondAccept />;
    }
    if(rejected){
        return <SecondReject />;
    }

    return(
        <div className='First-Question'>
            <h1>Will You be My Valentines?</h1>
            <img src={FirstImage} className='First-Image'></img>
            <button className='yes-1' onClick={handleYesClick}>Yes?</button>
            <button className='no-1' onClick={handleNoClick}>No?</button>
        </div>
    );
}

export default FirstQuestion;