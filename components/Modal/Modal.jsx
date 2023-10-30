'use client';

import { func, number, string } from 'prop-types';
import s from './modal.module.scss';
import BookPreview from '../BookPreview';
import CreateForm from '../CreateForm';
import EditForm from '../EditForm';

export default function Modal({
  title, author, year, onClick, modalType, id,
}) {
  return (
    <div className={s.root}>
      {modalType === 'show book' && <BookPreview title={title} author={author} year={year} onClick={onClick} />}
      {modalType === 'show create form' && <CreateForm onClick={onClick} />}
      {modalType === 'show book editor' && <EditForm onClick={onClick} id={id} />}
    </div>
  );
}

Modal.propTypes = {
  title: string,
  author: string,
  year: number,
  onClick: func,
  modalType: string.isRequired,
  id: number,
};
