import React from 'react';
import './App.css';
import logo from './assets/React-icon.png';


interface AppProps {
  title: string
}

const App: React.FC<AppProps> = ({ title }) => {
    return (
        <div>
            <h1 className="header">
                {title}
            </h1>
            <img src={logo} style={{width: '100px', height: '100px'}} alt='images'/>
        </div>
    );
}

export default App
