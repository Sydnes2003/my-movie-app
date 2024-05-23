import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';
import './app/styles/index.scss';
import '@mantine/core/styles.css';
import {BrowserRouter} from "react-router-dom";
import {MantineProvider} from "@mantine/core";
import theme from "app/styles/theme.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <MantineProvider theme={theme}>
                <App />
            </MantineProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
