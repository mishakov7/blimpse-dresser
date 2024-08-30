import React, { useState, useEffect } from 'react';
import Frame from './Frame';

import Example1 from './Example1';

export default function Dresser(props) {
    const [component, setComponent] = useState(<Example1 name="Samantha" color="hsl(var(--accent2))" />);
    const [direction, setDirection] = useState("hide");

    const toggleDirection = (dirStr) => {
        if (direction == dirStr) {
            setDirection("hide");
        } else {
            setDirection(dirStr);
        }
    }

    return(
        <>
        <div className='dresser' style={{display: "flex", flexDirection: ( direction == "top" || direction == "bottom" ? "column" : "row") }}>

            { direction == "top" || direction == "left" ? component : null }

            <Frame>
                <div className="dpad">
                    <button onClick={() => toggleDirection("top")} className="top">Toggle Top Drawer</button>
                    <button onClick={() => toggleDirection("left")} className="lft">Toggle Left Drawer</button>
                    <button onClick={() => toggleDirection("right")} className="rgt">Toggle Right Drawer</button>
                    <button onClick={() => toggleDirection("bottom")} className="btm">Toggle Bottom Drawer</button>
                </div>
            </Frame>

            { direction == "right" || direction == "bottom" ? component : null }
        </div>
        </>
    );
}