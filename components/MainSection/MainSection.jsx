'use client';

import { useSelector } from 'react-redux';
import { useState } from 'react';
import s from './mainSection.module.scss';
import Book from '../Book';

export default function MainSection() {
  const [value, setValue] = useState('');
  const allBooks = useSelector((state) => state.books);

  // фильтруем входящий массив книг, если у нас поле фильрации НЕ пустое, тогда показываем соответствующие критериям поиска книги
  // если поле фильтрации пустое - обрабатываем весь массив данных
  const showedBooks = allBooks.filter((book) => {
    const data = [book.title.toLowerCase(), book.author.toLowerCase(), book.year.toString()];
    if (value) {
      return data.some((item) => item.includes(value.toLowerCase()));
    }
    return true;
  });

  const library = showedBooks.map((book) => <Book title={book.title} author={book.author} year={book.year} key={book.id} id={book.id} />);

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
