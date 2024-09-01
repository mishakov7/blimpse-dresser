import React, { useState, useEffect, useLayoutEffect } from 'react';
import { animateDrawer } from './Animate';

export default function Frame(props) {
    const [frameWidth, setFrameWidth] = useState(100);
    const [frameHeight, setFrameHeight] = useState(100);

    const margin = 2;

    useLayoutEffect(() => {
        let target;

        if (props.direction == "left" || props.direction == "right") {
            target = frameWidth - props.drawerWidth;
            animateDrawer(frameWidth, setFrameWidth, target);

        } else if (props.direction == "top" || props.direction == "bottom") {
            target = frameHeight - props.drawerHeight;
            animateDrawer(frameHeight, setFrameHeight, target);

        } else if (props.direction == "hide-left" || props.direction == "hide-right") {
            target = 100;
            animateDrawer(frameWidth, setFrameWidth, target);
            console.log("hiding.... setting width back to 100%");
            
        } else if (props.direction == "hide-top" || props.direction == "hide-bottom") {
            target = 100;
            animateDrawer(frameHeight, setFrameHeight, target);
            console.log("hiding.... setting height back to 100%");

        }

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