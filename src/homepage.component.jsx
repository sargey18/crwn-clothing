// first we need to import react from react 
import React from 'react';

import './homepage.styles.scss'

// we want this to be a functional component because we dont need any lifecycles at this time or store any state
const HomePage = () => (
    // we now need the two divs, one two be the continer and one to hold the items 
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>HATS</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>   
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Jackets</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>   
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Sneakers</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>   
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Womans</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>   
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Mens</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>   
            </div>
        </div>
    </div>
   
);

export default HomePage;