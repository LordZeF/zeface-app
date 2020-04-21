import React from 'react';
import Tilt from 'react-tilt'
import brain from './brain.png';
import './Logo.css';


const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max: 60 }} style={{ height: 160, width: 160 }} >
                <div className="Tilt-inner pa2"><img alt="logo" src={brain}></img></div>
            </Tilt>
        </div>
    );
}

export default Logo;