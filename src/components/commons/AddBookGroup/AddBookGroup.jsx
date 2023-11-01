'use client';

import { useState } from 'react';

import Button from '../Button';
import Modal from '@/components/commons/Modal';
import CreateForm from '@/components/commons/CreateForm';

import { caveat } from '@/styles/fonts';
import s from './AddBookGroup.module.scss';

export default function AddBookGroup() {
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
