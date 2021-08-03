import reportWebVitals from './reportWebVitals';
import { store } from './redux/store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function renderApp(){
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.state} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderApp();
store.subscribe(renderApp);
reportWebVitals();