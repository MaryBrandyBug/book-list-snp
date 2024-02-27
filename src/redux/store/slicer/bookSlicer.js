import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    allBooks(state, { payload }) {
      return payload;
    },
    editBook(state, { payload }) {
      const {
        id, edits,
      } = payload;
      const { title, author, year } = edits;
      const book = state.find((item) => item.id === id);
      if (book) {
        book.title = title;
        book.author = author;
        book.year = year;
      }
    },
    removeBook(state, payload) {
      const id = payload;
      return state.filter((item) => item.id !== id);
    },
    addBook(state, { payload }) {
      state.push(payload);
    },
  },
});

export const {
  allBooks, editBook, removeBook, addBook,
} = bookSlice.actions;
export default bookSlice.reducer;
