'use client';

import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Searcher } from 'fast-fuzzy';

import Book from '../Book';
import SearchField from '../SearchField';

import s from './Library.module.scss';

export default function Library() {
  const [searchQuery, setSearchQuery] = useState('');

  const allBooks = useSelector((state) => state.books);

  const searcher = new Searcher(allBooks, { keySelector: (obj) => [obj.title, obj.author] });

  // фильтруем входящий массив книг, если у нас поле фильрации НЕ пустое, тогда показываем соответствующие критериям поиска книги
  // если поле фильтрации пустое - обрабатываем весь массив данных
  const showedBooks = allBooks.filter((book) => {
    const { title, author, year } = book;
    const lowerSearchQuery = searchQuery.toLowerCase();
    return (
      !searchQuery
      || [title, author, year.toString()].some((item) => item.toLowerCase().includes(lowerSearchQuery))
    );
  });
  const library = showedBooks.map((book) => <Book title={book.title} author={book.author} year={book.year} key={book.id} id={book.id} />);

  const handleChange = (e) => setSearchQuery(e.target.value);

  return (
    <div className={s.root}>
      {allBooks.length > 0 && <SearchField handleChange={handleChange} />}
      <div className={s.content}>
        {/* если массив library пуст, но при этом мы получаем данные из local storage,
        мы оповещаем пользователя о том, что по его запросу в нашей библиотеке ничего не найдено */}
        {library}
        {library.length === 0 && allBooks.length !== 0 && <div className={s.searchError}>Ничего не найдено...</div>}
      </div>
    </div>
  );
}
