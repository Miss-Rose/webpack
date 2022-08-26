import React from 'react'
import './App.css'

interface AppProps {
  title: string
}

const App: React.FC<AppProps> = ({ title }) => {
    return (
        <div>
            <h1 className="header">
                {title}
            </h1>
        </div>
    );
}

export default App
