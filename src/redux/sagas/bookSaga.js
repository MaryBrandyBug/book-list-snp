import { call, put, takeLatest } from 'redux-saga/effects';
import { allBooks } from '../store/slicer/bookSlicer';

function statusHelper(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  }
  return Promise.reject(new Error(response.statusText));
}

function fetchBooksApi() {
  return fetch('https://book-db-1.onrender.com/books')
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    });
}

function editBookApi(id, editedData) {
  return fetch(`https://book-db-1.onrender.com/books/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(editedData),
  })
    .then(statusHelper)
    .then((response) => response.json())
    .then((res) => res)
    .catch((err) => ({ err }));
}

function deleteBookApi(id) {
  return fetch(`https://book-db-1.onrender.com/books/${id}`, {
    method: 'DELETE',
    body: JSON.stringify(id),
  })
    .then((res) => res.json());
}

function* fetchBooksSaga() {
  try {
    const books = yield call(fetchBooksApi);
    yield put(allBooks(books));
  } catch (e) {
    yield put({ type: 'FETCH_BOOKS_FAILED', message: e.message });
  }
}

function* editBookSaga({ payload }) {
  try {
    const { id, edits } = payload;
    yield call(editBookApi, id, edits);
  } catch (e) {
    yield put({ type: 'EDIT_BOOK_FAILED', message: e.message });
  }
}

function* deleteBookSaga({ payload }) {
  try {
    yield call(deleteBookApi, payload);
    const books = yield call(fetchBooksApi);
    yield put(allBooks(books));
  } catch (e) {
    yield put({ type: 'DELETE_BOOK_FAILED', message: e.message });
  }
}

function* booksSaga() {
  yield takeLatest('books/fetchBooks', fetchBooksSaga);
  yield takeLatest('books/editBook', editBookSaga);
  yield takeLatest('books/removeBook', deleteBookSaga);
}

export default booksSaga;
