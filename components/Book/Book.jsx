'use client';

import { useState } from 'react';
import { string } from 'prop-types';
import cx from 'classnames';
import s from './book.module.scss';
import Modal from '../Modal';
import Button from '../Button';

export default function Book({
  title, author, year,
}) {
  const [openModal, setOpenModal] = useState(false);

  const showModal = () => {
    setOpenModal(true);
  };

  return (
    <div className={cx(s.root, { [s.modal]: openModal })}>
      {openModal && <Modal title={title} author={author} year={year} onClick={setOpenModal} />}
      <div className={s.header}>
        <h2>{title}</h2>
      </div>
      <div className={s.content}>
        <div className={s.container}>
          <p className={s.info}>{author}</p>
          <p className={s.info}>{year}</p>
        </div>
        <div className={s.footer}>
          <Button img="/edit.svg" alt="edit icon" />
          <Button img="/eye.svg" alt="zoom icon" onClick={showModal} />
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: string.isRequired,
  author: string.isRequired,
  year: string.isRequired,
};
