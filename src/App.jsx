/* eslint-disable import/order */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './presentation/themes/theme';
import Routes from './utils/routes';
import './App.less';
import { FirebaseContext, SelectedProjectProvider, ProjectsProvider } from './utils/Context';
import { firebase } from './firebase';

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <FirebaseContext.Provider value={{ firebase }}>
                <ProjectsProvider>
                    <SelectedProjectProvider>
                        <Routes />
                    </SelectedProjectProvider>
                </ProjectsProvider>
            </FirebaseContext.Provider>
        </ThemeProvider>
    );
}
