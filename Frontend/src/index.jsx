import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import App from './components/app';
import { theme } from './styles/theme';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
