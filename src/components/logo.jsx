// logo.js

import React from 'react';
import '../styles/header.scss';

function Logo(props) {
  return (
    <svg className='logo' version="1.1" viewBox="0 0 512 512">
      <path
        d="M 0 0 L 64 256 L 0 512 L 32 512 L 96 512 L 512 512 L 512 0 L 96 0 L 32 0 L 0 0 z M 120 96 L 416 96 L 416 416 L 120 416 L 160 256 L 120 96 z "
      />
    </svg>
  );
}

export default Logo;