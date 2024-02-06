import { call, put, takeLatest } from 'redux-saga/effects';
import { allBooks } from '../store/slicer/bookSlicer';

function fetchBooksApi() {
  return fetch('http://localhost:8000/books')
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    });
}

function* fetchBooksSaga() {
  try {
    const books = yield call(fetchBooksApi);
    yield put(allBooks(books));
  } catch (e) {
    yield put({ type: 'FETCH_BOOKS_FAILED', message: e.message });
  }
}

function* booksSaga() {
  yield takeLatest('books/fetchBooks', fetchBooksSaga);
}

export default booksSaga;
