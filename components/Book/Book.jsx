'use client';

import s from './book.module.scss';

export default function Book() {
  return (
    <div className={s.root}>
      <div className={s.header}>
        <h2>Название</h2>
      </div>
      <div className={s.content}>
        <div className={s.container}>
          <p className={s.info}>Автор</p>
          <p className={s.info}>Год</p>
        </div>
        <div className={s.footer}>
          <button className={s.btn} type="button"><img src="/edit.svg" alt="edit icon" /></button>
          <button className={s.btn} type="button"><img src="/eye.svg" alt="eye icon" /></button>
        </div>
      </div>
    </div>
  );
}
