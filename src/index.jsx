import './css/style.scss';
import React from 'react';
import {createRoot} from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import MainPage from "./pages/main.jsx";

const render = createRoot(document.getElementById('root'));

const App = () => {
    return (
        <Provider store={store}>
            <div className={"container"}>
                <MainPage/>
            </div>
        </Provider>
    );
}

render.render(<App />);