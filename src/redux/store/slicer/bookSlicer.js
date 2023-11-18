import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'books',
  initialState: { books: [] },
  reducers: {
    addBook(state, action) {
      state.books.push({
        id: new Date().getTime(),
        title: action.payload.title,
        author: action.payload.author,
        year: action.payload.year,
      });
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
