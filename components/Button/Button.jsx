'use client';

import s from './button.module.scss';

export default function Button() {
  return (
    <button className={s.root} type="button"><img src="/addCircle.svg" alt="add new book button" /></button>
  );
}
