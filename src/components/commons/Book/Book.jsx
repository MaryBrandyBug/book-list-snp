'use client';

import { useState } from 'react';
import { func, number, string } from 'prop-types';
import Image from 'next/image';

import Modal from '../Modal';
import Button from '../Button';
import EditForm from '../EditForm';

import s from './Book.module.scss';

export default function Book({
  title, author, year, id, previewContent,
}) {
  const [openEditModal, setOpenEditModal] = useState(false);

  const showEditor = () => {
    setOpenEditModal(true);
  };

  const handlePreviewContent = () => {
    previewContent({
      title, author, year, id,
    });
  };

  return (
    <div className={s.root}>
      {openEditModal && <Modal><EditForm id={id} onClick={setOpenEditModal} /></Modal>}
      <Button href={`/${id}`} as={id.toString()} className={s.contentLink}>
        <div className={s.contentWrapper}>
          <div className={s.header}>
            <h2>{title}</h2>
          </div>
          <div className={s.content}>
            <div className={s.container}>
              <p className={s.info}>{author}</p>
              <p className={s.info}>{year}</p>
            </div>
          </div>
        </div>
      </Button>
      <div className={s.footer}>
        <Button onClick={showEditor}><Image src="/edit.svg" alt="edit icon" width={50} height={50} /></Button>
        <Button onClick={handlePreviewContent}><Image src="/eye.svg" alt="zoom icon" width={50} height={50} /></Button>
      </div>

    </div>
  );
}

Book.propTypes = {
  title: string.isRequired,
  author: string.isRequired,
  year: number.isRequired,
  id: number.isRequired,
  previewContent: func,
};
