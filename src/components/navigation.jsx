import React from 'react';
import soundcloud_image from '../assets/soundcloud_image.png';
import discord_image from '../assets/discord_image.png';
import twitch_image from '../assets/twitch_image.png';
import store_image from '../assets/store_image.png';

const Navigation = (props) => {
    return (
        <div className='navigation container'>
            <div className='navigation-images container'>
                <div className='container'>
                    <div>
                        <a href={props.content.soundcloud}><img src={soundcloud_image}/></a>
                    </div>
                    <p><a href={props.content.soundcloud}>SounbCloud</a></p>
                </div>
                <div className='container'>
                    <div>  
                        <a href={props.content.discord}><img src={discord_image}/></a>
                    </div>
                    <p><a href={props.content.discord}>Discord</a></p>
                </div>
                <div className='container'>
                    <div>
                        <a href={props.content.twitch}><img src={twitch_image}/></a>
                    </div>
                    <p><a href={props.content.twitch}>Twitch</a></p>
                </div>
                <div className='container'>
                    <div>
                        <a href={props.content.store}><img src={store_image}/></a>
                    </div>
                    <p><a href={props.content.store}>Store</a></p>
                </div>
            </div>
        </div>
    );
}

export default Navigation;
