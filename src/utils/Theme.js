import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    colors:{
        dark: '#1a1a1a',
        medium: '#242424',
        light: '#333333',

    },
    fonts: ['sand-serif', 'Roboto'],
    fontSizes: {
        small: '1em',
        medium: '1.2em',
        large: '2em'
    }   
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;