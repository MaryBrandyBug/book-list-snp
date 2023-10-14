'use client';

import { func } from 'prop-types';
import Button from '../Button';
import s from './modal.module.scss';

export default function Modal({ onClick }) {
  return (
    <div className={s.root}>
      <div className={s.content}>
        <div className={s.header}>
          <h2>Название</h2>
          <Button className={s.closeBtn} onClick={onClick} img="/close.svg" alt="close button icon" />
        </div>
        <div className={s.container}>
          <div className={s.block}>
            <img src="/author.svg" alt="author" />
            <p className={s.info}>Автор</p>
          </div>
          <div className={s.block}>
            <img src="/calendar.svg" alt="calendar" />
            <p className={s.info}>Год</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  onClick: func,
};
