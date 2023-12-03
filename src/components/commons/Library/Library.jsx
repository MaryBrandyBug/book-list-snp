'use client';

import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { Searcher } from 'fast-fuzzy';
import { useRouter } from 'next/router';

import Book from '../Book';
import SearchField from '../SearchField';

import s from './Library.module.scss';

export default function Library() {
  const router = useRouter();
  const prevSearchQueryRef = useRef(null);
  const { query } = router;

  const [searchQuery, setSearchQuery] = useState('');

  const allBooks = useSelector((state) => state.books);

  const searcher = new Searcher(allBooks, { keySelector: (obj) => [obj.title, obj.author] });

  const library = allBooks.map((book) => <Book title={book.title} author={book.author} year={book.year} key={book.id} id={book.id} />);
  const searchResult = searcher.search(query.search || '').map((book) => <Book title={book.title} author={book.author} year={book.year} key={book.id} id={book.id} />);

  const handleChange = (e) => setSearchQuery(e.target.value);

  useEffect(() => {
    if (prevSearchQueryRef.current === null) {
      prevSearchQueryRef.current = searchQuery;
    }
  }, [searchQuery]);

  useEffect(() => {
    const wasSearchQueryUpdated = prevSearchQueryRef.current !== searchQuery;

    if (searchQuery !== '' && wasSearchQueryUpdated) {
      router.push(`?search=${searchQuery}`);
    } else if (searchQuery === '' && wasSearchQueryUpdated) {
      const { search, ...queryWithoutSearch } = router.query;
      router.push({ pathname: router.pathname, query: queryWithoutSearch }, undefined, { shallow: true });
    }

    prevSearchQueryRef.current = searchQuery;
  }, [searchQuery, router]);

  useEffect(() => { if (query.search && !searchQuery) setSearchQuery(query.search); }, [query.search]);

  return (
    <div className={s.root}>
      {allBooks.length > 0 && <SearchField handleChange={handleChange} value={searchQuery} />}
      <div className={s.content}>
        {searchResult.length ? searchResult : library}
      </div>
    </div>
  );
}
