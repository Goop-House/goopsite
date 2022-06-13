import React from 'react';

function About(props){
    return (
        <div className='about'>
           <p>
                <strong>The Goop House</strong> is a community of creators. They specialize in revolutionizing genres and doing the unthinkable. 
                These creators participate in <strong>Goop Week</strong>, a fantastical event in which participants have exactly one week to make 
                a song based on a piece of <span onClick={props.changeTheme}>visual</span> art.
            </p>
            <p>
                Creating art from art, as trees host the birth of brilliantly colored fungi; what a delightful world us artists live in.
            </p>
        </div>
    );
}

export default About;


