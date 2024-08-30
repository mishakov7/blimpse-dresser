import React  from 'react';

export default function Example1(props) {

    return(
        <>
            <div className='drawer' style={{ background: props.color }}>
                Example 1: 
                <h2>{props.name}'s Drawer </h2>
            </div>
        </>
    )
}