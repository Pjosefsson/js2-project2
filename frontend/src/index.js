import React from 'react';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider, getState } from 'react-redux';
import { createRoot } from 'react-dom/client';
import musicReducer from './reducers/musicReducer';

export const store = createStore(musicReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(store.getState)
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);
