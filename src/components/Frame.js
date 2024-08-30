import React, { useState, useEffect } from 'react';

export default function Frame(props) {
    const [frameWidth, setFrameWidth] = useState(100);
    const [frameHeight, setFrameHeight] = useState(100);

    const margin = 2;

    return(
        <>
        <div className='main-frame' style={{ 
            margin: margin + "rem",
            width: "calc(" + frameWidth + "% - (" + 4 * margin + "rem))", 
            height: "calc(" + frameHeight + "% - (" + 4 * margin + "rem))" 
            }}>

            <div className='main-content'>
            {props.children}
            </div>
        </div>
        </>
    );
}