// header.js

import React from 'react';
import Logo from './logo'
import '../styles/header.scss';

function BasicHeader(props) {
  return (
    <>
      <Logo />
      <span className='title' >
        Something
        <span className='slogan' >{props.slogan}</span>
      </span>
    </>
  );
}

function ThemeSelect(props) {
  return (
  'DO shit'
  );
}

function Header(props) {
  const [selectTheme, updateSelect] = React.useState(false);
  
  return (
    <header className='header clear-floating unselectable'>
      <div className='title-group title-flex' onClick={props.changeTheme}>
        {selectTheme ? (
          <ThemeSelect />
        ) : (
          <BasicHeader />
        )}
      </div>
      <div className='room-group room-flex'>
        <span className='title' >Room: {props.room}</span>
      </div>
    </header>
  );
}

export default Header;