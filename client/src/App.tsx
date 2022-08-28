import React from 'react';
import './App.css';
import List from './components/List/List';


interface AppProps {
  title: string
}

const App: React.FC<AppProps> = ({ title }) => {
    return (
        <div className="container">
            <h1 className="header">
                {title}
            </h1>

            <List />
        </div>
    );
}

export default App
