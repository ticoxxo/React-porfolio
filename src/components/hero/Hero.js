import React from 'react';

import config from '../../../config';
const pic = require('../../images/avatar.jpeg');



export default function Hero() {
    return (
        <header>
            <span className="avatar">
                <img height="128px" src={pic} alt="" />
            </span>
            <h1>{config.authorName}</h1>
            <p>{config.heading}</p>
        </header>
    );
}
 
  