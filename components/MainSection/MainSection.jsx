'use client';

import { useSelector } from 'react-redux';
import { useState } from 'react';
import s from './mainSection.module.scss';
import Book from '../Book';

export default function MainSection() {
  const [value, setValue] = useState('');
  const allBooks = useSelector((state) => state.books);

  const library = allBooks.map((book) => <Book title={book.title} author={book.author} year={book.year} key={book.id} id={book.id} />);
  const filteringResult = allBooks.filter((item) => {
    const data = [item.title.toLowerCase(), item.author.toLowerCase(), item.year];
    return data.includes(value.toLowerCase());
  });

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={s.root}>
      <div className={s.searchField}>
        <form className={s.searchForm}>
          <input type="text" placeholder="Начать поиск" onChange={handleChange} />
        </form>
      </div>
      <div className={s.container}>
        {library}
      </div>
    </div>
  );
}
