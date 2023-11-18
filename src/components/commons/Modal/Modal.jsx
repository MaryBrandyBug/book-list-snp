'use client';

import { any } from 'prop-types';

import s from './Modal.module.scss';

export default function Modal({ children }) {
  return (
    <div className={s.root}>
      {children}
    </div>
  );
}

Modal.propTypes = {
  children: any,
};
