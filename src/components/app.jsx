import React from 'react';
import About from './about';
import Navigation from './navigation';
import Textfit from 'react-textfit';
import title_image from '../assets/title_image.png';
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
        <div className='center-panel'>
          <div><Textfit mode="single">The Music of the Future.</Textfit></div>
          <div className='container'><img className='title-image' src={title_image}/></div>
          <div className='container'><About changeTheme={updateTheme} /></div>
          <div className='container'><Navigation/></div>
        </div>
      </div>
    </div>
  );
}

export default App;
