import React from 'react';
import Work1 from './Work1';
import Work2 from './Work2';
import Work3 from './Work3';
import Work4 from './Work4';
import Work5 from './Work5';
import Work6 from './Work6';

import './Work.css';

const Work = () => {
    return (
        <div 
            id='work-page' className='flex flex-column items-center w-100'
        >
            <Work1 />
            <Work2 />
            <Work3 />
            <Work4 />
            <Work5 />
            <Work6 />
        </div>
    )
}

export default Work;