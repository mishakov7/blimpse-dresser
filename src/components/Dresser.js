import React, { useState, useEffect, useLayoutEffect } from 'react';
import Frame from './Frame';
import Example1 from './Example1';
import { animateDrawer } from './Animate';

const leftDrawer = {
    direction: "left",
    width: 25,
    height: 100
}

const topDrawer = {
    direction: "top",
    width: 100,
    height: 60
}

const bottomDrawer = {
    direction: "bottom",
    width: 100,
    height: 45
}

const rightDrawer = {
    direction: "right",
    width: 75,
    height: 100
}

export default function Dresser(props) {
    const [direction, setDirection] = useState("hide");
    const [width, setWidth] = useState(0);
    const [tempWidth, setTempWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [tempHeight, setTempHeight] = useState(0);

    const toggleDrawer = (obj) => {
        if (direction == obj.direction) {
            setDirection("hide-" + obj.direction);
            setTempWidth(0);
            setTempHeight(0);
        } else {
            setDirection(obj.direction);
            setTempWidth(obj.width);
            setTempHeight(obj.height);
        }
    }

    useLayoutEffect(() => {
        let target;
        // let targetH = frameHeight - props.drawerHeight;

        if (direction == "left" || direction == "right") {
            target = tempWidth - width;
            setHeight(100);
            animateDrawer(width, setWidth, target);
        
        } else if (direction == "top" || direction == "bottom") {
            target = tempHeight - height;
            setWidth(100);
            animateDrawer(height, setHeight, target);
        
        } else if (direction == "hide-left" || direction == "hide-right") {
            target = 0;
            setHeight(100);
            animateDrawer(width, setWidth, target);

            setTimeout(() => {
                setDirection("hide");
                setWidth(0);
                setHeight(0);
            }, 400 + (400 * 0.6));
            
        } else if (direction == "hide-top" || direction == "hide-bottom") {
            target = 0;
            setWidth(100);
            animateDrawer(height, setHeight, target);

            setTimeout(() => {
                setDirection("hide");
                setWidth(0);
                setHeight(0);
            }, 400 + (400 * 0.6));
        }

    }, [direction]);

    return(
        <>
        <div className='dresser' style={{display: "flex", justifyContent: "space-between", flexDirection: ( direction == "top" || direction == "bottom" || direction == "hide-top" || direction == "hide-bottom" ? "column" : "row") }}>

            { direction == "top" || direction == "left" || direction == "hide-top" || direction == "hide-left" ? 
            <Example1 name={direction} drawerWidth={width} drawerHeight={height}/> : null }

            <Frame drawerWidth={tempWidth} drawerHeight={tempHeight} direction={direction} setDrawerWidth={setWidth} setDrawerHeight={setHeight}>
                <div className="dpad">
                    <button onClick={() => toggleDrawer(topDrawer)} className="top">Toggle Top Drawer</button>
                    <button onClick={() => toggleDrawer(leftDrawer)} className="lft">Toggle Left Drawer</button>
                    <button onClick={() => toggleDrawer(rightDrawer)} className="rgt">Toggle Right Drawer</button>
                    <button onClick={() => toggleDrawer(bottomDrawer)} className="btm">Toggle Bottom Drawer</button>
                </div>
            </Frame>

            { direction == "right" || direction == "bottom" || direction == "hide-right" || direction == "hide-bottom"? 
            <Example1 name={direction} drawerWidth={width} drawerHeight={height} /> : null }
        </div>
        </>
    );
}