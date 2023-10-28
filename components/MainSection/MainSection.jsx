'use client';

import { useSelector } from 'react-redux';
import s from './mainSection.module.scss';
import Book from '../Book';

export default function MainSection() {
  const allBooks = useSelector((state) => state.books);

  const library = allBooks.map((book) => <Book title={book.title} author={book.author} year={book.year} key={book.id} id={book.id} />);

  return (
    <div className={s.root}>
      {library}
    </div>
  );
}
