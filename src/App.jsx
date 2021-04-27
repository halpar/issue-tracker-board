/* eslint-disable import/order */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './presentation/themes/theme';
import Routes from './utils/routes';
import './App.less';
import './i18n';

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Routes />
        </ThemeProvider>
    );
}
