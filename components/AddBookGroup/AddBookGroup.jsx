'use client';

import { useState } from 'react';

import Button from '../Button';
import Modal from '@components/Modal';
import CreateForm from '@components/CreateForm';

import { caveat } from '@/app/styles/fonts';
import s from './AddBookGroup.module.scss';

export default function addBookGroup() {
  const [openModal, setOpenModal] = useState(false);

  const showModal = () => {
    setOpenModal(true);
  };

  return (
    <div className={s.root}>
      <p className={`${s.arrowHeader} ${caveat.className}`}>Тыкай сюда чтобы добавить книгу</p>
      <img className={s.arrow} src="/arrow.svg" alt="arrow" />
      <Button img="/buttonAdd.svg" alt="add book button" onClick={showModal} className={s.addBtn} />
      {openModal && <Modal content={<CreateForm onClick={setOpenModal} />} />}
    </div>
  );
}
