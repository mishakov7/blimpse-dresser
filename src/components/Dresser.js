import React, { useState, useEffect, useLayoutEffect } from 'react';
import Frame from './Frame';
import Example1 from './Example1';

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
    const duration = 800;

    const toggleDrawer = (obj) => {
        if (direction == obj.direction) {
            setDirection("hide");
            setWidth(null);
            setHeight(null);
        } else {
            setDirection(obj.direction);
            setTempWidth(obj.width);
            setTempHeight(obj.height);
            
            setTimeout(() => {
                setWidth(obj.width);
                setHeight(obj.height);
            }, duration);
        }
    }

    return(
        <>
        <div className='dresser' style={{display: "flex", justifyContent: "space-between", flexDirection: ( direction == "top" || direction == "bottom" ? "column" : "row") }}>

            { direction == "top" || direction == "left" ? 
            <Example1 name={direction} drawerWidth={width} drawerHeight={height}/> : null }

            <Frame drawerWidth={tempWidth} drawerHeight={tempHeight} direction={direction} duration={duration}>
                <div className="dpad">
                    <button onClick={() => toggleDrawer(topDrawer)} className="top">Toggle Top Drawer</button>
                    <button onClick={() => toggleDrawer(leftDrawer)} className="lft">Toggle Left Drawer</button>
                    <button onClick={() => toggleDrawer(rightDrawer)} className="rgt">Toggle Right Drawer</button>
                    <button onClick={() => toggleDrawer(bottomDrawer)} className="btm">Toggle Bottom Drawer</button>
                </div>
            </Frame>

            { direction == "right" || direction == "bottom" ? 
            <Example1 name={direction} drawerWidth={width} drawerHeight={height} /> : null }
        </div>
        </>
    );
}