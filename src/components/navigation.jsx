import React from 'react';
import soundcloud_image from '../assets/soundcloud_image.png';
import discord_image from '../assets/discord_image.png';
import twitch_image from '../assets/twitch_image.png';
import store_image from '../assets/store_image.png';

const Navigation = () => {
    return (
        <div className='navigation container'>
            <div className='navigation-images container'>
                <div className='container'>
                    <a href='#'><img src={soundcloud_image}/></a>
                    <p>SounbCloud</p>
                </div>
                <div className='container'>
                    <a href='#'><img src={discord_image}/></a>
                    <p>Discord</p>
                </div>
                <div className='container'>
                    <a href='#'><img src={twitch_image}/></a>
                    <p>Twitch</p>
                </div>
                <div className='container'>
                    <a href='#'><img src={store_image}/></a>
                    <p>Store</p>
                </div>
            </div>
        </div>
    );
}

export default Navigation;
