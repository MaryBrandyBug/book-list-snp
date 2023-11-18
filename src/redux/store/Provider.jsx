'use client';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { node } from 'prop-types';

import store, { persistor } from './store';

export default function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}

ReduxProvider.propTypes = {
  children: node.isRequired,
};
