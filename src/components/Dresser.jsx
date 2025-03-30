import React, { useState, useEffect, useLayoutEffect } from 'react';
import Frame from './Frame';
import Drawer from './Drawer';
import { usePreviousValue } from './util/usePreviousValue';
import { animateDrawer } from './Animate';
import { leftDrawer, rightDrawer, topDrawer, bottomDrawer } from './constants/drawers';

export default function Dresser(props) {
    const [direction, setDirection] = useState("hide");
    const prevDirection = usePreviousValue(direction, "hide");

    const [width, setWidth] = useState(0);
    const [tempWidth, setTempWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [tempHeight, setTempHeight] = useState(0);

    function hideDrawer(dir) {
        setDirection("hide-" + dir);
        setTempWidth(0);
        setTempHeight(0);
    }

    function showDrawer(drawer) {
        setDirection(drawer.direction);
        setTempWidth(drawer.width);
        setTempHeight(drawer.height);
    }

    const toggleDrawer = (obj) => {
        if (direction == obj.direction) {
            hideDrawer(obj.direction);

        } else if (prevDirection != "hide") {
            hideDrawer(prevDirection);

            setTimeout(() => {
                setDirection("hide");
                setWidth(0);
                setHeight(0);
            }, 400 + (400 * 0.6));

            setTimeout(() => {
                showDrawer(obj);
            }, 400 + (400 * 1.2));

        } else {
            showDrawer(obj);
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
            setWidth(95);
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
            setWidth(95);
            animateDrawer(height, setHeight, target);

            setTimeout(() => {
                setDirection("hide");
                setWidth(0);
                setHeight(0);
            }, 400 + (400 * 0.6));
        }

    }, [direction]);

    useEffect(() => {
        switch(props.direction) {
            case "top":
                toggleDrawer(topDrawer);
                break;
            
            case "left":
                toggleDrawer(leftDrawer);
                break;

            case "bottom":
                toggleDrawer(bottomDrawer);
                break;

            case "right":
                toggleDrawer(rightDrawer);
                break;

            case "":
                toggleDrawer("hide-" + direction);
                break;
        }

    }, [props.direction])

    return(
        <>
        <div className='dresser' style={{display: "flex", justifyContent: "space-between", flexDirection: ( direction == "top" || direction == "bottom" || direction == "hide-top" || direction == "hide-bottom" ? "column" : "row") }}>

            { direction == "top" || direction == "left" || direction == "hide-top" || direction == "hide-left" ? 
            <Drawer name={direction} drawerWidth={width} drawerHeight={height}>
                {props.drawer}
            </Drawer> : null }

            <Frame drawerWidth={tempWidth} drawerHeight={tempHeight} direction={direction} setDrawerWidth={setWidth} setDrawerHeight={setHeight}>
                {props.children}
            </Frame>

            { direction == "right" || direction == "bottom" || direction == "hide-right" || direction == "hide-bottom"? 
            <Drawer name={direction} drawerWidth={width} drawerHeight={height}>
                {props.drawer}
            </Drawer> : null }
        </div>
        </>
    );
}