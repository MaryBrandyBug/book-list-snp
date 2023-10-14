'use client';

import { useState } from 'react';
import s from './book.module.scss';
import Modal from '../Modal';
import Button from '../Button';

export default function Book() {
  const [openModal, setOpenModal] = useState(false);

  const showModal = () => {
    setOpenModal(true);
  };

  return (
    <div className={s.root}>
      {openModal && <Modal onClick={setOpenModal} />}
      <div className={s.header}>
        <h2>Название</h2>
      </div>
      <div className={s.content}>
        <div className={s.container}>
          <p className={s.info}>Автор</p>
          <p className={s.info}>Год</p>
        </div>
        <div className={s.footer}>
          <Button img="/edit.svg" alt="edit icon" />
          <Button img="/eye.svg" alt="zoom icon" onClick={showModal} />
        </div>
      </div>
    </div>
  );
}
