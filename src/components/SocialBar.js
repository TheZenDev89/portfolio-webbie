import React from 'react';
import { SocialIcon } from 'react-social-icons';

const SocialIcons = () => {
    return (
        <div id='icons-list' className='flex flex-row'>
            <div className='ph2'>
                <SocialIcon url='https://www.facebook.com/christopher.n.reeves' rel='noopener noreferrer' target='_blank' />
            </div>
            <div className='ph2'>
                <SocialIcon url='https://www.instagram.com/reev_o/?hl=en' rel='noopener noreferrer' target='_blank' />
            </div>
            <div className='ph2'>
                <SocialIcon url='https://www.google.com/+ChristopherNicholasReeves' rel='noopener noreferrer' target='_blank' />
            </div>
            <div className='ph2'>
                <SocialIcon url='https://www.linkedin.com/in/christopher-n-reeves/' rel='noopener noreferrer' target='_blank' />
            </div>
            <div className='ph2'>
                <SocialIcon url='https://github.com/TheZenDev89' rel='noopener noreferrer' target='_blank' />
            </div>
        </div>
    )
}

class SocialBar extends React.Component {
    render() {
        return (
            <div id='social-bar' className='flex justify-center items-center mt5 mb4'>
                <SocialIcons />
            </div>
        )
    }
}

export default SocialBar;