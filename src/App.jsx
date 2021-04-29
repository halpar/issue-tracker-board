/* eslint-disable import/order */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './presentation/themes/theme';
import Routes from './utils/routes';
import './App.less';
import { SelectedProjectProvider, ProjectsProvider } from './utils/Context';

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <ProjectsProvider>
                <SelectedProjectProvider>
                    <Routes />
                </SelectedProjectProvider>
            </ProjectsProvider>
        </ThemeProvider>
    );
}
