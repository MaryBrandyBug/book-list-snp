'use client';

import { func, number, string } from 'prop-types';
import s from './bookPreview.module.scss';
import Button from '../Button';

export default function BookPreview({
  title, author, year, onClick,
}) {
  return (
    <div className={s.root}>
      <div className={s.header}>
        <h2>{title}</h2>
        <Button className={s.closeBtn} onClick={onClick} img="/close.svg" alt="close button icon" />
      </div>
      <div className={s.container}>
        <div className={s.block}>
          <img src="/author.svg" alt="author" />
          <p className={s.info}>{author}</p>
        </div>
        <div className={s.block}>
          <img src="/calendar.svg" alt="calendar" />
          <p className={s.info}>{year}</p>
        </div>
      </div>
    </div>
  );
}

BookPreview.propTypes = {
  title: string.isRequired,
  author: string.isRequired,
  year: number.isRequired,
  onClick: func,
};
