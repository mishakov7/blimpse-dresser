import React  from 'react';

export default function Example1(props) {

    return(
        <>
            <div className='drawer' style={{ width: props.drawerWidth + "%", height: props.drawerHeight + "%" }}>
                    Example Component: 
                    <h2>{props.name} Drawer </h2>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et est expedita beatae sint perferendis corporis hic consectetur esse inventore ipsa, temporibus eaque vero ea labore dolor mollitia in reiciendis qui veritatis sit vel id. Minus nam voluptatibus cum. Eveniet culpa rem a, dicta reiciendis necessitatibus iure minima vero magnam aspernatur?</p>

                    { props.drawerWidth < 100 && props.drawerWidth > 0 ? 
                    <p style={{position: "absolute"}}>width: <span style={{ fontSize: "2em", fontWeight: 800 }}>{props.drawerWidth}%</span></p> : null }

                    { props.drawerHeight < 100 && props.drawerHeight > 0 ? 
                    <p style={{position: "absolute"}}>height: <span style={{ fontSize: "2em", fontWeight: 800 }}>{props.drawerHeight}%</span></p> : null}
            </div>
        </>
    )
}