'use client';

import { useState } from 'react';
import s from './mainSection.module.scss';
import Book from '../Book';
import Button from '../Button';
import CreateModal from '../CreateModal';

export default function MainSection() {
  const [openModal, setOpenModal] = useState(false);

  const showModal = () => {
    setOpenModal(true);
  };

  return (
    <div className={s.root}>
      {openModal && <CreateModal onClick={setOpenModal} />}
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Button img="/addCircle.svg" alt="add book button" onClick={showModal} />
    </div>
  );
}
