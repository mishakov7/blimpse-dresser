import React, { useState, useEffect } from 'react';

export default function Dresser(props) {

    return(
        <>
        <div>
            <div className='main-container'>
                {props.children}
            </div>
        </div>
        </>
    );
}