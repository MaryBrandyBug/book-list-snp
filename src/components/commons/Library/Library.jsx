'use client';

import { useSelector } from 'react-redux';

import Book from '../Book';
import SearchField from '../SearchField';

import s from './Library.module.scss';

export default function Library() {
  const allBooks = useSelector((state) => state.books);

  const library = allBooks.map((book) => <Book title={book.title} author={book.author} year={book.year} key={book.id} id={book.id} />);

  return (
    <div className={s.root}>
      <SearchField />
      <div className={s.content}>
        {library}
      </div>
    </div>
  );
}
