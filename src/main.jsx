import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import i18n from '../src/traduction/i18n.js';
import {I18nextProvider} from "react-i18next";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <I18nextProvider i18n={i18n}>
      <App />
      <ToastContainer />
      </I18nextProvider>

  </React.StrictMode>,
)
