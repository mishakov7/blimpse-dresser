import React, { useState, useEffect, useLayoutEffect } from 'react';

export default function Frame(props) {
    const [frameWidth, setFrameWidth] = useState(100);
    const [frameHeight, setFrameHeight] = useState(100);

    const margin = 2;

    const animateDrawer = (target) => {
        let difference = frameWidth - target;
        // let time = ( difference / 5 ) * 100
        let increment = 5 / 10;

        if (target > 0 && target < 100) {
            let w = frameWidth;

            const interval = setInterval(() => {
                console.log("x");
                w = w - increment;
                setFrameWidth(w);
                // console.log(w);
            }, 10);

            setTimeout(() => {
                clearInterval(interval);
            }, props.duration);
        }
    }

    useLayoutEffect(() => {
        let targetW = frameWidth - props.drawerWidth;
        let targetH = frameHeight - props.drawerHeight;
        animateDrawer(targetW);

        console.log(frameWidth);

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