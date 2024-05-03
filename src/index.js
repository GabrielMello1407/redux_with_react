import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Passando a store para um provider para ser 
    consumido em todas as páginas as funções */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
