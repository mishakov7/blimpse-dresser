import React  from 'react';

export default function Drawer(props) {

    return(
        <div className={
            'drawer ' 
            + (props.name + "-drawer ")
            + (props.drawerWidth >= 95 ? "row" : "col") 
            + (props.name.includes("hide") ? " hiding" : "")} 
            
            style={{width: props.drawerWidth + "%", height: props.drawerHeight + "%",  }}>
            <div className='inner'>
                {props.children}
            </div>
        </div>
    )
}