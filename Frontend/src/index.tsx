import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/index.scss';
import { ThemeProvider } from "@mui/material";
import App from './components/app';
import { theme } from "./styles/theme";
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <Router>
              <App />
          </Router>
      </ThemeProvider>
  </React.StrictMode>
);
