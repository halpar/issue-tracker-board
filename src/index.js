// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import moment from 'moment';
import enGB from 'antd/lib/locale-provider/en_GB';
import 'moment/locale/en-gb';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './utils/Redux/store';

moment.locale('en-gb'); // sets first day of the week to monday

ReactDOM.render(
    <React.StrictMode>
        <ConfigProvider locale={enGB}>
            <Provider store={store}>
                <App />
            </Provider>
        </ConfigProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
