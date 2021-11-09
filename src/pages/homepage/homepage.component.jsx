// first we need to import react from react 
import React from 'react';
import Directory from '../../components/directory/directory.components';
import './homepage.styles.scss'

// we want this to be a functional component because we dont need any lifecycles at this time or store any state
const HomePage = () => (
    // we now need the two divs, one two be the continer and one to hold the items 
    <div className='homepage'>
        <Directory/>
    </div>
   
);

export default HomePage;