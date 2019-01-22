import React from 'react';

const ComponentToRender = ({ renderComponent }) => {
    return (
        <div id='rendered-component' className='w-100 mt4 mb4'>
            {renderComponent()}
        </div>
    )
}

export default ComponentToRender;