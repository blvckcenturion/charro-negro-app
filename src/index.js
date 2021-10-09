import React from 'react';
import { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './utils/i18n';
ReactDOM.render(
    <Suspense fallback={<div>Loadind</div>}>
    <App />
    </Suspense>,
    document.getElementById('root')
);

