// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import { I18nextProvider } from 'react-i18next';
import moment from 'moment';
import enGB from 'antd/lib/locale-provider/en_GB';
import 'moment/locale/en-gb';
import { Provider } from 'react-redux';
import App from './App';
import i18n from './i18n';

import reportWebVitals from './reportWebVitals';

moment.locale('en-gb'); // sets first day of the week to monday

ReactDOM.render(
    <React.StrictMode>
        <ConfigProvider locale={enGB}>
            <I18nextProvider i18n={i18n}>
                <App />
            </I18nextProvider>
        </ConfigProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
