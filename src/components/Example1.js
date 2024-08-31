import React  from 'react';

export default function Example1(props) {

    return(
        <>
            <div className='drawer' style={{ width: props.drawerWidth + "%", height: props.drawerHeight + "%" }}>
                    Example Component: 
                    <h2>{props.name} Drawer </h2>

                    {/* { props.drawerWidth < 100 ? 
                    <p>width: <span style={{ fontSize: "5em", fontWeight: 800 }}>{props.drawerWidth}%</span></p> : null } */}

                    {/* { props.drawerHeight < 100 ? 
                    <p>height: <span style={{ fontSize: "5em", fontWeight: 800 }}>{props.drawerHeight}%</span></p> : null} */}
            </div>
        </>
    )
}