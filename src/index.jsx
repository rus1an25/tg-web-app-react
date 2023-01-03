import React from 'react';
import './reset.css';
import './index.css';
import App from './Components/App/App';
import store from './Redux/store';
import {Provider} from "react-redux";
import {createRoot} from "react-dom/client";

const rootNode = document.getElementById('root');
const root = createRoot(rootNode);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
