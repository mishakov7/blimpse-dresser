import React  from 'react';

export default function Example1(props) {

    return(
        <>
            <div className='drawer' style={{ width: props.drawerWidth + "%", height: props.drawerHeight + "%" }}>
                Example Component: 
                <h2>{props.name} Drawer </h2>
            </div>
        </>
    )
}