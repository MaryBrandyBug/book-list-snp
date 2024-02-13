import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    allBooks(state, action) {
      return action.payload;
    },
    addBook(state, action) {
      state.push(action.payload);
    },
    editBook(state, action) {
      const {
        title, author, year, id,
      } = action.payload;
      const book = state.find((item) => item.id === id);
      if (book) {
        book.title = title;
        book.author = author;
        book.year = year;
      }
    },
    removeBook(state, action) {
      const { id } = action.payload;
      return state.filter((item) => item.id !== id);
    },
  },
});

export const {
  allBooks, addBook, editBook, removeBook,
} = bookSlice.actions;
export default bookSlice.reducer;
