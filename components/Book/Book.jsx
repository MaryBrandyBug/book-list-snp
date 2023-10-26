'use client';

import { useState } from 'react';
import { number, string } from 'prop-types';
import s from './book.module.scss';
import Modal from '../Modal';
import Button from '../Button';

export default function Book({
  title, author, year, id,
}) {
  const [openPreviewModal, setOpenPreviewModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const showPreview = () => {
    setOpenPreviewModal(true);
  };

  const showEditor = () => {
    setOpenEditModal(true);
  };

  return (
    <div className={s.root}>
      {openPreviewModal && <Modal modalType="show book" title={title} author={author} year={year} onClick={setOpenPreviewModal} />}
      {openEditModal && <Modal modalType="show book editor" id={id} />}
      <div className={s.header}>
        <h2>{title}</h2>
      </div>
      <div className={s.content}>
        <div className={s.container}>
          <p className={s.info}>{author}</p>
          <p className={s.info}>{year}</p>
        </div>
        <div className={s.footer}>
          <Button img="/edit.svg" alt="edit icon" onClick={showEditor} />
          <Button img="/eye.svg" alt="zoom icon" onClick={showPreview} />
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: string.isRequired,
  author: string.isRequired,
  year: number.isRequired,
  id: number.isRequired,
};
