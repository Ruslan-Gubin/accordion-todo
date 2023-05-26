import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { App, persist, store } from './app';
import './app/styles/globals.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
  <PersistGate persistor={persist} loading={null}>
    <App />
    </PersistGate>
    </Provider>
);


