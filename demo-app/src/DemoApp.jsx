import React from 'react';
import Path from '../../src/Path';
import './DemoApp.css';

function DemoApp() {
    return (
        <div className="app">
            <header className="app-header">
                <p>
                    Edit <code>src/DemoApp.js</code> and save to reload.
                </p>
                <a
                    className="app-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <Path>
                This is into a Path
            </Path>
        </div>
    );
}

export default DemoApp;
