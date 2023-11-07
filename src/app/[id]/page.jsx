'use client';

import { useSelector } from 'react-redux';

import s from './page.module.scss';

export default function page({ params: { id } }) {
  const allBooks = useSelector((state) => state.books);
  const book = allBooks.filter((item) => item.id === Number(id))[0];

  return (
    <div className={s.root}>
      <div className={s.bookBorder}>
        <div className={s.bookContentContainer}>
          <div className={s.authorContainer}>
            <p>{book.author}</p>
          </div>
          <div className={s.titleContainer}>
            <p>{book.title}</p>
          </div>
        </div>
        <div className={s.bookSpine} />
        <div className={s.bookPages} />
        <p className={s.bookYear}>{book.year}</p>
      </div>
    </div>
  );
}
