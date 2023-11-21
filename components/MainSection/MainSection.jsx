'use client';

import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDebounce } from 'use-debounce';

import Book from '../Book';
import SearchField from '../SearchField';

import s from './mainSection.module.scss';

export default function MainSection() {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery] = useDebounce(searchQuery, 500);
  const allBooks = useSelector((state) => state.books);

  // фильтруем входящий массив книг, если у нас поле фильрации НЕ пустое, тогда показываем соответствующие критериям поиска книги
  // если поле фильтрации пустое - обрабатываем весь массив данных
  const showedBooks = allBooks.filter((book) => {
    const data = [book.title.toLowerCase(), book.author.toLowerCase(), book.year.toString()];
    if (searchQuery) {
      return data.some((item) => item.includes(searchQuery.toLowerCase()));
    }
    return true;
  });

  const library = showedBooks.map((book) => <Book title={book.title} author={book.author} year={book.year} key={book.id} id={book.id} />);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    if (searchQuery)router.push(`?search=${debouncedQuery}`);
    if (!searchQuery)router.push('/');
  }, [debouncedQuery, router]);

  return (
    <div className={s.root}>
      <SearchField handleChange={handleChange} />
      <div className={s.container}>
        {/* если массив library пуст, но при этом мы получаем данные из local storage,
        мы оповещаем пользователя о том, что по его запросу в нашей библиотеке ничего не найдено */}
        {library}
        {library.length === 0 && allBooks && <div className={s.searchError}>Ничего не найдено...</div>}
      </div>
    </div>
  );
}
