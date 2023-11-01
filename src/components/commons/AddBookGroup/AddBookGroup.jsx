'use client';

import { useState } from 'react';

import Button from '../Button';
import Modal from '../Modal';
import CreateForm from '../CreateForm';

import { caveat } from '@/styles/fonts';
import s from './AddBookGroup.module.scss';

export default function AddBookGroup() {
  const [openModal, setOpenModal] = useState(false);

  const showModal = () => {
    setOpenModal(true);
  };

  return (
    <div className={s.root}>
      <Button img="/buttonAdd.svg" alt="add book button" onClick={showModal} className={s.addBtn} />
      <p className={`${s.btnText} ${caveat.className}`}>Нажми, чтобы добавить книгу</p>
      {openModal && <Modal content={<CreateForm onClick={setOpenModal} />} />}
    </div>
  );
}
