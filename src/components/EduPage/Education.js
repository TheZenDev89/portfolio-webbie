import React from 'react';
import Edu1 from './Edu1';
import Edu2 from './Edu2';
import Edu3 from './Edu3';

import './Education.css';

const Education = () => {
    return (
        <div 
            id='education-page' className='flex flex-column items-center w-100'
        >
            <Edu1 />
            <Edu2 />
            <Edu3 />
        </div>
    )
}

export default Education;