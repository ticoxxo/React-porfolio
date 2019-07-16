import React from 'react'


import HeroHeader from '../hero/HeroHeader';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';



export default function Hero() {
    return (
        <div>
         <HeroHeader />
          <AwesomeSlider>
           <div data-src="https://i.imgur.com/SxRMdgi.png" />
           <div data-src="https://i.imgur.com/DUj5IXv.png" />
           <div data-src="https://i.imgur.com/YmIOHCd.png" />
           <div data-src="https://i.imgur.com/NpgdJa2.png" />
           <div data-src="https://i.imgur.com/Xp6ZCE1.png" />
           <div data-src="https://i.imgur.com/0M8aUjm.png" />
           <div data-src="https://i.imgur.com/5bUdgzS.png" />
           <div data-src="https://i.imgur.com/0L0onPk.png" />
          </AwesomeSlider>
        </div>
    )
}
 
  