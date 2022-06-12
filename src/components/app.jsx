// app.js
// Notes: Wrapping app in a secondary div for theming is redundant, but it's the simplest fix for the current theming implementation. Maybe restructure later?

import React from 'react';
import Header from './header';
import About from './about';
import Title from './title';
import '../styles/app.scss';

function App() {
  const [theme, setTheme] = React.useState(1);
  const themes = ['theme-dark', 'theme-light', 'theme-parchment', 'theme-low-light'];
  
  function updateTheme(){
    var nextTheme = (theme + 1) % themes.length;
    setTheme(nextTheme);
  }
  
  return (
    <div className={themes[theme]}>
      <div className='panels-flex app'>
        <div className='center-panel'><Title/><About changeTheme={updateTheme} /></div>
      </div>
    </div>
  );
}

export default App;


