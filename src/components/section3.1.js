import Integrate from './integrate'
// import Section3 from './section3';
import React from 'react'
import Links from './links';
// import { useState , useEffect } from 'react'

function section3_1() {
    const click1 = document.getElementById('link1');

    return (
        <div>
            <Links />  asfdasdf
            {
                click1.onclick ? (<Integrate />) : ('') 
            }

        </div>
    )
}

export default section3_1
