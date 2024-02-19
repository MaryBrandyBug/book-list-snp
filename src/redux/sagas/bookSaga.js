import { call, put, takeLatest } from 'redux-saga/effects';
import { allBooks } from '../store/slicer/bookSlicer';

function statusHelper(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  }
  return Promise.reject(new Error(response.statusText));
}

function fetchBooksApi() {
  return fetch('http://localhost:8000/books')
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    });
}

function addBookApi(newBook) {
  return fetch('http://localhost:8000/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBook),
  })
    .then(statusHelper)
    .then((response) => response.json())
    .then((res) => res)
    .catch((err) => ({ err }));
}

function* fetchBooksSaga() {
  try {
    const books = yield call(fetchBooksApi);
    yield put(allBooks(books));
  } catch (e) {
    yield put({ type: 'FETCH_BOOKS_FAILED', message: e.message });
  }
}

function* addBookSaga({ payload }) {
  try {
    yield call(addBookApi, payload);
    const books = yield call(fetchBooksApi);
    yield put(allBooks(books));
  } catch (e) {
    yield put({ type: 'ADD_BOOKS_FAILED', message: e.message });
  }
}

function* booksSaga() {
  yield takeLatest('books/fetchBooks', fetchBooksSaga);
  yield takeLatest('books/addBook', addBookSaga);
}

export default booksSaga;
