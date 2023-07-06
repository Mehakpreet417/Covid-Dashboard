import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './Contact-components/Store';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
import 'leaflet/dist/leaflet.css';

const queryClient = new QueryClient(); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
  </Provider>
);

