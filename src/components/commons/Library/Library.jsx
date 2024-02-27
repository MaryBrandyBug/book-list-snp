'use client';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { Searcher } from 'fast-fuzzy';
import { useRouter } from 'next/router';

import selectBooks from '@/constants/variables';

import Book from '../Book';
import SearchField from '../SearchField';
import BookPreview from '../BookPreview';
import Modal from '../Modal';
import EditForm from '../EditForm';

import s from './Library.module.scss';

export default function Library() {
  const router = useRouter();
  const prevSearchQueryRef = useRef(null);
  const { query } = router;
  const dispatch = useDispatch();

  const [openPreviewModal, setOpenPreviewModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([]);

  const handleChange = (e) => setSearchQuery(e.target.value);
  const handleReset = () => setSearchQuery('');

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

  useEffect(() => {
    dispatch({ type: 'books/fetchBooks' });
  }, [dispatch]);

  const currentBooks = useSelector(selectBooks);
  const searcher = new Searcher(currentBooks, { keySelector: (obj) => [obj.title, obj.author] });

  useEffect(() => {
    if (searchQuery) {
      const res = searcher.search(searchQuery);
      setBooks(res);
    } else {
      setBooks(currentBooks);
    }
  }, [searchQuery, currentBooks]);

  const closeModal = () => {
    if (openPreviewModal) setOpenPreviewModal(false);
    if (openEditModal) setOpenEditModal(false);
  };

  const previewContent = (content) => {
    setOpenPreviewModal(true);
    setModalContent(content);
  };

  const editContent = (content) => {
    setOpenEditModal(true);
    setModalContent(content);
  };

  return (
    <div className={s.root}>
      {openPreviewModal && <Modal className={s.background}><BookPreview content={modalContent} onClick={closeModal} /></Modal>}
      {openEditModal && <Modal><EditForm content={modalContent} onClick={closeModal} /></Modal>}
      {currentBooks.length > 0 && <SearchField handleChange={handleChange} value={searchQuery} onClick={handleReset} />}
      <div className={s.content}>
        {books?.map((book) => <Book title={book.title} author={book.author} year={book.year} key={book.id} id={book.id} previewContent={previewContent} editContent={editContent} />) }
        {query.search && books.length === 0 && <div>Ничего не найдено...</div>}
      </div>
    </div>
  );
}
