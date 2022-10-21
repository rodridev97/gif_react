import React from 'react';
import ReactDOM from 'react-dom/client';

import GifExpertApp from './GifExpertApp';

import 'primereact/resources/themes/lara-dark-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'animate.css'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GifExpertApp />
);