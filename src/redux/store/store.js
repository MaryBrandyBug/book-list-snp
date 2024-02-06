import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import bookReducer from './slicer/bookSlicer';
import booksSaga from '../sagas/bookSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { books: bookReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(booksSaga);

export default store;
