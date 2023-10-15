'use client';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import s from './mainSection.module.scss';
import Book from '../Book';
import Button from '../Button';
import CreateModal from '../CreateModal';

export default function MainSection() {
  const [openModal, setOpenModal] = useState(false);
  const allBooks = useSelector((state) => state.books.books);

  const library = allBooks.map((book) => <Book title={book.title} author={book.author} year={book.year} key={book.id} />);

  const showModal = () => {
    setOpenModal(true);
  };

  return (
    <div className={s.root}>
      {openModal && <CreateModal onClick={setOpenModal} />}
      {library}
      <Button img="/addCircle.svg" alt="add book button" onClick={showModal} />
    </div>
  );
}
