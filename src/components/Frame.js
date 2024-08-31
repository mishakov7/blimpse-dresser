import React, { useState, useEffect, useLayoutEffect } from 'react';
import { animateDrawer } from './Animate';

export default function Frame(props) {
    const [frameWidth, setFrameWidth] = useState(100);
    const [frameHeight, setFrameHeight] = useState(100);

    const margin = 2;

    useLayoutEffect(() => {
        let targetW = frameWidth - props.drawerWidth;
        let targetH = frameHeight - props.drawerHeight;
        // animateDrawer(frameWidth, setFrameWidth, targetW);

    }, [props.direction]);

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