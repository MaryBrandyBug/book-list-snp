import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    addBook(state, action) {
      state.push({
        id: new Date().getTime(),
        title: action.payload.title,
        author: action.payload.author,
        year: action.payload.year,
      });
    },
    editBook(state, action) {
      const { values, id } = action.payload;
      const index = state.findIndex((item) => item.id === id);
      const result = [...state];
      result[index] = {
        ...state[index],
        title: values.title,
        author: values.author,
        year: values.year,
      };
      return result;
    },
  },
});

export const { addBook, editBook } = bookSlice.actions;
export default bookSlice.reducer;
