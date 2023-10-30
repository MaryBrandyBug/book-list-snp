'use client';

import { caveat } from '@/app/styles/fonts';
import { useState } from 'react';
import s from './addBookGroup.module.scss';

import Button from '../Button';
import Modal from '../Modal';

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
      {openModal && <Modal modalType="show create form" onClick={setOpenModal} />}
    </div>
  );
}
