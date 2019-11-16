import React from 'react';
import {AppStorage, store} from '../storage/index';

const withStorage = Component => props => (
  <AppStorage.Provider value={store}>
    <Component {...props} />
  </AppStorage.Provider>
);

export default withStorage;
