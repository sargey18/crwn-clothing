import React from "react";

import './menu-item.scss'
// we are going to use a functinal component because we dont need our function to hold any state because its the menus 

// this function will return what we will have on our homepage component 

// we want to dynaically generate a title by passing a title into our function as a props 
const MenuItem = ({ title, imageUrl, size }) => (
<div 

className={`${size} menu-item`}>

    <div className="background-image" style={{
         backgroundImage: `url(${imageUrl})` }}/>

    
    <div className='content'>
        <h1 className='title'> {title.toUpperCase()} </h1>
        <span className='subtitle'>Shop Now</span>
    </div>   
</div>
);

export default MenuItem;